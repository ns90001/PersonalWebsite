import './App.css'

function Experience() {
    return (
        <div className="Experience">
            <h1 className={"title"}>Experience</h1>
            <div className={"appShelf"}>
                <img style={{width: 300}} src={"bootstrap-logo.png"} />
                <div className={"textBox"}>
                    <h2>Software Intern at Bootstrap World</h2>
                    <p>Worked on developing an Asciidoctor to Google Slides presentation generator for computer science education</p>
                    <p>Generated detailed slide decks using the Google Slides API and Node.js in order to create this software</p>
                </div>
            </div>
            <div className={"appShelf"}>
                <img style={{width: 325}} src={"bse.png"} />
                <div className={"textBox"}>
                    <h2>Flight Software Engineer at Brown Space Engineering</h2>
                    <p>Developing a Real-time Operating System for the PVDX cubesat in the C programming language</p>
                    <p>Working in a team of other engineers to finish the satellite for a future launch</p>
                </div>
            </div>
            <div className={"appShelf"}>
                <img style={{width: 225}} src={"codability.png"} />
                <div className={"textBox"}>
                    <h2>Founder and Volunteer</h2>
                    <p>Created a volunteer workshop in the Toronto area where I taught children aged 7-17 the basics of computer programming</p>
                    <p>Taught various special needs classes in order to help kids of all abilities learn the fun in computer science</p>
                </div>
            </div>
        </div>
    );
}

export default Experience;