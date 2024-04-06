const nums = [5,1,2,3,10];
const words = ['colt', 'matt', 'tim', 'test'];
const objArr = [
    { name: 'Elie' },
    { name: 'Tim' },
    { name: 'Matt' },
    { name: 'Colt' }
]

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


const countedVowel = vowelCount('eeaaauoo');
const newObjArr = addKeyAndValue(objArr);
const firstAndLast = showFirstAndLast(words);
const numsEven = onlyEvenValues(nums);
const numsDoubled = doubleValues(nums);

