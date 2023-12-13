// // ZAD 2 //

// Dane wejściowe
const people = [
  {
    firstName: "Alicja",
    lastName: "Kowalska",
    nickname: "Ajcwok",
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
    nickname: "Najwon",
  },
  {
    firstName: "Halina",
    lastName: "Malina",
    nickname: "Anilam",
  },
  {
    firstName: "Anna",
    lastName: "Kowal",
    nickname: "Annlaw",
  },
  {
    firstName: "Mirosław",
    lastName: "Broda",
    nickName: "Wałado",
  },
];

// Rozszerz funkcję z poprzedniego zadania:
// Dodaj pole age, które jest wyliczane na podstawie sumy liter w imieniu i nazwisku. Jeżeli ilość liter w imieniu i
// nazwisku jest parzysta to wiek będzie będzie wyliczany, na postawie długości kluczy znajdujących się w obiekcie pomniejszone o długość imienia.
const addAge = (array) => {
  const lettersOfFirstName = array.map((person) => {
    const separatedFirstName = person.firstName.split("");
    const separatedLastName = person.lastName.split("");
    let addedAge = separatedFirstName.length + separatedLastName.length;
    const lengthOfKeys = Object.keys(person);
    if (addedAge % 2 === 0) {
      const sumOfKeyLength = lengthOfKeys.reduce((sum, key) => {
        return sum + key.length;
      }, 0);
      addedAge = sumOfKeyLength - separatedFirstName.length;
    }
    person.age = addedAge;
    return person;
  });
  return lettersOfFirstName;
};

const result = addAge(people);
console.log(result);
