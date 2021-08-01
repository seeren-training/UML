import { User } from "../models/user.model";

export class UserService {

    static #user = new User();

    static get() {
        return UserService.#user;
    }

}
