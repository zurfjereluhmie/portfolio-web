interface KeyboardOptions {
  repeat?: boolean;
  caseSensitive?: boolean;
  domEl?: Window | HTMLElement | Document;
  useCode?: boolean;
  preventDefault?: boolean;
}

type KeyboardCallback = (key: string) => void;

export default class Keyboard {
  private repeat: boolean;
  private caseSensitive: boolean;
  private domEl: Window | HTMLElement | Document;
  private useCode: boolean;
  private preventDefault: boolean;
  private keysCurrentlyPressed: Set<string>;
  private listeners: Map<string, Set<KeyboardCallback>>;

  constructor({
    repeat = false,
    caseSensitive = false,
    domEl = window,
    useCode = true,
    preventDefault = true,
  }: KeyboardOptions = {}) {
    this.repeat = repeat;
    this.caseSensitive = caseSensitive;
    this.domEl = domEl;
    this.useCode = useCode;
    this.preventDefault = preventDefault;

    this.keysCurrentlyPressed = new Set();
    this.listeners = new Map();

    this.domEl.addEventListener("keydown", this._onKeyDown);
    this.domEl.addEventListener("keyup", this._onKeyUp);
  }

  destroy(): void {
    this.remove();
  }

  remove(): void {
    this.domEl.removeEventListener("keydown", this._onKeyDown);
    this.domEl.removeEventListener("keyup", this._onKeyUp);
  }

  on(event: string, callback: KeyboardCallback): () => void {
    return this.addListener(event, callback);
  }

  once(event: string, callback: KeyboardCallback): () => void {
    const callbackOnce = (data: string) => {
      this.removeListener(event, callbackOnce);
      callback(data);
      console.log("once");
    };
    this.addListener(event, callbackOnce);
    return () => this.removeListener(event, callbackOnce);
  }

  addListener(event: string, callback: KeyboardCallback): () => void {
    let callbackSet = this.listeners.get(event);
    // If it is the first callback for this event, we create a set storage
    if (!callbackSet) {
      callbackSet = new Set();
      this.listeners.set(event, callbackSet);
    }
    callbackSet.add(callback);
    // Return a removeListener function for convenience
    return () => this.removeListener(event, callback);
  }

  off(event: string, callback: KeyboardCallback): void {
    this.removeListener(event, callback);
  }

  removeListener(event: string, callback: KeyboardCallback): void {
    const callbackSet = this.listeners.get(event);
    if (!callbackSet) return;
    callbackSet.delete(callback);
  }

  onKey(key: string, callback: KeyboardCallback, downOrUp: "down" | "up" = "down"): () => void {
    if (!this.caseSensitive) key = key.toUpperCase();
    return this.on(`keyboard:${key}:${downOrUp}`, callback);
  }

  onceKey(key: string, callback: KeyboardCallback, downOrUp: "down" | "up" = "down"): () => void {
    if (!this.caseSensitive) key = key.toUpperCase();
    return this.once(`keyboard:${key}:${downOrUp}`, callback);
  }

  onKeys(keys: string[], callback: KeyboardCallback, downOrUp: "down" | "up" = "down", once = false): () => void {
    if (!this.caseSensitive) keys = keys.map((key) => key.toUpperCase());
    const callbackHandler = (keyPressed: string) => {
      if (!keys.includes(keyPressed)) return;
      if (!keys.every((key) => this.isKeyDown(key))) return;
      callback(keyPressed);
      if (once) this.off(`keyboard:${downOrUp}`, callbackHandler);
    };
    return this.on(`keyboard:${downOrUp}`, callbackHandler);
  }

  onceKeys(keys: string[], callback: KeyboardCallback, downOrUp: "down" | "up" = "down"): () => void {
    return this.onKeys(keys, callback, downOrUp, true);
  }

  private _onKeyDown = (event: Event): void => {
    const keyEvent = event as KeyboardEvent;
    if (this.preventDefault) keyEvent.preventDefault();
    if (!this.repeat && keyEvent.repeat) return;
    let keyPressed = this.useCode ? keyEvent.code : keyEvent.key;
    if (!this.caseSensitive) keyPressed = keyPressed.toUpperCase();
    this.keysCurrentlyPressed.add(keyPressed);

    this.emit("keyboard:down", keyPressed);
    this.emit(`keyboard:${keyPressed}:down`, keyPressed);
  };

  private _onKeyUp = (event: Event): void => {
    const keyEvent = event as KeyboardEvent;
    if (this.preventDefault) keyEvent.preventDefault();
    let keyReleased = this.useCode ? keyEvent.code : keyEvent.key;
    if (!this.caseSensitive) keyReleased = keyReleased.toUpperCase();
    this.emit("keyboard:up", keyReleased);
    this.emit(`keyboard:${keyReleased}:up`, keyReleased);
    this.keysCurrentlyPressed.delete(keyReleased);
  };

  isKeyDown(key: string): boolean {
    if (!this.caseSensitive) key = key.toUpperCase();
    return this.keysCurrentlyPressed.has(key);
  }

  areKeysDown(keys: string[]): boolean {
    return keys.every((key) => this.isKeyDown(key));
  }

  emit(event: string, data = ""): void {
    const callbackSet = this.listeners.get(event);
    if (!callbackSet) return;
    // We need to copy the set to avoid concurrency issues
    // because a callback might add or remove listeners
    const toCalls = [...callbackSet];
    for (const callback of toCalls) {
      callback(data);
    }
  }
}
