const http = require("http");

const url = `http://api.weatherstack.com/current?access_key=a577ff23d3adea839ae8bbd499b3e7d2&query=40,-75&units=f`;

const request = http.request(url, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk.toString();
  });

  res.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("error", error);
});

request.end();
