const fn2 = require("./fn2");

test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
  expect(fn2.makeUser("Mike", 30)).toEqual({
    name: "Mike",
    age: 30,
  });
});

// 보다 엄격하게 test case 작성

test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
  expect(fn2.makeUser("Mike", 30)).toStrictEqual({
    name: "Mike",
    age: 30,
  });
});
