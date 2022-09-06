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
XMLRequestGET();
// wywolanie
// b) Fetch API + then chain
// c) Fetch API + async/await



