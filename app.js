const nums = [5,1,2,3,10];

function doubleValues(arr){
    const newArr = arr.map(function(el){
        return el*2;
    });
    return newArr;
}

function onlyEvenValues(arr){
    const newArr = arr.filter(function(el){
        return el%2 === 0;
    })
    return newArr;
}



const numsEven = onlyEvenValues(nums);
const numsDoubled = doubleValues(nums);

