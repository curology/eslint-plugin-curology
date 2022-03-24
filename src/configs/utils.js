function isNotNullish(arg) {
  return arg !== null && arg !== undefined;
}

function isObjectLike(arg) {
  return (
    typeof arg === "object" && isNotNullish(arg) && !!Object.keys(arg).length
  );
}

function isJson(arg) {
  if (!isNotNullish(arg)) return false;

  return isObjectLike(arg);
}

module.exports = { isJson, isNotNullish, isObjectLike };
