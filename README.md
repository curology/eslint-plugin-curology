# eslint-plugin-curology

Custom ESlint rules for Curology

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-curology`:

```
$ npm install eslint-plugin-curology --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-curology` globally.

## Usage

Add `curology` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "curology"
    ]
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

* `import-screaming-snake-case`: allows you to specify globs in your config,
  if an import file should be using screaming snakecase (used for
importing constant files). Example of config:
```json
{
    "rules": {
        "curology/import-screaming-snake-case": [2, ["jsx/constants/**"]]
    }
}
```





