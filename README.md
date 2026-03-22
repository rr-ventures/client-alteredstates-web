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

- Lovable: [http://localhost:5173](http://localhost:5173) (default; may shift if the port is busy — read the terminal)
- Bolt: [http://localhost:5174](http://localhost:5174)

We avoid **8080/8081** here because they are very often taken by other tools (Docker Desktop, other apps), which makes Vite exit immediately and the site look “broken” in the browser.

If `npm run dev` prints a different URL, use that one. To free a port on Windows: `Get-NetTCPConnection -LocalPort 5173` then stop the listed process.

## Shared Docker setup

This repo does **not** ship its own Dev Container. Use your existing shared environment if you develop inside Docker elsewhere.
