# client-alteredstates-web

Umbrella repo for the Altered States website variants.

## Structure

- `apps/lovable` - current Lovable version
- `apps/bolt` - current Bolt version
- `apps/asbreathwork` - placeholder/client repo content copied in as-is

## Local development (no container required)

Install dependencies for the Vite apps:

```powershell
npm run install:all
```

Run both current site variants together:

```powershell
npm run dev:all
```

Or run one app at a time:

```powershell
npm run dev:lovable
npm run dev:bolt
```

Open in your system browser (Vite also tries to open one for you):

- Lovable: [http://127.0.0.1:8080](http://127.0.0.1:8080) or [http://localhost:8080](http://localhost:8080)
- Bolt: [http://127.0.0.1:8081](http://127.0.0.1:8081) or [http://localhost:8081](http://localhost:8081)

Do not use `http://0.0.0.0:8080` in the browser — that is not a valid destination on Windows.

If a port is already in use, either stop the other process or change the `port` in that app’s `vite.config.ts`.

## Shared Docker setup

This repo does **not** ship its own Dev Container. Use your existing shared environment if you develop inside Docker elsewhere.
