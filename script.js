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
      "http://jsonplaceholder.typicode.com/posts/",
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
//asyncFetchRequestPOST();

// 3. Metoda PUT
// POST => tworzy nowe miejsce na dane i je tam wrzuca
// PUT => weźmie sobie komórke danych, usunie stare dane i wrzuci nowe

// a) XMlHttpRequest
// b) Fetch API + then chain
// c) Fetch API + async/await

// 3. PUT (updating)

// a) XMLHttpRequest
const XMLPutRequest = () => {
  const body = JSON.stringify({
    id: 190,
    title: "foo",
    body: "bar",
    userId: 1,
  });

  const request = new XMLHttpRequest();
  request.open("PUT", "https://jsonplaceholder.typicode.com/posts/5");
  request.send(body);
  request.onload = function () {
    console.log(request.response);
  };
  request.onerror = function () {
    console.log("Something went wrong!");
  };
};
//XMLPutRequest();

// b) Fetch API + then chain
const FetchAPIPut = () => {
  const options = {
    method: "PUT",
    body: JSON.stringify({
      id: 150,
      title: "foo",
      body: "bar",
      userId: 7,
    }),
  };
  fetch("https://jsonplaceholder.typicode.com/posts/5", options)
    .then((res) => {
      console.log(res.status);
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.error(err.code, err.message));
};
//FetchAPIPut();

// c) Fetch API + async/await
const FetchAPIPutAsync = async () => {
  const options = {
    method: "PUT",
    body: JSON.stringify({
      id: 150,
      title: "foo",
      body: "bar",
      userId: 7,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/5",
      options
    );
    const data = await response.json();
    console.log(response.status);
    console.log(data);
  } catch (err) {
    console.error(err.code, err.message);
  }
};

// 4. Metoda PATCH

// PATCH aktualizuje pojedyncze czesci danych w bazie, mutuje dane, nazwy pól w obiekcie na serwerze i obiekcie wysyłanym muszą się zgadzać
// request PATCH tak samo jak POST i PUT przyjmuje body

// const person = {
//   name: "Andrew",
//   age: 30,
//   married: true,
// };

// const body = JSON.stringify({
//   age: 31,
// });

// person.age = 31

// a) XMLHttpRequest

const XMLRequestPATCH = () => {
  const body = JSON.stringify({
    id: 205,
  });

  const request = new XMLHttpRequest();

  request.open("PATCH", "https://jsonplaceholder.typicode.com/posts/5");
  request.send(body);
  request.onload = function () {
    console.log(request.status);
  };
  request.onerror = function () {
    console.error("Something went wrong!");
  };
};
//XMLRequestPATCH();

// b) Fetch API + then chain

const fetchRequestPATCH = () => {
  const options = {
    method: "PATCH",
    body: JSON.stringify({
      id: 205,
    }),
  };
  fetch("https://jsonplaceholder.typicode.com/posts/5", options)
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.error("Something went wrong!"));
};
//fetchRequestPATCH();

// c) Fetch API + async/await

const asyncFetchRequestPATCH = async () => {
  const options = {
    method: "PATCH",
    body: JSON.stringify({
      id: 205,
    }),
  };

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/5",
      options
    );
    console.log(response.status);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("Something went wrong!", err);
  }
};
//asyncFetchRequestPATCH();
// Nie zapominać o error handlingu!

// 5. Metoda DELETE

// DELETE usuwa zasoby w bazie danych

// XMLHttpRequest

const XMLRequestDELETE = (objId) => {
  const request = new XMLHttpRequest();
  request.open("DELETE", `https://jsonplaceholder.typicode.com/posts/${objId}`);
  request.send();
  request.onload = function () {
    console.log(request.status);
    const data = JSON.parse(request.responseText);
    console.log(request.responseText);
    console.log(data);
  };
  request.onerror = function () {
    console.error("Something went wrong!");
  };
};
// XMLRequestDELETE(1);
// XMLRequestDELETE(2);
// XMLRequestDELETE(3);
// XMLRequestDELETE(4);

