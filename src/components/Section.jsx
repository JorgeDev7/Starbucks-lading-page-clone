export default function Section({ data }) {

    const { title, text, imgUrl, bg, btnText, colorText, direction } = data;

    return (
        <div className="section">
            <div className={`section__info ${!direction ? 'reverse' : ''}`} style={{ backgroundColor: bg }}>
                <h2 className="section__title" style={{ color: colorText }}>{title}</h2>
                <p className="section__text" style={{ color: colorText }}>{text}</p>
                <button
                    type="button"
                    className="section__btn"
                    style={{ color: colorText, borderColor: colorText }}
                >{btnText}</button>
            </div>
            <div className="section__img-container">
                <img
                    src={imgUrl}
                    alt={`img ${title}`}
                    className="section__img"
                />
            </div>
        </div>
    )
}
