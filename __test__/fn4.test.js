const fn = require("./fn");
const fn2 = require("./fn2");

// toContain

test("유저 리스트에 Mike가 있나?", () => {
  const user = "Mike";
  const userList = ["Tom", "Mike", "Jane"];
  expect(userList).toContain(user);
});

test("이거 에러 나나요?", () => {
  expect(() => fn2.throwErr()).toThrow("xx");
});
