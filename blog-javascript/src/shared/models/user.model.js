export class User {

    #email = "";

    #password = "";

    get email() {
        return this.#email;
    }

    set email(email) {
        this.#email = email;
    }

    get password() {
        return this.#password;
    }

    set password(password) {
        this.#password = password;
    }

}
