import './App.css'

function Experience() {
    return (
        <div className="Experience">
            <h1 className={"title"}>Experience</h1>
            <div className={"appShelf"}>
                <img style={{width: 200}} src={"pfg.png"} />
                <div className={"textBox"}>
                    <h2>Software Engineering Intern at Principal Financial Group</h2>
                    <p>For the summer of 2022, I am working at Principal Financial Group in the Enterprise Data Analytics (EDA) division.</p>
                    <p>I work with AWS and Python to deliver employee data to third party clients.</p>
                    <p>Within EDA, my team and I are developing Principal's enterprise data mesh.</p>
                </div>
            </div>
            <div className={"appShelf"}>
                <img style={{width: 200}} src={"robot_logo.png"} />
                <div className={"textBox"}>
                    <h2>Researcher in the Humans to Robots Lab</h2>
                    <p>I am a researcher in the Humans to Robots Laboratory under Professor Stefanie Tellex at Brown University. </p>
                    <p>In this role, I work with natural language processing and partially observable Markov decision processes for use in robotics.</p>
                    <p>In May 2022, our team submitted a paper titled "Improving Inference of Human's Plan by Modelling Language Feedback"</p>
                    <p>to the International Symposium on Robotics Research.</p>
                </div>
            </div>
            <div className={"appShelf"}>
                <img style={{width: 300}} src={"bootstrap-logo.png"} />
                <div className={"textBox"}>
                    <h2>Software Intern at Bootstrap World</h2>
                    <p>Worked on developing an Asciidoctor to Google Slides presentation generator for computer science education</p>
                    <p>Generated detailed slide decks using the Google Slides API and Node.js</p>
                </div>
            </div>
            <div className={"appShelf"}>
                <img style={{width: 325}} src={"bse.png"} />
                <div className={"textBox"}>
                    <h2>Flight Software Engineer at Brown Space Engineering</h2>
                    <p>Developing a Real-time Operating System for the PVDX cubesat in the C programming language</p>
                    <p>Currently working in a team of other engineers to finish the satellite for a future launch</p>
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