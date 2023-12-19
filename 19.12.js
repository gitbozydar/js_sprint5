const people2 = [
  {
    firstName: "Bob",
    lastName: "Kornelski",
  },
  {
    firstName: "Konrad",
    lastName: "Bobowski",
  },
  {
    firstName: "Aleksander",
    lastName: "Borkowski",
  },
  {
    firstName: "Magda",
    lastName: "Barda",
  },
];

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
    firstName: "Anna",
    lastName: "Kowal",
  },
  {
    firstName: "Mirosław",
    lastName: "Broda",
  },
];

const colors = ["red", "green", "yellow", "blue", "pink", "orange"];

const generatePersonArray = (array, enterNumber) => {
  const onlyFirstName = (array) => {
    const firstNames = array.map((name) => name.firstName);
    const changedNames = firstNames.map((slicedName) => slicedName.slice(-3));
    const reversedNames = changedNames.map((str) =>
      str.split("").reverse().join("")
    );
    return reversedNames;
  };

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

  const nickName = () => {
    const newArrayOfFirstNames = onlyFirstName(array);
    const newArrayOfLastNames = onlyLastName(array);
    const newArray = newArrayOfFirstNames.map((i, j) => {
      return i + newArrayOfLastNames[j];
    });
    for (let i = 0; i < newArray.length; i++) {
      newArray[i] = newArray[i].toLowerCase();
    }
    const firstCapitalLetter = newArray.map((firstLetter) => {
      firstLetter = firstLetter.split("");
      firstLetter[0] = firstLetter[0].toUpperCase();
      return firstLetter.join("");
    });
    return firstCapitalLetter;
  };

  const newNicknameArray = nickName();

  const addNicknameToArray = (array) => {
    for (let i = 0; i < array.length; i++) {
      array[i].nickname = newNicknameArray[i];
    }
    return array;
  };

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

  const findColor = (array, enterNumber = 5) => {
    if (typeof enterNumber !== "number") {
      return "Upewnij się, że wpisałeś liczbę";
    } else if (enterNumber > 30) {
      return "Podałeś za dużą liczbę, liczba nie może być większa niż 30";
    } else if (enterNumber < 1) {
      return "Podałeś za małą liczbę, liczba nie może być mniejsza niż 1";
    }
    const peopleArray = (array, enterNumber) => {
      array.forEach((person) => {
        let sum = 0;
        let keyAndValue = 0;
        for (const [key, value] of Object.entries(person)) {
          if (keyAndValue < 3) {
            sum += key.length + String(value).length;
            const findingIndex = Math.abs(sum - enterNumber) % colors.length;
            person.myColor = "Mój ulubiony kolor to: " + colors[findingIndex];
            keyAndValue++;
          }
        }
      });
      return array;
    };
    return peopleArray(array, enterNumber);
  };

  const newArrayWithNicknames = addNicknameToArray(array);
  const newArrayWithAges = addAge(newArrayWithNicknames);
  const newArrayWithIntroductions = introduceYourself(newArrayWithAges);
  const newArrayWithColors = findColor(newArrayWithIntroductions, enterNumber);

  return newArrayWithColors;
};

const resultArray = generatePersonArray(people);
console.log(resultArray);
