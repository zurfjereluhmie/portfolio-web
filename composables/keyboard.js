import Keyboard from "~/assets/utils/Keyboard";

export function useKeyboard() {
    const keyboard = new Keyboard({ useCode: false });

    onUnmounted(() => {
        keyboard.destroy();
    });

    return { keyboard };
}