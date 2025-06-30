import "./Contacts.css";

const Contacts = () => {
    return (
        <>
            <div className="Contacts">
                <ul className="Contacts__list">
                    <li className="Contacts__item">
                        <strong>My number: </strong> + (996) 765 125 447
                    </li>
                    <li className="Contacts__item">
                        <strong>My email: </strong>muss_999@mail.ru
                    </li>
                    <li className="Contacts__item">
                        <strong>My address: </strong>Табышалиева 29
                    </li>
                    <li className="Contacts__item"></li>
                </ul>
            </div>
        </>
    );
};

export default Contacts;
