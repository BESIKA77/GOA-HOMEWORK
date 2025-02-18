function UserProfile(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;

    this.changePassword = function(newPassword) {
        this.password = newPassword;
    };

    this.details = function() {
        return `Username: ${this.username}, Email: ${this.email}`;
    };
}

const user1 = new UserProfile("JohnDoe", "john.doe@example.com", "password123");
const user2 = new UserProfile("JaneSmith", "jane.smith@example.com", "securepass456");

console.log(user1.details());
user1.changePassword("newpassword789");
console.log(user2.details());
user2.changePassword("newsecurepass1011");
