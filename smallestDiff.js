let firstArr1 = [10, 20, 14, 16, 18]
let secondArr2 = [30, 23, 54, 33, 96]

const findSmallestDiff = (arr1, arr2) => {
    let smallestDiff = Math.abs(arr1[0] - arr2[0])
    for(num1 in arr1){
        for(num2 in arr2){
            if (Math.abs(arr1[num1] - arr2[num2]) < smallestDiff){
                smallestDiff = Math.abs(arr1[num1] - arr2[num2])
            }
        }
    }return smallestDiff
}

console.log(findSmallestDiff(firstArr1, secondArr2))