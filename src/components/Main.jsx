import Section from "./Section"

const sections = [
    {
        id: 1,
        title: "Find your adventure",
        text: "Starbucks® Summer Game is here! Play for your chance to win—more than 10 million prizes are up for grabs!*",
        imgUrl: "/assets/imgs/adventure-awaits.webp",
        bg: "#006241",
        colorText: "#fff",
        btnText: "Play now",
        direction: true
    },
    {
        id: 2,
        title: "A new blend created by our baristas",
        text: "Introducing Starbucks® Green Apron Blend™, from those who know our coffee best. Enjoy its honeybell orange and graham cracker notes hot or over ice—just like our baristas do.",
        imgUrl: "/assets/imgs/green-apron.webp",
        bg: "#006241",
        colorText: "#fff",
        btnText: "Order now",
        direction: false
    },
    {
        id: 3,
        title: "For your enjoy-mint",
        text: "Hooray for our newest cooler-than-cool Chocolate Java Mint Frappuccino® blended beverage.",
        imgUrl: "/assets/imgs/chocolate-java-mint.webp",
        bg: "#d4e9e2",
        colorText: "#1e3932",
        btnText: "Order now",
        direction: true
    },
    {
        id: 4,
        title: "Shaken with sunshine",
        text: "Try these bright Starbucks Refreshers® beverages: Mango Dragonfruit Lemonade, Pineapple Passionfruit Lemonade and Strawberry Açaí Lemonade.",
        imgUrl: "/assets/imgs/shakens.webp",
        bg: "#eb81a5",
        colorText: "#1e3932",
        btnText: "Order now",
        direction: false
    }
]

export default function Main() {
    return (
        <div className={`main ${screen.width > 1440 ? 'container' : ''}`}>
            {sections?.map(section => (
                <Section
                    key={section.id}
                    data={section}
                />
            ))}

            <div className="gifts">
                <div className={`gifts__info`}>
                    <h2 className="gifts__title">May is Military Appreciation Month</h2>
                    <p className="gifts__text">For each Military eGift sold in May, we’ll donate $5 to support our military community.**</p>
                    <button
                        type="button"
                        className="gifts__btn"
                    >Send an eGift</button>
                </div>
                <div className="gifts__img-container">
                    <img
                        src="/assets/imgs/gifts.webp"
                        alt="img gifts"
                        className="gifts__img"
                    />
                </div>
            </div>

            <div className="note">
                <p className="note__text">*NO PURCHASE NECESSARY. Participating stores only. Starbucks Partners (employees) are not eligible to win prizes. Ends 6/18/23. To play and for Official Rules visit starbuckssummergame.com.
                    Entrants can receive a maximum of 2 plays per day, plus, bonus opportunities to earn additional plays.</p>
            </div>
        </div>
    )
}
