const geocide = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longtitude: 0,
    };
    // to get the data from asynchronous process like setTimeout
    // we can use a callback inside of it
    callback(data);
  }, 2000);
};

// geocide("Philadelphia", (data) => console.log(data));

const add = (num1, num2, callback) => {
  setTimeout(() => {
    const sum = num1 + num2;

    callback(sum);
  }, 2000);
};

add(1, 2, (sum) => console.log(sum));
