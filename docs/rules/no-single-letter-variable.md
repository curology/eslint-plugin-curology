# Do not allow single letter variable names (no-single-letter-variable)

As a team, we prefer more descriptive argument names (i.e. `event` over
`e`)


## Rule Details

Examples of **incorrect** code for this rule:

```js

const a = 'hello';
import a from 'test';

e => e.preventDefault();
```

Examples of **correct** code for this rule:

```js

const hello = 'world';
import Test from 'test';

event => event.preventDefault();

```

## When Not To Use It

If you're using an iterator and need to have a variable, it would be
appropriate to use `i` or `j`.

If you're declaring a comparator function, it would be appropriate to
use `a` and `b`.
