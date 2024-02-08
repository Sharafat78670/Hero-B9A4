function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Please input valid array.";
    }
    else {
        let newArray = [];
        for (let element of array) {    
            if (isNaN(element)) {
                delete (element);
            }
            else if (typeof element === "number") {
                newArray.push(element)
            }
        }
        return newArray;
    }
}
let example = ["1" , {num:2} , NaN ];
console.log(deleteInvalids(example))