# NORM website

Vue and Vite website for NORM community workshop and studios.

## Development

Install dependencies and start the local development server:

```sh
npm install
npm run dev
```

## Static hosting build

Generate a static site with no server or worker runtime:

```sh
npm run build:static
```

The finished site is written to `dist/`. Upload the contents of that directory to any static web host.

Because the site uses Vue Router, the host must serve `index.html` when a requested route does not match a physical file. This keeps direct visits to routes such as `/workshop`, `/studios`, and `/donate` working.

## DigitalOcean App Platform

Create a **Static Site** component with these settings:

| Setting | Value |
| --- | --- |
| Build command | `npm run build:static` |
| Output directory | `dist` |
| Index document | `index.html` |
| Catch-all document | `index.html` |

The catch-all document is required for the client-side routes. No run command is needed.

## Sites-compatible build

The default production build also adds the worker entry point used by Sites:

```sh
npm run build
```

Use `npm run build:static` when deploying to DigitalOcean App Platform or another conventional static host.
