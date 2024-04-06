const nums = [5,1,2,3,10];
const words = ['colt', 'matt', 'tim', 'test'];
const objArr = [
    { name: 'Elie' },
    { name: 'Tim' },
    { name: 'Matt' },
    { name: 'Colt' }
]
const fullNames = [
    { first: 'Elie', last: "Schoppik" },
    { first: 'Tim', last: "Garcia" },
    { first: 'Matt', last: "Lane" },
    { first: 'Colt', last: "Steele" }
];

const catOwners = [
    { first: 'Elie', last: "Schoppik" },
    { first: 'Tim', last: "Garcia", isCatOwner: true },
    { first: 'Matt', last: "Lane" },
    { first: 'Colt', last: "Steele", isCatOwner: true }
];
//------------for each method----------------------
function doubleValues(arr) {
    let newArr = [];
    arr.forEach(function(el){
        newArr.push(el*2);
    });
    return newArr;
}

function onlyEvenValues(arr){
    let newArr = [];
        arr.forEach(function (el) {
        if (el % 2 === 0) {
            newArr.push(el);
        }
    })
    return newArr;
}

function showFirstAndLast(arr) {
    let newArr = [];
    arr.forEach(function (el,i) {
        newArr.push(`${el[0]}${el[el.length - 1]}`);
    })
    return newArr;
}
function addKeyAndValue(arr) {
    let newArr = [];
    arr.forEach(function (el) {
        let newObj = el;
        newObj.title = 'instructor';
        newArr.push(newObj);
    })
    return newArr;
}
function isVowel(char) {
    return 'aeiou'.indexOf(char) !== -1;
}
function vowelCount(word) {
    let newObj = {};
    Array.from(word).forEach(function (char) {
        if (isVowel(char)) {
            if (newObj[char] >= 1) {
                newObj[char]++;
            } else { newObj[char] = 1; }
        }
    });
    return newObj;
}

function doubleValuesWithMap(arr) {
    let newArr = arr.forEach(function (el) {
        return el * 2;
    });
    return newArr;
}
//------------map method-------------------
function valTimesIndex(arr) {
    const newArr = arr.map(function (el, i) {
        return el * i;
    });
    return newArr;
}

function extractKey(arr,key) {
    const newArr = arr.map(function (el) {
        return el[key];
    });
    return newArr;
}

function extractFullName(arr) {
    const newArr = arr.mep(function (el) {
        return `${el.first} ${el.last}`;
    });
    return newArr;
}
//-------------filter method---------------------

function filterByValue(arr,string) {
    const newArr = arr.filter(function (el) {
        return el[string] === true; 
    });
    return newArr;
}

function find(arr, num) {
    const newArr = arr.filter(function (el) {
        return el === num;
    });

    return newArr[0];
}

function findInObj(arr, key) {
    const newArr = arr.filter(function (el) {
        return el[key] === true;
    });

    return newArr[0];
}

function removeVowles(word) {
    const newArr = Array.from(word).filter(function (el) {
        return !isVowel(el.toLowerCase()); 
    });
    return newArr.toString().toLowerCase();
}
    
function doubleOddNumbers(arr) {
    const newArr = arr.filter(function (el) {
        return el % 2 !== 0;
    }).map(function (el) {
        return el * 2; 
    });
    return newArr;
}

//test doubleOddNumbers
//test reomoveVowles
//test find in obj
const findNum = find(nums, 10);
const isCatOwner = filterByValue(catOwners, 'isCatOwner');
const fullNamesExtracted = extractFullName(fullNames);
const firstNames = extractKey(objArr, 'names');
const timesIndex = doubleValuesWithMap(nums);
const withMapDouble = doubleValuesWithMap(nums);
const countedVowel = vowelCount('eeaaauoo');
const newObjArr = addKeyAndValue(objArr);
const firstAndLast = showFirstAndLast(words);
const numsEven = onlyEvenValues(nums);
const numsDoubled = doubleValues(nums);

