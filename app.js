// fetch("https://jsonplaceholder.typicode.com/users/1")
const emailRef = document.querySelector(".email");

//  .then method
// you use a fetch statement followed by .then
// .then initiates a callback which has a response
// the response is the promise from backend
// then you use response.json to unlock promise
// have to use .then to retrieve promise,
// because response.json is a promise itself
// when you get the response from response.json
// it is compatible with front end

fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
});

// better formatted version
// Instead of having a second .then inside of the first
// return response.json directly
// and add second .then on same level

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    emailRef.innerHTML = data.email;
  });

//remember to add defer statement in script tag in HTML

// async/await method
// create an async function and await the promise
// inside of it instead of using .then after the promise
// the way to unlock the promise with async/await
// is by storing it in a variable
// awaiting the promise already returns a response
// so store it in a response variable
// similar to .then, you have to retrieve a promise
// inside of another promise. follow the same logic
// and use response.json to make it readable
// by the front-end, and then await it again,
// and store the value inside another variable.

async function main() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();
  console.log(data);
  emailRef.innerHTML = data.email;
}

main();
