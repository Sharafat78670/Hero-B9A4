function calculateMoney(ticketSale) {
    const ticketPrice = 120;
    const caretaker = 500;
    const staffLunch = 8 * 50;
    if (ticketSale <= 0) {
        return "Please input positive number."
    }
    const totalTaka = ((ticketSale * ticketPrice) - (caretaker + staffLunch));
    return totalTaka;
}

function checkName(name) {
    if (typeof name === "number" || typeof name !== "string") {
        return "invalid"
    }
    for (let i = name.length - 1; i >= 0; i--) {
        const element = name[i];
        if (element == 'A' || element == 'Y' || element == 'I' || element == 'E' || element == 'O' || element == 'W' || element == 'a' || element == 'y' || element == 'i' || element == 'e' || element == 'o' || element == 'w') {
            return "Good Name";
        }
        else {
            return "Bad Name";
        }
    }
}

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

function password(obj) {
    const { name, birthYear, siteName } = obj;
    if (!name || !birthYear || !siteName || String(birthYear).length < 4 || String(birthYear).length > 4) {
        return "invalid";
    }
    let password = obj.siteName[0].toUpperCase() + obj.siteName.slice(1) + '#' + obj.name + '@' + obj.birthYear;
    return password;
}

function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
        return "invalid input"
    }
    let sum = 0;
    let returnTex = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum += element;
        if (element >= 3000) {
            tex = element * 20 / 100;
            returnTex += tex;
        }
    }
    const totalSaving = sum - tex - livingCost;
    if (totalSaving < 0) {
        return "earn more"
    }
    return totalSaving;
}