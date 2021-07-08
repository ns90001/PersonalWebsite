import './App.css'

function Interests() {
    return (
        <div className="Interests">
            <h1 className={"title"}>Interests</h1>
            <div className={"appShelf"}>
                <img style={{width: 220}} src={"chamber_music.png"} />
                <div className={"textBox"}>
                    <h2>Pianist and Saxophonist</h2>
                    <p>10+ year ARCT concert-level pianist. Perform in the Brown University Chamber Music Program</p>
                    <p>Jazz and classical alto saxophonist</p>
                </div>
            </div>
            <div className={"appShelf"}>
                <img style={{width: 150}} src={"running.png"} />
                <div className={"textBox"}>
                    <h2>Long Distance Runner</h2>
                    <p>800m-Half Marathon runner. Have been racing competitively for most of my life</p>
                    <p>Notable times: 800m - 1:58, 1500m - 4:04, 6k XC - 19:44, Half Marathon - 1:15:18</p>
                </div>
            </div>
        </div>
    );
}

export default Interests;