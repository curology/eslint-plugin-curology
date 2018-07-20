# Specify imports as screaming snakecase. (import-screaming-snake-case)

When importing files we consider as constants, we should declare the
default import in SCREAMING_SNAKE_CASE.


## Rule Details

By default, we do not consider any import to be an import of a constant.
For this rule to take effect, you need to declare which files are
constants in your ESlint config file. See the [Options](#Options) section
for details.

Examples of **incorrect** code for this rule:

```js

import testConstant from 'jsx/constants/testConstant';

```

Examples of **correct** code for this rule:

```js

import TEST_CONSTANT from 'jsx/constants/testConstant';

```

### Options

To declare files to be constant files, use an array of file paths. Globs
are supported:

```json
{
    "rules": {
        "curology/import-screaming-snake-case": [2, ["jsx/constants/**"]]
    }
}
```
