if (global.document) {
  const originalProcessNextTick = process.nextTick;
  process.nextTick = cb => (cb.toString().indexOf('function flush()') === 0)
    ? undefined
    : originalProcessNextTick.apply(this, arguments);
}
