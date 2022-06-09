# eslint-plugin-curology

Custom ESLint rules and [sharable config](https://eslint.org/docs/developer-guide/shareable-configs) used at [Curology](https://curology.com/).

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ yarn add eslint eslint-plugin-curology  --dev
```

### Usage (Config)

To enable this configuration use the `extends` property in your `.eslintrc` config file:

```
{
  "extends": [...otherConfig, "plugin:curology/recommended"]
}
```

`"plugin:curology/recommended"` must be the last entry in "extends" for best [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier/blob/1f206661b8e197e6753b772509028c34f954b42a/README.md#recommended-configuration) compatibility.

There is also a `"plugin:curology/cypress"` for Cypress rules and configuration.

### Usage (Plugin)

Add `curology` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["curology"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "curology/rule-name": 2
  }
}
```

## Supported Rules

- [`no-single-letter-variable`](docs/rules/no-single-letter-variable.md): prevent a single letter variable declaration (included in `recommended` config)
- [`prefer-named-import`](docs/rules/prefer-named-import.md): prefer named imports
