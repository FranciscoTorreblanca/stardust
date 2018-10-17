import React, { Component } from "react"
import Signup from "./auth/Signup"


class Discover extends Component {
    
    redirectStory(e){
        e.preventDefault()
        this.props.history.push("/imperium")
    }

    render() {
        return (
            <div className="Home-Container">
            <div id="rect">

            </div>
                <section className="Home-section-1" onClick={this.redirectStory}>
                    <iframe sandbox="allow-forms allow-scripts" src="https://www.wattpad.com/stories/cienciaficci%C3%B3n/rising" width="100%" height="100%" frameBorder="200px"></iframe>
                </section>
            </div>
        )
    }

}

export default Discover