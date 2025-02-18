let name1 = prompt("Enter the first name: ");
let name2 = prompt("Enter the second name: ");

if (name1.length > name2.length) {
    console.log(name1 + " is longer than " + name2);
} else if (name1.length < name2.length) {
    console.log(name2 + " is longer than " + name1);
} else {
    console.log("Both names have the same length.");
}