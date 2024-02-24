# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

```
mklink /j @form-helper C:\projects\rigo\dami-rigo\hrms\nc\HR.Client\ClientApp\modules\ui\src\base\atoms\v2\Form\@form-helper
mklink /j form-provider C:\projects\rigo\dami-rigo\hrms\nc\HR.Client\ClientApp\modules\ui\src\base\atoms\v2\Form\form-provider
mklink /j connect-form C:\projects\rigo\dami-rigo\hrms\nc\HR.Client\ClientApp\modules\ui\src\base\atoms\v2\Form\connect-form
mklink /j form-label C:\projects\rigo\dami-rigo\hrms\nc\HR.Client\ClientApp\modules\ui\src\base\atoms\v2\Form\form-label
mklink /j form-error-label C:\projects\rigo\dami-rigo\hrms\nc\HR.Client\ClientApp\modules\ui\src\base\atoms\v2\Form\form-error-label
mklink /j rigo-input-text C:\projects\rigo\dami-rigo\hrms\nc\HR.Client\ClientApp\modules\ui\src\base\atoms\v2\Form\rigo-input-text
mklink /j rigo-select C:\projects\rigo\dami-rigo\hrms\nc\HR.Client\ClientApp\modules\ui\src\base\atoms\v2\Form\rigo-select
mklink /j rigo-text-area C:\projects\rigo\dami-rigo\hrms\nc\HR.Client\ClientApp\modules\ui\src\base\atoms\v2\Form\rigo-text-area
mklink /j rigo-checkbox C:\projects\rigo\dami-rigo\hrms\nc\HR.Client\ClientApp\modules\ui\src\base\atoms\v2\Form\rigo-checkbox
mklink /j rigo-radio-group C:\projects\rigo\dami-rigo\hrms\nc\HR.Client\ClientApp\modules\ui\src\base\atoms\v2\Form\rigo-radio-group
mklink /j rigo-nepali-datepicker C:\projects\rigo\dami-rigo\hrms\nc\HR.Client\ClientApp\modules\ui\src\base\atoms\v2\Form\rigo-nepali-datepicker


```
