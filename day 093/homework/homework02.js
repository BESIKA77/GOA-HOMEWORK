function func() {
    let name = prompt("სახელი:");
    let age = Number(prompt("ასაკი:"));
    let dailyRun = Number(prompt("ყოველდღიური სირბილის რაოდენობა (კმ-ში):"));
    let workoutDays = Number(prompt("სავარჯიშო დღეების რაოდენობა კვირაში (0-დან 7-მდე):"));

    if (age < 16 || age >= 60) {
        alert("გთხოვთ, გაიაროთ ექიმის კონსულტაცია.");
    }

    let weeklyRun = dailyRun * workoutDays;

    if (weeklyRun < 20) {
        alert("შესაძლებელია მეტი ვარჯიში.");
    }
}

func();
