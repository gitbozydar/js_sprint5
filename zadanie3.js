// // Zad 3 //

// Dane Wejściowe
const people = [
  {
    firstName: "Alicja",
    lastName: "Kowalska",
    nickname: "Ajcwok",
    age: 19,
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
    nickname: "Najwon",
    age: 8,
  },
  {
    firstName: "Waldemar",
    lastName: "Malina",
    nickname: "Ramlam",
    age: 17,
  },
  {
    firstName: "Mirosław",
    lastName: "Broda",
    nickname: "Wałado",
    age: 13,
  },
];
//     a) Do każdego obiektu dodaj funkcję introduceYourself, która za pomocą słówka this wyświetli w konsoli tekst powitalny.
const introduceYourself = (array) => {
  const introduceYourselfFunction = array.map((person) => {
    const addIntroKey = `Cześć jestem ${
      person.firstName + " " + person.lastName
    }, ale w szkole mówią na mnie ${person.nickname}.`;
    person.aboutMe = addIntroKey;
    return person;
  });
  return introduceYourselfFunction;
};
const result = introduceYourself(people);
console.log(people);
//     Dla powyższego przykładu tekst powinien wyglądać w następujący sposób:
//     "Cześć jestem Alicja Kowalska, ale w szkole mówią na mnie [Ajcwok]."
//     b) za pomocą pętli forEach, wywołaj funkcję powitalną dla każdego elementu tablicy. W rezultacie na ekranie powinien
//     pojawić się tekst powitalny dla każdej osoby w tablicy
const showOnlyIntro = (array) => {
  const displayEveryIntro = array.forEach((person) => {
    let onlyIntroArray = [];
    onlyIntroArray.push(person.aboutMe);
    return console.log(onlyIntroArray);
  });

  return displayEveryIntro;
};
showOnlyIntro(people);
