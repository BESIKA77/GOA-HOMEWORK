let monthNumber = parseInt(readLine(), 10);
let monthName;

switch (monthNumber) {
    case 1:
        monthName = "იანვარი";
        break;
    case 2:
        monthName = "თებერვალი";
        break;
    case 3:
        monthName = "მარტი";
        break;
    case 4:
        monthName = "აპრილი";
        break;
    case 5:
        monthName = "მაისი";
        break;
    case 6:
        monthName = "ივნისი";
        break;
    case 7:
        monthName = "ივლისი";
        break;
    case 8:
        monthName = "აგვისტო";
        break;
    case 9:
        monthName = "სექტემბერი";
        break;
    case 10:
        monthName = "ოქტომბერი";
        break;
    case 11:
        monthName = "ნოემბერი";
        break;
    case 12:
        monthName = "დეკემბერი";
        break;
    default:
        console.log("არასწორი თვე");
        return;
}

console.log(monthName);

let halfOfYear = (monthNumber >= 1 && monthNumber <= 6) ? "პირველი ნახევარი" : "მეორე ნახევარი";
console.log(halfOfYear);