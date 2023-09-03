import './App.css'
import ReactTypingEffect from 'react-typing-effect';
import { SocialIcon } from 'react-social-icons';

function Menu() {
    return (
        <div className="Menu">
            <div className={"imgContainer"}>
                <img class={"menuImg"} src={"pumpkin.png"} />
            </div>
            <div className={"titleDiv"}>
                <ReactTypingEffect className={"title"}
                    text={["Hi! My name is Naveen Sharma", "Bonjour! Je m'appelle Naveen Sharma"]}
                />
                <p className={"subtitle"}>Brown University Class of 2024</p>
                <p className={"intro"}>
                    I am currently a senior in college concentrating in computer science. Right now, I am living in
                    Providence, RI. My hometown is Toronto, ON, Canada. I am an avid distance runner and musician,
                    with a passion for computer science and theoretical physics. On this site you can learn about my
                    past and current CS projects, my experience in the field of computer science, and some of the other
                    things I love to do.
                </p>
                <div className={"socials"}>
                    <SocialIcon style={{margin: 10}} url={"https://www.linkedin.com/in/naveen-sharma-829498211/"}></SocialIcon>
                    <SocialIcon style={{margin: 10}} url={"https://github.com/ns90001"}></SocialIcon>
                    <SocialIcon style={{margin: 10}} bgColor={"red"} url={"mailto:naveen_sharma@brown.edu"}></SocialIcon>
                </div>
            </div>
        </div>
    );
}

export default Menu;