# Spectacular
## Setting up monorepo with npm workspaces and TypeScript

**Spectacular** is a simple testing framework created for fun in Node.js and TypeScript.

This branch contains code for setting up a monorepo for the project, using **npm workspaces**, with support for **TypeScript**. It is part of my medium article.

## Getting started

Install dependencies

```
npm i
```

Build the project

```
npm run build
```

## Running

### Core package

```
npm start -w @spectacular/core
```

### CLI package

```
npm start -w @spectacular/cli
```

### Monthy-python package

```
npm start -w @spectacular/monthy-python
```
