import { useState } from "react"

export default function Header() {

    const [active, setActive] = useState(false);

    // Overflow added to html tag
    if (active) {
        document.querySelector('body').classList.add('ov')
    } else {
        document.querySelector('body').classList.remove('ov')
    }

    return (
        <div className="header">
            <div className="contenido__img">
                <img
                    src="/assets/imgs/logo.svg"
                    alt="starbucks logo"
                />
            </div>
            <div className="container contenido">

                <nav className="contenido__nav">
                    <div
                        className={`icon-ham ${active ? 'active' : ''}`}
                        onClick={() => setActive(!active)}
                    >
                        <span className={`icon-ham__bar ${active ? 'active' : ''}`}></span>
                        <span className={`icon-ham__bar ${active ? 'active' : ''}`}></span>
                        <span className={`icon-ham__bar ${active ? 'active' : ''}`}></span>
                    </div>

                    <div className={`overlay ${active ? 'bg-overlay active' : ''}`}>
                        <div className={`overlay__content ${active ? 'active' : ''}`}>
                            <ul className="overlay__list">
                                <li className="overlay__item">
                                    <a className="overlay__link" href="#">Menu</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
                                </li>
                                <li className="overlay__item">
                                    <a className="overlay__link" href="#">Rewards</a>
                                </li>
                                <li className="overlay__item">
                                    <a className="overlay__link" href="#">Gift Cards</a>
                                </li>
                            </ul>

                            <div className="overlay__btns">
                                <div className="overlay__btns-flex">
                                    <button
                                        type="button"
                                        className="overlay__btn overlay__btn--sign"
                                    >Sign in</button>
                                    <button
                                        type="button"
                                        className="overlay__btn overlay__btn--join"
                                    >Join now</button>
                                </div>
                                <div className="overlay__find-section">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="overlay__find-location"
                                    >
                                        <path
                                            d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
                                        ></path>
                                    </svg>
                                    <p className="overlay__find-text">Find a store</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
