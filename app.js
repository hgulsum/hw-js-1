function sortByBirth(arr) {
    return arr.sort((a, b) => {
        let yearA = parseInt(a.split(', ')[1], 10);
        let yearB = parseInt(b.split(', ')[1], 10);

        return yearA - yearB;
    });
}

let namesAndYears = ["Ali, 1995", "Ramin, 1989", "Leyla, 2000"];
let sortedList = sortByBirth(namesAndYears);
console.log(sortedList);