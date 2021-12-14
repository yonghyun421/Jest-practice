const fn3 = require("./fn3");

// test("3초 후에 받아온 이름은 Mike", () => {
//   //   return fn3.getAge().then((age) => {
//   //     expect(age).toBe(30);
//   return expect(fn.getAge()).rejects.toBe(30);
// });

test("3초 후 나이 30", async () => {
  await expect(fn3.getAge()).resolves.toBe(30);
});
