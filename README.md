# eslint-plugin-curology

[Shareable Config](https://eslint.org/docs/developer-guide/shareable-configs) used at [Curology](https://curology.com/). Set up as a plugin for any custom rules we want to write in the future.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ yarn add eslint eslint-plugin-curology  --dev
```

### Usage (Config)

To enable this configuration use the `extends` property in your `.eslintrc` config file:

```
{
  "extends": [...otherConfig, "plugin:curology"]
}
```

`"plugin:curology"` must be the last entry in "extends" for best [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier/blob/1f206661b8e197e6753b772509028c34f954b42a/README.md#recommended-configuration) compatibility,
