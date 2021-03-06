import './App.css'
import 'react-image-shadow/assets/index.css';
import ImageShadow from 'react-image-shadow';
import ReactPlayer from "react-player";
import car_gif from "../src/car_morph_1.gif"
import art_gif from "../src/gif2.gif"

function Projects() {
    return (
        <div className="Projects">
            <h1 className={"title"}>Projects</h1>
            <ul className={"appGrid"}>
                <li>
                    <p className={"subsectionTitle"}>Deep Learning Projects</p>
                        <div className="appShelf">
                            <div className={"appDiv"}>
                                <img style={{width: 500}} src={"color_blindness.png"} />
                                <p>DeepCorrect</p>
                                <p className={"appText"}>Color vision deficiency affects 8% of men. I am one of them. I have difficulties distinguishing between red and green colored objects. This prompted my team to ponder whether deep learning could be used to help with color blindness. After some research, we came across one research paper that uses deep learning to create a color correction program that can aid with object recognition.
                                    The DeepCorrect model is a GAN-like deep learning model trained on the Pascal dataset. It is composed of two main components: the Corrector and the Referee. The Corrector takes in image data and applies convolutional layers and a linear corrector layer to produce color corrected images. Then The Referee, which is similar to the Discriminator in GANs, determines the quality of the generated image. </p>
                            </div>
                            <div className={"appDiv"}>
                                <div>
                                    <img style={{width: 280}} src={car_gif} />
                                    <img style={{width: 280}} src={art_gif} />
                                </div>
                                <p>Image Morphing with GAN models</p>
                                <p className={"appText"}>This project explored several techniques for morphing images together. Through several experiments on four different datasets, my team and I explored latent vector approximations, autoencoders, the StyleGAN generative model, and linear interpolation. After achieving image morphing with both pretrained networks and custom trained networks, we were able to compare and contrast the different approaches and datasets. We determined that the e4e and StyleGAN architecture produced the best morphing results. We also learned that the variation in image datasets plays a crucial role in the success of generative models and latent vector approximations, and as a result affects image morphing.
                                </p>
                            </div>
                        </div>
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
                        <div className={"appDiv"}>
                            <div className={"player"}>
                                <ReactPlayer width={500} light={"our_campus.png"} url={"https://www.youtube.com/watch?v=Ztbcy1WABpI"} />
                            </div>
                            <div style={{height:110}}></div>
                            <p>OurCampus</p>
                            <p className={"appText"}>OurCampus is a web application written primarily in React.js. The purpose of the app
                            is to give a way for students to plan events, meet new people, and find new opportunities around them.
                            The app is a social platform where students can post invites to events publicly. Events can
                            be live on the site for any amount of time, and users can choose when they would like event invitations
                            to expire. The app uses machine learning to categorize events into several groups, allowing users
                            to easily find what they would like to participate in. Finally, the app uses the Twilio API to coordinate
                                the events planned on OurCampus via text messaging.
                            </p>
                        </div>
                        <div className={"appDiv"}>
                            <img style={{width: 400}} src={"weather_router.png"} />
                            <img style={{width: 400}} src={"weather_router_results.png"} />
                            <p>Weather Router</p>
                            <p className={"appText"}>Weather Router is a web application written in Java and React. This app's aim is to improve driving safety
                                by offering navigation and route planning services which are sensitive to weather conditions. On the page shown
                                in the first image above, users can input a trip with a start location, destination and any number of
                                planned stops up to a week in advance. Then our algorithm consults the National Weather Service API to
                                determine weather conditions along the way. On the page in the second image, users will receive a map of a shortest
                                route (in blue) and a weather adjusted route (in red)*. Also, they will receive a report of weather conditions
                                along different points in the route. Using WeatherRouter, users will now be able to plan ahead to increase driving safety.
                            </p>
                            <p className={"appText"}>*note: in the image shown, bad weather was simulated on a smaller scale for demonstration purposes
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <p className={"subsectionTitle"}>Mobile Apps</p>
                    <div className={"appShelf"}>
                        <div>
                            <img className={"phonePic"} src={"tracklete_0.png"} />
                            <img className={"phonePic"} src={"tracklete_1.png"} />
                            <img className={"phonePic"} src={"tracklete_2.png"} />
                            <img className={"phonePic"} src={"tracklete_3.png"} />
                            <img className={"phonePic"} src={"tracklete_4.png"} />
                            <img className={"phonePic"} src={"tracklete_5.png"} />
                           <p className={"appTextCenter"}>Tracklete is an innovative mobile application to improve the coaching experience in the sport of running.
                           As a track and field athlete, I personally felt that this application is something desperately needed to bring the coaching aspect of the sport to the next level.
                           Tracklete offers methods to create custom races in workouts within the app, time multiple athletes at the same time, and receive detailed graphics on the runners'
                           stats throughout the race/workout. However, this application is still a work in progress. The expected launch year is 2022. The future of Tracklete
                           will include: individualized athlete reports, algorithmic recommendations for workouts, as well as integration with running accessories such as smart watches.</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Projects;