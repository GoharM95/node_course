console.log("js");

fetch("http://localhost:3000/weather?address=!").then((res) => {
  // address=armenia
  res.json().then((data) => {
    if (data.err) {
      console.log(data.err);
    } else {
      console.log(data.location);
      console.log(data.forecast);
    }
  });
});
