let weatherCode = parseInt(readLine(), 10);

switch (weatherCode) {
    case 1:
        console.log("მზიანი");
        break;
    case 2:
        console.log("წვიმიანი");
        break;
    case 3:
        console.log("მოღრუბლული");
        break;
    case 4:
        console.log("ქარიანი");
        break;
    default:
        console.log("არ არის დადგენილი");
}