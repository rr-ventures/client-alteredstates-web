# client-alteredstates-web

Umbrella repo for the Altered States website variants.

## Structure

- `apps/lovable` - current Lovable version
- `apps/bolt` - current Bolt version
- `apps/asbreathwork` - placeholder/client repo content copied in as-is

## Local development

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

Current ports:

- Lovable: `http://localhost:8080`
- Bolt: `http://localhost:8081`

Use those URLs in your **system browser** (Chrome/Edge). Do not use `http://0.0.0.0:8080` — that address is not valid in a normal browser.

## Dev container

Open this repo in Cursor, then use `Reopen in Container`.

The container opens the new root repo so you can work across all app variants in one place.

Ports **8080** and **8081** are forwarded to your machine automatically. After changing `.devcontainer/devcontainer.json`, run **Dev Containers: Rebuild Container** once so forwarding is applied.

If a site still won’t load from the host browser, check the **Ports** panel in Cursor/VS Code and confirm `8080` / `8081` are forwarded (not “private” only).
