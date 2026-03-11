# Visual Regression Test Snapshots

Directory snapshot of the `tests/visual-regression.spec.ts-snapshots` folder. This folder contains snapshots for visual regression tests. Each snapshot corresponds to a specific test case and is used to compare the current state of the application against a previously saved state to detect any unintended visual changes.

## Tests

Run specificly the visual regression tests :

```bash
npx playwright test visual-regression
```

Update the snapshots for the visual regression tests :

```bash
npx playwright test visual-regression --update-snapshots
```
