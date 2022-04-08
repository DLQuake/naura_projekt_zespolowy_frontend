import React from 'react';
import Header from '../HeaderCzescGlowna';

function Login() {
    return (
        <div className="App">
            <Header></Header>

            <main>
                <div id="rejestracja">
                    <form>
                        Rejestracja do systemu

                        <input type="text" placeholder="Imię" />
                        <input type="text" placeholder="Nazwisko" />
                        <input type="text" placeholder="Adres E-mail" />
                        <input type="text" placeholder="Login" />


                        <input type="password" placeholder="Hasło" />
                        <input type="password" placeholder="Powtórz hasło" />


                        <input type="submit" value="Zarejestruj się" />

                    </form>
                </div>
            </main>
        </div>
    );
}

export default Login;
