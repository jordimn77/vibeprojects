# GeniusReplica Prototype

This repository contains a minimal React + Tailwind frontend and example API route used for experimenting with the GeniusReplica concept.

## Local development

```bash
npm install
npm --workspace frontend run dev
npm --workspace backend start
```

## Building

```bash
npm run build
```

The compiled frontend is output to `frontend/dist`.

## Deploying on Vercel

The repo includes a `vercel.json` configuration so you can deploy directly with Vercel. The `/api/hello` route is provided as a serverless function in `api/hello.js` and the static site comes from `frontend/dist`.

1. Push this repo to a new Git repository.
2. Create a project on Vercel and import the repository.
3. Vercel will run `npm run build` and deploy the contents of `frontend/dist`.

After deployment you can visit `/api/hello` to verify the API route is working.

