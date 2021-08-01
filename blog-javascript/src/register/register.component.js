import { UserService } from "../shared/services/user.service";

export class RegisterComponent {

    #loading = false;

    #status;

    constructor() {
        this.render();
    }

    render() {
        const user = UserService.get();
        document.body.innerHTML = `
        <h1>Register</h1>
        <form class="register">
            <span>${ 400 === this.#status ? 'Account already exists'
                  : (500 === this.#status ? 'Server error': '') }</span><br>
            <label>Email</label><br>
            <input required type="email" ${ this.#loading ? 'disabled' : '' } value="${ user.email }"><br>
            <label>Password</label><br>
            <input required type="password" minlength="6" ${ this.#loading ? 'disabled' : '' } value="${ user.password }"><br>
            ${ this.#loading ? 'Loading...' : '<button>Register</button>' }
        </form>`;
        this.addFormEvent(document.querySelector('.register'));
    }

    addFormEvent(form) {
        form.onsubmit = (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            const password = form.querySelector('input[type="password"]').value;
            this.register(email, password);
        }
    }
    
    async register(email, password) {
        const user = UserService.get();
        user.email = email;
        user.password = password;
        this.#loading = true;
        try {
            const response = await fetch('http://localhost:8000/register', {
                method: 'post',
                body: JSON.stringify({
                    email: user.email, 
                    password: user.password
                })
            });
            if (201 === response.status) {
                this.#status = 201;
                return alert("Account created");
            }
            this.#status = 400;
        } catch (error) {
            this.#status = 500;
        }
        this.#loading = !this.#loading;
        this.render();
    }

}
