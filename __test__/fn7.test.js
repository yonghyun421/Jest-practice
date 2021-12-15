const fn4 = require("./fn4");

beforeAll(() => console.log("밖 beforeAll"));
beforeEach(() => console.log("밖 beforeEach"));
afterEach(() => console.log("밖 afterEach"));
afterAll(() => console.log("밖 afterAll"));

test("0 + 1 = 1", () => {
  expect(fn4.add(0, 1)).toBe(1);
});

describe("Car 관련 직업", () => {
  beforeAll(() => console.log("안 beforeAll"));
  beforeEach(() => console.log("안 beforeEach"));
  afterEach(() => console.log("안 afterEach"));
  afterAll(() => console.log("안 afterAll"));

  test("0 + 1 = 1", () => {
    expect(fn4.add(0, 1)).toBe(1);
  });
});
