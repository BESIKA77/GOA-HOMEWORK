class Ticket {
    constructor(eventName, eventDate, price, isAvailable) {
        this.eventName = eventName;
        this.eventDate = eventDate;
        this.price = price;
        this.isAvailable = isAvailable;
    }

    purchaseTicket() {
        if (this.isAvailable) {
            this.isAvailable = false;
            return `ბილეთი "${this.eventName}" შეძენილია წარმატებით.`;
        } else {
            return `სამწუხაროდ ბილეთი "${this.eventName}" აღარ არის .`;
        }
    }
}

const ticket = new Ticket("კონცერტი", "2023-07-15", 100, true);
console.log(ticket.purchaseTicket());
console.log(ticket.purchaseTicket());
