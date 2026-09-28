# open.state-machine

Small dependency-free finite state machine with guarded transitions and transition hooks.

## Install

```bash
npm install @journey-to-code/open-state-machine
```

## Usage

```js
const machine = createStateMachine({
  initial: "idle",
  transitions: { idle: { start: "running" }, running: { stop: "idle" } }
});
machine.transition("start");
```

## Runtime

- Node.js 18+
- modern ESM-capable tooling
- zero runtime dependencies

## Development

```bash
npm test
```

## Scope

This package intentionally focuses on one small, reusable responsibility.
Application-specific behavior belongs in higher-level packages.

## License

MIT
