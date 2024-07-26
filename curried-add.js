function curriedAdd(total) {
  if (total === undefined) {
    return 0;
  }
  return function add(num) {
    console.log("total", total, "num", num);
    if (num === undefined) {
      return total;
    }
    total += num;
    return add;
  };
}

module.exports = { curriedAdd };
