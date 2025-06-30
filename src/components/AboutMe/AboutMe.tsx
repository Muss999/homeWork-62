import "./AboutMe.css";

const AboutMe = () => {
    return (
        <>
            <header className="header">
                <div className="header__block_left">
                    <img
                        className="header__img"
                        src="/images/header-img.JPG"
                        alt=""
                    />
                </div>
                <div className="header__block_right">
                    <h2 className="main__h2">Обо мне</h2>
                    <p className="header__p">
                        Меня зовут Мусулманкул, мне 19 лет. Я живу в городе
                        Бишкек, Кыргызстан.
                    </p>
                </div>
            </header>
            <main>
                <div className="main__block_1">
                    <h2 className="main__h2">Автобиография</h2>
                    <p className="main__p">
                        Я родился 21 марта 2006 года, в Ноокате, Ошская область.
                        Прожил 6 лет в Ноокате, потом переехал в Москву где
                        отучился в школе 1 год. Соскучился по Кыргызстану, так
                        что я с родителями приехал в Бишкек. Здесь я отучился 10
                        лет в школе. Завел много друзей, познакомился со многими
                        людьми. И можно сказать что я вырос в Бишкеке. И именно
                        здесь я нашел своего лучшего друга.
                    </p>
                </div>
                <div className="main__block_2">
                    <div className="main__block_2_inner">
                        <h2 className="main__h2">Данное время</h2>
                        <p className="main__p">
                            В данный момент я закончил школу. Очень хорошо знаю
                            английский язык, читал книги про маркетинг а также
                            увлекался программированием, так что знаю JS и
                            HTML&CSS. Сейчас учусь в Attractor School чтобы
                            стать высококлассным програмистом.
                        </p>
                    </div>
                    <img
                        className="main__img"
                        src="/images/main-img.JPG"
                        alt=""
                    />
                </div>
                <div className="main__block_3">
                    <h2>Мои скиллы:</h2>
                </div>
                <div className="main__skills">
                    <div className="skills__progress">
                        <p className="skills__text">Javasript</p>
                        <img
                            className="progress__bar"
                            src="/images/skill-80-removebg-preview.png"
                            alt=""
                        />
                    </div>
                    <div className="skills__progress">
                        <p className="skills__text">Marketing</p>
                        <img
                            className="progress__bar"
                            src="/images/skill-50-removebg-preview.png"
                            alt=""
                        />
                    </div>
                    <div className="skills__progress">
                        <p className="skills__text">English language</p>
                        <img
                            className="progress__bar"
                            src="/images/skill-80-removebg-preview.png"
                            alt=""
                        />
                    </div>
                    <div className="skills__progress">
                        <p className="skills__text">HTML & CSS</p>
                        <img
                            className="progress__bar"
                            src="/images/skill-90-removebg-preview (1).png"
                            alt=""
                        />
                    </div>
                    `
                </div>
                <div className="main__block_4">
                    <img
                        className="main__img_2"
                        src="/images/german.jpg"
                        alt=""
                    />
                    <div className="`">
                        <h2 className="main__h2">Мои цели:</h2>
                        <p className="main__p">
                            Хочу стать senior frontend developer и жить в
                            европе. Где-нибудь в Баварии. А также хочется найти
                            хорошую девушку.
                            <span className="main__p">
                                P.S. На фото замок Нойшвайнштайн, который я
                                очень хочу посетить.
                            </span>
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default AboutMe;
