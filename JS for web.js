// 1-
let table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// even numbers
function filter(array) {
  let arrayEven = array.filter((even) => {
    return even % 2 === 0;
  });
  return arrayEven;
}
// the avg

function reduce1(array) {
  let lengOgArray = array.length;

  let sumEvenNumb = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  let avg = sumEvenNumb / lengOgArray;

  return avg;
}

function calculateAvg(array) {
  let even = filter(array);

  let avg = reduce1(even);

  return avg;
}

let testFunction1 = calculateAvg(table);
console.log(testFunction1);

// 2-
function maxMot(array) {
  let nweArray = [];

  for (let i = 0; i < array.length; i++) {
    let somme = 0;
    let word = array[i];
    for (let j = 0; j < word.length; j++) {
      somme++;
    }
    nweArray.push(somme);
  }

  let max = nweArray.reduce(
    (accumulator, currentValue) => Math.max(accumulator, currentValue),
    nweArray[0]
  );

  return max;
}

let tableau = ["hello", "wolrds"];

let testFunction2 = maxMot(tableau);
console.log(testFunction2);

// 3-

// an array of objects
let Books = [
  {
    title: "title1",
    author: "author1",
    pages: 55,
  },
  {
    title: "title2",
    author: "author2",
    pages: 95,
  },
  {
    title: "title3",
    author: "author3",
    pages: 995,
  },
  {
    title: "title4",
    author: "author4",
    pages: 345,
  },
  {
    title: "title5",
    author: "author5",
    pages: 555,
  },
];
// function to calculate the avrage
function averagePages(Books) {
  // use the map() function to creat an array of pages numbers
  let pages = Books.map((book) => {
    let booksPages = book.pages;
    return booksPages;
  });
  // the length of the array object
  let lengOFbooks = Books.length;
  // use the reduce() function to calculate the sum of pages
  let sum = pages.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  // calculate the avg
  let avg = sum / lengOFbooks;
  // result
  return avg;
}
let testFunction3 = averagePages(Books);
console.log(testFunction3);

// 4-
let string = ["hello", "world", "hello"];
function frequencyCount(array) {
  return string.reduce((accumulator, currentValue) => {
    if (!accumulator[currentValue]) {
      accumulator[currentValue] = 1;
    } else {
      accumulator[currentValue]++;
    }
    return accumulator;
  }, {});
}

let testFunction4 = frequencyCount(string);
console.log(testFunction4);

// 5-
let people = [
  { name: "Alice", age: 20, city: "nweyork" },
  { name: "Bob", age: 40, city: "chicago" },
  { name: "charlie", age: 35, city: "nweyork" },
];

function peopleCount(people) {
  //  map() method to get the city

  let count1 = people.map((peoples) => {
    let objectCity = peoples.city;
    return objectCity;
  });
  // calculate the frequency
  let count2 = count1.reduce((accumulator, currentValue) => {
    if (!accumulator[currentValue]) {
      accumulator[currentValue] = 1;
    } else {
      accumulator[currentValue]++;
    }
    return accumulator;
  }, {});

  return count2;
}
let testFunction5 = peopleCount(people);
console.log(testFunction5);
