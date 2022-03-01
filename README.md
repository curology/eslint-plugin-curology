# eslint-plugin-curology

Custom ESLint rules for [Curology](https://curology.com/), as well as a [Shareable Config](https://eslint.org/docs/developer-guide/shareable-configs).

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ yarn add eslint eslint-plugin-curology  --dev
```

## Usage (Plugin)

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

- [`import-screaming-snake-case`](docs/rules/import-screaming-snake-case.md): allows you to specify globs in your config,
  if an import file should be using screaming snakecase (used for
  importing constant files).
- [`no-action-bound-decorator`](docs/rules/no-action-bound-decorator.md): prevent usage of `@action.bound` supplied by MobX library.
- [`no-single-letter-variable`](docs/rules/no-single-letter-variable.md): prevent a single letter variable declaration.

### Usage (Config)

To enable this configuration use the `extends` property in your `.eslintrc` config file:

```
{
  "extends": [...otherConfig, "plugin:curology"]
}
```

`"plugin:curology"` must be the last entry in "extends" for best [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier/blob/1f206661b8e197e6753b772509028c34f954b42a/README.md#recommended-configuration) compatibility,
