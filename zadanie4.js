// ZAD 4.

// Dane wejściowe //
const people = [
  {
    firstName: "Alicja",
    lastName: "Kowalska",
    nickname: "Ajcwok",
    age: 19,
    aboutMe: "Cześć jestem Alicja Kowalska, ale w szkole mówią na mnie Ajcwok.",
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
    nickname: "Najwon",
    age: 8,
    aboutMe: "Cześć jestem Jan Nowak, ale w szkole mówią na mnie Najwon.",
  },
  {
    firstName: "Waldemar",
    lastName: "Malina",
    nickname: "Ramlam",
    age: 17,
    aboutMe: "Cześć jestem Waldemar Malina, ale w szkole mówią na mnie Ramlam.",
  },
  {
    firstName: "Mirosław",
    lastName: "Broda",
    nickname: "Wałado",
    age: 13,
    aboutMe: "Cześć jestem Mirosław Broda, ale w szkole mówią na mnie Wałado.",
  },
];

const colors = ["red", "green", "yellow", "blue", "pink", "orange"];

// Napisz funkcję, która :
//     a) przyjmie parametr typu number z zakresu 1 - 30
//     b) funkcja ma przyjmować jeden parametr typu number z zakresu 1 - 30
//     c) jeżeli podany parametr jest poza zakresem, powinien wyświetlić się odpowiedni komunikat
//         - podałeś za małą liczbę, liczba nie może być mniejsza niż 1
//         - podałeś za dużą liczbę, liczba nie może być większa niż 30
//     d) w przypadku wywołania funkcji bez parametru, powinniśmy ustawić domyślną wartość na 5
//     e) funkcja powinna zsumować pary klucz + wartość trzech pierwszych pozycji w obiekcie (użyj do tego Object.entries)
//     odjąć od tej sumy liczbę wprowadzoną w parametrze, a następnie za pomocą działania modulo (%) względem długości tablicy kolorów
//     wyznaczyć index
//     f) za pomocą indexu funkcja powinna wyciągnąć odpowiedni kolor z tablicy i wyświetlić go w konsoli.
// ​
//     Dla powyższego przykładu i liczby 5 wprowadzonej w parametrze, powinniśmy uzyskać wynik:
//     (45 - 5) % 6 = 4
//     console.log(colors[4]) //pink

const findColor = (array, enterNumber = 5) => {
  if (typeof enterNumber !== "number") {
    return "Upewnij się, że wpisałeś liczbę";
  } else if (enterNumber > 30) {
    return "odałeś za dużą liczbę, liczba nie może być większa niż 30";
    3;
  } else if (enterNumber < 1) {
    return "podałeś za małą liczbę, liczba nie może być mniejsza niż 1";
  }
  const peopleArray = (array, enterNumber) => {
    array.forEach((person) => {
      let sum = 0;
      let keyAndValue = 0;
      for (let [key, value] of Object.entries(person)) {
        if (keyAndValue < 3) {
          sum += key.length + String(value).length;
          let findingIndex = Math.abs(sum - enterNumber) % colors.length;
          person.myColor = "Mój ulubiony kolor to: " + colors[findingIndex];
          keyAndValue++;
        }
      }
    });
    return array;
  };
  return peopleArray(array, enterNumber);
};
const result = findColor(people, 5);
console.log(result);
//     Hints
//     - jeżeli po odjęciu parametru funkcji od sumy liter uzyskacie wartośc ujemną, możecie użyć metody z biblioteki Math,
//     Math.abs(-20), która zamieni liczbę na wartość absolutną, czyli dodatnią
