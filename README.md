# Integrated Next.js platform

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
using [Preact](https://github.com/preactjs/preact) instead of React.

integrated with the following features:

- `/src` folder
- TypeScript
- Tailwind

To re-produce the project follow these steps:

## Initialization

```bash
yarn create next-app --example using-preact using-preact-app
```

## ´/src´ Folder

Just create the `/src` folder and move the `/pages` and `/styles` folder there.

## TypeScript

Add the dependencies

```bash
yarn add -D typescript @types/react @types/node
```

...create a `tsconfig.json`

```bash
touch tsconfig.json
```

...and build the project

```bash
yarn build
```

Next.js will pre-fill the tsconfig.json. I like to add a `baseUrl` and some `paths` for the folders from `/src` to the `compilerOptions`:

```json
"baseUrl": ".",
"paths": {
  "@components/*": ["src/components/*"],
  "@pages/*": ["src/pages/*"],
  "@styles/*": ["src/styles/*"],
  "@utils/*": ["src/utils/*"]
```

Finally, rename and translate all js/jsx files to TypeScript.

## Tailwind

Tailwind needs to be integrated as PostCSS plugin, so we will override the default settings. In order to keep Next.js' default behavior, we need to take over the default configuration explicitly: https://nextjs.org/docs/advanced-features/customizing-postcss-config.

Add the dependencies

```bash
yarn add -D tailwindcss postcss-flexbugs-fixes postcss-preset-env postcss-import autoprefixer
```

...add a `postcss.config.js` file with the following configuration

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009"
      },
      stage: 3,
      features: {
        "custom-properties": false
      }
    }
  }
};
```

...add a `tailwind.config.js` file with the following configuration

```javascript
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "accent-1": "#333"
      }
    }
  },
  variants: {},
  plugins: []
};
```
