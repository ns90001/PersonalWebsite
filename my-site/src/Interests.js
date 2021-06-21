import './App.css'

function Interests() {
    return (
        <div className="Interests">
            <h1 className={"title"}>Interests</h1>
            <div className={"appShelf"}>
                <img style={{width: 85}} src={"saxophone.jpg"} />
                <div className={"textBox"}>
                    <h2>Pianist and Saxophonist</h2>
                    <p>Worked on developing an Asciidoctor to Google Slides presentation generator for computer science education.</p>
                    <p>Learned about the Google Slides API and how to generate detailed slide decks in Node.js</p>
                </div>
            </div>
            <div className={"appShelf"}>
                <img style={{width: 150}} src={"running.png"} />
                <div className={"textBox"}>
                    <h2>Long Distance Runner</h2>
                    <p>Developing an Real-time Operating System for the PVDX cubesat in the C programming language</p>
                    <p>Working in a team of other engineers to finish the satellite for a future launch</p>
                </div>
            </div>
        </div>
    );
}

export default Interests;