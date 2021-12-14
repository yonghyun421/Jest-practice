const fn2 = require("./fn2");

// toBeNull
// toBeUndefined
// toBeDefined

test("null은 null입니다.", () => {
  expect(null).toBeNull();
});

// toBeTruthy
// toBeFalsy

test("0은 false입니다.", () => {
  expect(fn2.add(1, -1)).toBeFalsy();
});

test("비어있지 않은 문자열은 true입니다.", () => {
  expect(fn2.add("Hello", "World")).toBeTruthy();
});

// toBeGreaterThan 크다
// toBeGreaterThanOrEqual 크거나 같다
// toBeLessThan 작다
// toBeLessThanOrEqual 작거나 같다

test("ID는 10자 이하여야 합니다.", () => {
  const id = "THE_BLACK";
  expect(id.length).toBeLessThanOrEqual(10);
});

test("0.1 더하기 0.2는 0.3 입니다.", () => {
  expect(fn2.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("Hello World 에 a 라는 글자가 있나?", () => {
  expect("Hello World").toMatch(/a/);
});
