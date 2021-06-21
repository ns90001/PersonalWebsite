import './App.css'
import 'react-image-shadow/assets/index.css';
import ImageShadow from 'react-image-shadow';
import ReactPlayer from "react-player";

function Projects() {
    return (
        <div className="Projects">
            <h1 className={"title"}>Projects</h1>
            <ul className={"appGrid"}>
                <li>
                    <p className={"subsectionTitle"}>Games</p>
                        <div className="appShelf">
                            <div>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://apps.apple.com/us/app/id1310102841');
                                }} className={"appIconBtn"}><ImageShadow className={"shadow"} width={"150px"} shadowHover={true} src={"stick_icon.png"}></ImageShadow></button>
                                <p>Stick - for iPhone</p>
                            </div>
                            <div>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://apps.apple.com/us/app/soccer-slalom/id1402896868');
                                }} className={"appIconBtn"}><ImageShadow className={"shadow"} width={"150px"} shadowHover={true} src={"soccer_slalom_icon.png"}></ImageShadow></button>
                                <p>Soccer Slalom</p>
                            </div>
                            <div>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    window.open('https://apps.apple.com/us/app/zombie-escape/id1506625395');
                                }} className={"appIconBtn"}><ImageShadow className={"shadow"} width={"150px"} shadowHover={true} src={"zombie_escape_icon.png"}></ImageShadow></button>
                                <p>Zombie Escape</p>
                            </div>
                        </div>
                </li>
                <li>
                    <p className={"subsectionTitle"}>Web Apps</p>
                    <div className={"appShelf"}>
                        <div>
                            <ReactPlayer light={"our_campus.png"} url={"https://www.youtube.com/watch?v=Ztbcy1WABpI"} />
                            <p>OurCampus</p>
                        </div>
                        <div>
                            <ReactPlayer light={"our_campus.png"} url={"https://www.youtube.com/watch?v=Ztbcy1WABpI"} />
                            <p>Weather Router</p>
                        </div>
                    </div>
                </li>
                <li>
                    <p className={"subsectionTitle"}>Mobile Apps</p>
                    <div className={"appShelf"}>
                        <div>
                            <img src={"tracklete.png"} />
                            <p>Tracklete</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Projects;