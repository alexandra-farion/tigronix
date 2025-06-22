import React from 'react';

import '../styles/input.css';
import '../styles/divs.css';
import '../styles/tags.css';
import '../styles/main.css';

const LoginPage = () => {
    return (
        <div className="container"> {/* Можно добавить общий класс для контейнера */}
            {/* Header */}
            <header></header>

            {/* Main Content */}
            <main>
                {/* Изображение */}
                <img src="../img/tiger.svg" alt="Tiger" className="main-image" />

                {/* Заголовки */}
                <h1 className="welcome">Tigronix CTF Core</h1>
                <h2>Registration</h2>

                {/* Форма */}
                <div className="form-wrapper">
                    <form>
                        <p>
                            <label htmlFor="surname">
                                Username or primary email
                                <input
                                    type="text"
                                    className="container"
                                    id="surname"
                                />
                            </label>
                        </p>
                        <p>
                            <label htmlFor="name">
                                Password
                                <input
                                    type="text"
                                    className="container"
                                    id="name"
                                />
                            </label>
                        </p>
                        <p>
                            <a href="#">Forgot your password?</a>
                        </p>
                        <p>
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                        </p>
                    </form>

                    {/* Кнопка входа */}
                    <div className="button-container">
                        <button className="btn">Sign in</button>
                    </div>

                    {/* Регистрация */}
                    <div className="register-text">
                        <p>
                            Don't have an account yet? <a href="#">Register now</a>
                        </p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <p className="footer-links">
                    <a href="#">Explore</a>
                    <a href="#">Help</a>
                    <a href="#">Community forum</a>
                </p>

                {/* Язык */}
                <form className="language-form">
                    {/* Можно добавить label, если нужно */}
                    <select id="language" name="language" className="language-select">
                        <option value="English">English</option>
                        <option value="Russian">Russian</option>
                    </select>
                </form>
            </footer>
        </div>
    );
};

export default LoginPage;