// Fetch API + then chain

const fetchRequestDELETE = () => {
  // const options = {
  //   method: "DELETE",
  // };

  fetch("https://jsonplaceholder.typicode.com/posts/5", { method: "DELETE" })
    .then((response) => {
      console.log(response.status);
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.error("Something went wrong", err));
};
//fetchRequestDELETE();
// Fetch API + async/await

const asyncFetchRequestDELETE = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/5",
      {
        method: "DELETE",
      }
    );
    console.log(response.status);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("Something went wrong!", err);
  }
};
//asyncFetchRequestDELETE();
// a) error handling dla każdej funckji
// b) sprawdź co się dzieje gdy odwołamy się w URLu do całej listy (/posts/), sprawdź co się dzieje gdy odwołamy się do konkretnego obiektu (/posts/1)
// c) odpowiedz sobie na pytanie czy metoda DELETE potrzebuje body
// d) sprawdź co dostajemy w response przy metodzie DELETE

// Zad 1.
// https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=twojapikey
// a) Wykonaj GET request do podanego URLa bez parametru apikey, zanotuj co się dzieje
// b) użyj async/await i fetch()
// c) wykonaj console.log(response), response.status
// d) metoda .json() i console.log(data)

const fetchStocks = async () => {
  const response = await fetch(
    "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=MOF905T490J40QKZ"
  );

  const data = await response.json();

  // a) (Object.entries(), bracket notation)
  const table = Object.entries(data["Time Series (5min)"]);

  // b) (Object.keys(), Object.values() / .map())
  const keys = table.map((el) => el[0]);
  const values = table.map((el) => el[1]);

  // c) (.map(), bracket notation)
  const lowValues = values.map((el) => +el["3. low"]);

  // d) (Math.min(), spread operator)
  const lowValue = Math.min(...lowValues);

  // e) (.map(), bracket notation)
  const highValues = values.map((el) => +el["2. high"]);

  // f) (Math.max(), spread operator)
  const highValue = Math.max(...highValues);

  // g) (template string)
  console.log(`Amplitude: ${highValue - lowValue}`);
};
//fetchStocks();

// URL ZAWSZE JAWNY!!!!

// // Zad2
// // a) wyciągnij z otrzymanego obiektu obiekt 'Time Series (5min) (bracket notations js)
// // b) rozbij ten obiekt na 2 listy: klucze i wartości (Object.entries(), Object.values(), Object.keys())
// // c) z listy wartości powyciągaj wartości low (pole '3. low') (konwersja do liczby( Number())) .map()!!!
// // d) odszukaj z tej listy najmniejszą wartość i wyświetl ją do konsoli
// // e) z listy wartości powyciągaj wartości high (pole '2. high')
// // f) odszukaj z tej listy największą wartość i wyświetl ją do konsoli
// // g) oblicz amplitude tych wartości (różnica między wartością najwięszką a najmniejszą)

// // const x = [1, 2, 3, 4, 5];
// // console.log(x);
// // console.log(...x);

// const str = "123";
// console.log(str);
// console.log(+str);
// console.log(Number(str));

const fetchFootballData = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-Auth-Token": "1f020942fbbc4285b9af9c61c35c8ef5",
    },
  };

  const response = await fetch(
    "https://api.football-data.org/v2/competitions/CL/standings",
    options
  );

  console.log(response);
  console.log(response.status);
  const data = await response.json();
  console.log(data);
};
fetchFootballData();

// Zad 3.

// a) znajdź i wypisz nazwę rozgrywek
// b) znajdź i wypisz sezon jako string (format np. 'Sezon 1977/78', 'Sezon 2001/2002'), można to zrobić przy pomocy daty rozpoczęcia i zakończenia sezonu (.slice())
// c) wypisz ile jest grup w tym sezonie
// d) wypisz liderów z każdej grupy
