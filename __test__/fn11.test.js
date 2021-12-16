const mockFn = jest.fn();

// case 1

// mockFn
//   .mockReturnValueOnce(10)
//   .mockReturnValueOnce(20)
//   .mockReturnValueOnce(30)
//   .mockReturnValue(40);

// mockFn();
// mockFn();
// mockFn();
// mockFn();

// test("dd", () => {
//   console.log(mockFn.mock.results);
//   expect("dd").toBe("dd");
// });

// case 2

// mockFn
//   .mockReturnValueOnce(true)
//   .mockReturnValueOnce(false)
//   .mockReturnValueOnce(true)
//   .mockReturnValueOnce(false)
//   .mockReturnValue(true)

//   [(1, 2, 3, 4, 5)].filter((num) => mockFn(num));

// test("홀수는 1, 3, 5", () => {
//   expect(result).toStrictEqual([1, 3, 5]);
// });

// 비동기

mockFn.mockResolvedValue({ name: "Mike" });

test("받아온 이름은 Mike", () => {
  mockFn().then((res) => {
    expect(res.name).toBe("Mike");
  });
});
