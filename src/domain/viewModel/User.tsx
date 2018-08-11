export default class User {
    constructor(public uid: string, public firstName: string, public lastName: string, public email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}
