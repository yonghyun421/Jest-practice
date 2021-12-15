const fn4 = require("./fn4");

let num = 0;

test("0 더하기 1 은 1", () => {
  expect(fn4.add(num, 1)).toBe(1);
});

test("0 더하기 2 은 2", () => {
  expect(fn4.add(num, 1)).toBe(1);
});

test.only("0 더하기 3 은 3", () => {
  expect(fn4.add(num, 1)).toBe(1);
});

test.skip("0 더하기 4 은 4", () => {
  expect(fn4.add(num, 1)).toBe(1);
});
