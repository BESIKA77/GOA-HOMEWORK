function func() {
    let name = prompt("სახელი:");
    let age = Number(prompt("ასაკი:"));
    let distance = Number(prompt("სამუშაო ადგილამდე მანძილი (კმ-ში):"));
    let workDays = Number(prompt("სამუშაო დღეების რაოდენობა კვირაში (0-დან 7-მდე):"));

    if (age < 16) {
        alert("გთხოვთ, მოითხოვოთ გამგზავრების ნებართვა უფროსისგან.");
    } else if (age >= 16 && age < 65) {
        if (distance <= 5) {
            alert("რეკომენდირებული ტრანსპორტი: ველოსიპედი");
        } else if (distance <= 20) {
            alert("რეკომენდირებული ტრანსპორტი: მანქანა");
        } else {
            alert("რეკომენდირებული ტრანსპორტი: მატარებელი");
        }

        if (workDays >= 5) {
            alert("გთხოვთ, შეამოწმოთ ტრანსპორტის შეღავათები.");
        }
    } else {
        alert("მიდი აბა მაგრად.");
    }
}

func();
