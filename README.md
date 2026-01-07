# Laravel Vue NuxtUI with TypeScript

```sh
composer update
npm install
npm run build
php artisan serve
```

## Dev

```sh
# Vue
npm install
npm install vue@latest
npm install --save-dev @vitejs/plugin-vue
npm install vue-router
npm install vue-i18n
npm install pinia

# Optional
npm install @googlemaps/js-api-loader
npm install @highlightjs/vue-plugin

# Typescript
npm install typescript --save-dev
# Add typescript vue config
npm add -D @vue/tsconfig
# Vue type checkong
npm add -D vue-tsc
npx vue-tsc --noEmit

# NuxtUi components
npm install @nuxt/ui

# VuePrime components
npm install primevue
npm install @primeuix/themes
npm install @primeuix/forms
npm install primeicons
npm install quill
npm install zod
```

### Typescript Vue config

```json
{
    // Vue TypeScript config install @vue/tsconfig
    "extends": "@vue/tsconfig/tsconfig.dom.json",
    "include": ["resources/js/**/*.ts", "resources/js/**/*.d.ts", "resources/js/**/*.vue", "resources/js/app.ts", "auto-imports.d.ts", "components.d.ts"],
    "exclude": ["node_modules", "vendor"],
    "compilerOptions": {
        // Add console in ts
        "lib": ["ES2022", "DOM", "DOM.Iterable"],
        "target": "ES2022",
        "module": "ESNext",
        "moduleResolution": "bundler",

        // Import js files
        "allowJs": true, // Allow import js files
        "checkJs": true, // Check errors in js files

        // Vite-specific methods and accessors: import.meta
        "types": ["vite/client"],

        // Required in Vue projects
        "baseUrl": "./",

        /* Aliases */
        "paths": {
            "@/*": ["./resources/js/*"],
            "@assets/*": ["./resources/js/assets/*"],
            "@components/*": ["./resources/js/components/*"]
        },

        /* Linting */
        "strict": true,
        "noImplicitThis": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "noFallthroughCasesInSwitch": true,
        "noUncheckedSideEffectImports": true,
        "erasableSyntaxOnly": false
    }
}
```

### Vue Typescript config

```sh
# Select Vue TypeScript (without starter)
npm create vite@latest
```

### Links

```sh
# Ts
https://www.typescriptlang.org/tsconfig
https://advanced-inertia.com/blog/typescript
https://laravel-news.com/typescript-laravel
https://ui.nuxt.com/docs/getting-started/installation/vue
https://pl.vuejs.org/guide/typescript/overview
```

## Image

<img src="https://raw.githubusercontent.com/atomjoy/laravel-typescript-nuxtui/refs/heads/main/screenshot.png" width="100%">
