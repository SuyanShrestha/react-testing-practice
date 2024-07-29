const {
  sum,
  myFunction,
  fetchData,
  fetchDataWithError,
  fetchDataAsync,
  fetchDataAsyncWithError,
  fetchDoneData,
} = require("../sum");

// // test 1 using toBe
// test("adds 1 + 2 which will be equal to 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

// // test 2 using not toBe
// test("adding positive numbers is not zero", () => {
//   for (let a = 1; a < 10; a++) {
//     for (let b = 1; b < 10; b++) {
//       expect(a + b).not.toBe(0);
//     }
//   }
// });

// test 3 using toEqual
test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
  expect(Object.keys(data).length).toBe(2);
  expect(data).not.toBe({ one: 1, two: 3 });
});

// test 4
test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

// test 5
test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// test 6 using toThrow()
test("throws an error", () => {
  expect(() => myFunction("hello")).toThrow();
  //   expect(() => myFunction(123)).toThrow(Error);
});

// test 7 working with numbers
test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

// test 8 floating point numbers
test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});

// test 9 working with strings
test("there is no I in Suyan", () => {
  expect("Suyan").not.toMatch(/I/);
});

test('but there is a "Shri" in Shristi', () => {
  expect("Shristi").toMatch(/Shri/);
});

// check if string starts with specific substring
test('the string "hello world" starts with "hello"', () => {
  expect("hello world").toMatch(/^hello/);
});

// check if string ends with specific substring
test('the string "hello world" ends with "world"', () => {
  expect("hello world").toMatch(/world$/);
});

// check if a string does not contain any numbers
test('the string "hello" does not contain any numbers', () => {
  expect("hello").not.toMatch(/\d/);
});

// check if a string contains whitespace
test('the string "hello world" contains whitespace', () => {
  expect("hello world").toMatch(/\s/);
});

// test 10 working with arrays
const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

// check if array has specific element
test("the shopping list has milk on it", () => {
  expect(shoppingList).toContain("milk");
  expect(new Set(shoppingList)).toContain("milk");
});

// check length of array
test("the shopping list has 5 items", () => {
  expect(shoppingList).toHaveLength(5);
});

// check if an array includes a specific item at a specific index
test("the shopping list has milk at index 4", () => {
  expect(shoppingList[4]).toBe("milk");
});

// check if an array matches the exact contents
test("the shopping list has the correct items", () => {
  expect(shoppingList).toEqual(
    expect.arrayContaining([
      "diapers",
      "kleenex",
      "trash bags",
      "paper towels",
      "milk",
    ])
  );
});

// test 11 for assertions
test("multiple assertions", () => {
  expect.assertions(3); // Expecting three assertions

  expect(1 + 1).toBe(2);
  expect("hello").toBe("hello");
  expect([1, 2, 3]).toContain(2);
});

// ASYNCHRONOUS

// test 12 with promise
test("fetchData resolves with the correct data", () => {
  expect.assertions(1);
  return expect(fetchData()).resolves.toBe("Data from the server");
});

// test promise but with error
test("fetchData rejects with an error", () => {
  return expect(fetchDataWithError()).rejects.toThrow(
    "An error occurred while fetching"
  );
  // return expect(fetchDataWithError()).rejects.toThrow('Wrong error message');
});

// test 13 for async await

test("fetchDataAsync resolves with the correct data", async () => {
  expect.assertions(1);
  const data = await fetchDataAsync();
  expect(data).toBe("Data fetched asynchronously");
});

test("fetchDataAsyncWithError rejects with an error message", async () => {
  expect.assertions(1);
  try {
    await fetchDataAsyncWithError();
  } catch (error) {
    expect(error).toBe("Error occurred asynchronously");
  }
});

// test 14 for done()
test('the data is peanut butter', (done) => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchDoneData(callback);
});