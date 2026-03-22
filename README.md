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

## Dev container

Open this repo in Cursor, then use `Reopen in Container`.

The container opens the new root repo so you can work across all app variants in one place.
