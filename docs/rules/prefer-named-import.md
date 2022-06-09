# Prefer named imports (prefer-named-import)

As a team, there are certain files that we'd prefer only named imports


## Rule Details

Using the following config when setting up your ESLint rule. Specify
the paths of the files you'd prefer named imports from. If you leave 
the paths array empty, it will assume you always want named imports.

```json

   "curology/no-default-import": [
      2,
      {
        "paths": ["pathToCheckGoesHere", "."]
        }
      ],
```

Examples of **incorrect** code for this rule:

```js

import Module from '.';
```

Examples of **correct** code for this rule:

```js

import { Module } from '.';

```

## When Not To Use It

A lot of external packages might not have a named export and instead only
use a default export. It's important that you specify paths in the config
so you don't get errors for these external packages.
