const mockFn = jest.fn();

// mockFn();
// mockFn(1);

// test("함수는 2번 호출됩니다.", () => {
//   expect(mockFn.mock.calls.length).toBe(2);
// });

// test("2번째로 호출된 함수에 전달된 첫번째 인수는 1 입니다.", () => {
//     expect(mockFn.mock.calls.[1][0]).toBe(1);
//   });

function forEachAdd1(arr) {
  arr.forEach((num) => {
    mockFn(num + 1);
  });
}

forEachAdd1([10, 20, 30]);

test("함수 호출은 3번 됩니다", () => {
  expect(mockFn.mock.calls.length).toBe(3);
});
test("전달된 값은 11, 21, 31 입니다.", () => {
  expect(mockFn.mock.calls[0][1]).toBe(11);
  expect(mockFn.mock.calls[0][2]).toBe(21);
  expect(mockFn.mock.calls[0][3]).toBe(31);
});
