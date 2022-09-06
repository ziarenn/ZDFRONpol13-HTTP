const fetchJSON = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
  request.send();
  request.onload = function () {
    // console.log(typeof request.responseText);
    // console.log(request.responseText);
    // console.log(JSON);
    const data = JSON.parse(request.responseText);
    console.log(data);
    const jsonString = JSON.stringify(data);
    console.log(jsonString);
  };
};
// fetchJSON();
// JEŻELI DOSTAJESZ RESPONSE OD SERWERA, TO DANE BĘDĄ W JSON
// ŻEBY PRACOWAĆ NA TYCH DANYCH W JS, MUSIMY NAJPIERW PRZEROBIĆ JSON NA ZWYKŁY JSOWY OBIEKT
// JSON.parse()

// JEŻELI WYSYŁASZ DANE NA SERWER, TO MUSISZ ZADBAĆ O TO, ŻEBY WYSŁANE DANE NIE BYŁY OBIEKTEM JSOWYM, TYLKO STRINGIEM JSONOWYM
// JSON.stringify()

// const x = {
//   email: "1213@123.pl",
//   password: "12343",
// };
// JSON.stringify()
// wysyłanie

// BLOK HTTP ZDFRONpol13

// METODY HTTP

// 1. Metoda GET

// a) XMLHttpRequest
// http://jsonplaceholder.typicode.com/todos/
const XMLRequestGET = () => {
  // 1. Stworzenie obiektu requesta
  const request = new XMLHttpRequest();

  // 2. Konfiguracja requesta przy pomocy metody .open()
  // 2 wymagane argumenty metody open:
  // - metoda HTTP (np. GET)
  // - url (endpoint jakiegoś API) z którego chcemy pobrać dane
  request.open("GET", "http://jsonplaceholder.typicode.com/todos/");

  // 3. Wysyłanie requesta (metoda .send())
  request.send();

  // 4. Oczekiwanie i reakcja na response
  request.onload = () => {
    // ta funkcja wykona się dopiero kiedy dotrze do nas odpowiedź od serwera
    // console.log(request);
    // console.log(request.responseText);
    const data = JSON.parse(request.responseText);
    console.log(data);
  };
};
//XMLRequestGET();

// b) Fetch API + then chain

const fetchRequestGET = () => {
  // 1. Wywołanie funkcji fetch, funkcja fetch domyślnie działa na metodzie GET
  fetch("http://jsonplaceholder.typicode.com/todos/")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};
//.json()
// 1. rs => json
// 2. json => obiekty
//fetchRequestGET();

// c) Fetch API + async/await

// async function fn1() {}

// const fn = async function () {};

const asyncFetchRequestGET = async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();
  console.log(data);
};
//asyncFetchRequestGET();

// 2. Metoda POST

// a) XMLHttpRequest
const data = JSON.stringify({
  name: "Andrew",
  age: 30,
});
const XMLRequestPOST = (body) => {
  const request = new XMLHttpRequest();
  request.open("POST", "http://jsonplaceholder.typicode.com/posts/");
  request.send(body);
  request.onload = function () {
    console.log(request);
    console.log(request.status);
    console.log(request.responseText);
  };

  request.onerror = function () {
    console.error("Something went wrong!");
  };
};
//XMLRequestPOST(data);

// JSON.parse: json => obj js
// JSON.stringify: obj js => json

// b) Fetch API + then chain

const fetchRequestPOST = () => {
  const options = {
    method: "POST",
    body: JSON.stringify({
      name: "Andrew",
      age: 30,
    }),
  };

  fetch("http://jsonpla321ceholder.typicode.com/posts/", options)
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
};
// fetchRequestPOST();
// fetchRequestGET();

// c) Fetch API + async/await

const asyncFetchRequestPOST = async () => {
  const options = {
    method: "POST",
    body: JSON.stringify({
      name: "Andrew",
      age: 30,
    }),
  };
  try {
    const response = await fetch(
      "http://jsonpla321ceholder.typicode.com/posts/",
      options
    );
    console.log(response);
    console.log(response.status);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
asyncFetchRequestPOST();
