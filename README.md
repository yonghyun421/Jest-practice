# Jest-practice

Jest Practice Page

## day 1

### test 파일 형식

- npm test 하면 아래와 같은 형식들을 모두 찾아서 test한다.
  .test.
  \_\_test\_\_

설명은 쉽고 명확하게

toBe 부분에서 사용하는 함수를
`Matcher`라고 한다.

## day 2

### Matcher

- toEqual : 같은값인지
- toStrictEqual : 보다 엄격하게 test case 작성
- toBeNull : Null 값인지
- toBeUndefined : Undefined 값인지
- toBeDefined : Defined 값인지
- toBeTruthy : Truthy 값인지
- toBeFalsy : Falsy 값인지
- toBeGreaterThan : 크다
- toBeGreaterThanOrEqual : 크거나 같다
- toBeLessThan : 작다
- toBeLessThanOrEqual : 작거나 같다
- toContain : 배열에 포함되어있는지
- toThrow : 발생시키는지

## day 3 (fn3.js / fn5.test.js)

- callback
- promise
- async/await
  를 이용해서 만든 비동기 코드를 jest에서 테스트하기

## day 4 (fn7.test.js, fn8.test.js)

- beforeEach : test 전에 초기화
- afterEach : test 후에 초기화
- beforeAll : 전체 실행 전
- afterAll : 전체 실행 후

- test.only : 나머지 test 스킵하고 only가 들어간 test만 단독 실행
- test.skip : test.only와 반대로 skip 들어간 test만 제외

## day 5 (fn9, fn10, fn11)

### mockFn

- mock function : 테스트 하기 위해 흉내만 내는 함수
- mocking module : 실제로 객체가 생성되진 않고 테스트만

- toBeCalled : 한번이라도 호출됐으면 통과
- toBeCalledTimes : 정확한 호출 횟수
- toBeCalledWith : 인수로 어떤 값을 받았는지 체크
- lastCalledWith : 마지막으로 호출된 값의 인수만 체크

## day 6 (Hello.test.js)

### 리액트 컴포넌트 + 스냅샷 테스트

- CRA는 별도 설치없이 test 명령어 사용가능

### 스냅샷

- 성공하는 케이스를 찍어두고 비교하는 방법
- /_snapshot/_ 폴더가 생기고 찍은 케이스가 저장된다.

### 테스트 실패했을 경우 할 수 있는 방법

- 스냅샷 업데이트 후 갱신 ('w' 누르고 'u' 버튼 누르면 바로 갱신. 조심해서 사용)
- 버그를 찾아서 코드를 수정.

- 시간에 따라 변할 수 있는 값들은 테스트 전에 목함수를 이용해서 고정된 값으로 바꿔주고 test한다.
