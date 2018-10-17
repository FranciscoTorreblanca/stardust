import React, { Component } from "react"
import Signup from "./auth/Signup"


class Home extends Component {
       render() {
        return (
            <div className="Home-Container">
                <section className="Home-section-1">
                    <video width="100%" height="100%" muted loop autoPlay id="bgvideo">
                        <source src="https://res.cloudinary.com/torreblanca/video/upload/v1539789902/stardust/Simple_Stars_-_HD_Video_Background_Loop.mp4" type="video/mp4" />
                    </video>
                    <h1>Stardust</h1>
                    <Signup />
                </section>
                <section>

                </section>
            </div>
        )
    }

}

export default Home