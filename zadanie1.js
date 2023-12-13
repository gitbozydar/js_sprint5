// // ZAD 1 //

// Dane wejściowe //
const people = [
  {
    firstName: "Alicja",
    lastName: "Kowalska",
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
  },
  {
    firstName: "Halina",
    lastName: "Malina",
  },
  {
    firstName: "Marek",
    lastName: "Borek",
  },
  {
    firstName: "Konrad",
    lastName: "Kowal",
  },
  {
    firstName: "A",
    lastName: "B",
  },
];
// Napisz funkcję, która przetwarza każdą osobę w tablicy people w następujący sposób:
// a) Dla każdego imienia, weź ostatnie 3 litery, odwróć ich kolejność i zapisz do zmiennej.
const onlyFirstName = (array) => {
  const firstNames = array.map((name) => name.firstName);
  const changedNames = firstNames.map((slicedName) => slicedName.slice(-3));
  const reversedNames = changedNames.map((str) =>
    str.split("").reverse().join("")
  );
  return reversedNames;
};
const newArrayOfFirstNames = onlyFirstName(people);

// b) Dla każdego nazwiska, weź pierwsze 3 litery, zamień miejscami pierwszą i ostatnią literę, i dołącz do zmiennej utworzonej w punkcie a).
const onlyLastName = (array) => {
  const lastNames = array.map((last) => last.lastName);
  const changedLastNames = lastNames.map((slicedLastNames) =>
    slicedLastNames.slice(0, 3)
  );
  const reversedLastNames = changedLastNames.map((str) =>
    str.split("").reverse().join("")
  );
  return reversedLastNames;
};
const newArrayOfLastNames = onlyLastName(people);

// c) Zmień wielkość liter w taki sposób, aby ostateczny pseudonim (nickname) zaczynał się wielką literą, a reszta liter była mała.
const nickName = (array) => {
  const newArray = newArrayOfFirstNames.map((i, j) => {
    return i + newArrayOfLastNames[j];
  });
  for (i = 0; i < newArray.length; i++) {
    newArray[i] = newArray[i].toLowerCase();
  }
  const firstCapitalLetter = newArray.map((firstLetter) => {
    firstLetter = firstLetter.split("");
    firstLetter[0] = firstLetter[0].toUpperCase();
    return firstLetter.join("");
  });
  return firstCapitalLetter;
};
const newNicknameArray = nickName(people);

// d) Jeśli liczba znaków w imieniu lub nazwisku jest mniejsza niż 2, pseudonim będzie odpowiednio krótszy.
const addNicknameToArray = (array) => {
  for (i = 0; i < array.length; i++) {
    array[i].nickname = newNicknameArray[i];
  }
};
addNicknameToArray(people);
console.log(people);
