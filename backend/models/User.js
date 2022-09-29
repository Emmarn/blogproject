export default class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.createDate = new Date();
        this.lastLoggedIn = new Date();
    }
}