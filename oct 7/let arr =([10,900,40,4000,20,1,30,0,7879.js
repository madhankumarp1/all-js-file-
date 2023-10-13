var arr = as([1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15])
console.log(arr.sort())
function as(arr) {
    for (let i = 1; i < arr.length; i++) {


        for (let j = 0; j < i; j++) {

            if (arr[i] < arr[j]) {
                let x = arr[i];
                arr[i] = arr[j];
                arr[j] = x;
            }
        }
    }
}

console.log(arr)
let b = arr.length - 1;
console.log(b)
let c = arr[b]
let d = arr[0]
console.log(d)
console.log(c)
console.log(d + "----------------" + c)



