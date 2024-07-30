function sum(a, b) {
  return a + b;
}

function myFunction(input) {
  if (typeof input !== "number") {
    throw new TypeError("Invalid Input : Input must be a number");
  }
}

// for promises
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from the server");
    }, 1000);
  });
}

function fetchDataWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("An error occurred while fetching"));
    }, 1000);
  });
}

// async await
async function fetchDataAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched asynchronously");
    }, 1000);
  });
}

async function fetchDataAsyncWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error occurred asynchronously");
    }, 1000);
  });
}

const fetchDoneData = (callback) => {
  setTimeout(() => {
    callback("peanut butter");
  }, 1000);
};

module.exports = {
  sum,
  myFunction,
  fetchData,
  fetchDataWithError,
  fetchDataAsync,
  fetchDataAsyncWithError,
  fetchDoneData,
};
