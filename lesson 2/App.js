import {Header} from "./components/Header";
import {Features} from "./components/Features";
import {Footer} from "./components/Footer";

class RenderJSX extends React.Component {


    render () {
        return (
        <div>
            <Header/>
            <main>
                <div className="wrapper">
                    <div className="main">
                        <h1 className="main-head">Заголовок c уникальным торговым предложение по системе 4U</h1>
                        <div className="main-small">Описания предлжения компании. Сайт рыбатекст поможет дизайнеру,
                            верстальщику, вебмастеру сгенерировать несколько абзацев более.
                        </div>
                        <button className="btn main-btn"><span>Подробнее</span></button>
                    </div>
                </div>
            </main>
            <Features/>
            <section className="contact">
                <div className="wrapper">
                    <div className="contact-wrapper">
                        <h2 className="contact-title">Остались вопросы?</h2>
                        <div className="contact-description">Оставьте номер телефона, и мы перезвоним вам</div>
                        <form action="../mailer.smart.php" className="contact-form"><input type="text" placeholder="Ваше имя"/>
                            <input type="tel" placeholder="Телефон"/> <input type="email" placeholder="E-mail"/>
                            <button className="btn contact-btn"><span>Позвоните мне</span></button>
                        </form>
                        <div className="contact-personal">Я даю своё <a href="#">согласие</a> на обработку моих персональных данных.
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
        );
    }
} 

ReactDOM.render(<RenderJSX/>, document.getElementById('root'));