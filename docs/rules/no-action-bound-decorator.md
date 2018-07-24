# Prefer arrow function over action.bound decorator
(no-action-bound-decorator)

We prefer using arrow function to bind `this` instead of MobX&#39;s @action.bound decorator (no-action-bound-decorator)

## Rule Details

When using MobX to create a store, we can automatically bind `this` (the
context) by using the decorator `@action.bound`. However, we are also
able to bind `this` by using the arrow function. Since the arrow
function is an ECMAScript functionality, we prefer it over something
provided by MobX.

Examples of **incorrect** code for this rule:

```js
class Test {
  @action.bound
  test () {
    // do stuff
  }
}

```

Examples of **correct** code for this rule:

```js
class Test {
  @action
  test = () => {
    // do stuff
  }
}
```
