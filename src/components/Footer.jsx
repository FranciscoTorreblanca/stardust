import React, { Component } from "react"
import { Icon } from "antd"

export default class Footer extends Component {
    render() {
        return (
            <div>
            <div className="Footer">
                <div>
                    <a href="https://github.com/FranciscoTorreblanca">
                        <Icon type="github" />
                    </a>
                </div>
                <div>
                    <a href="https://medium.com/@dark1522">
                        <Icon type="medium" />
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/torreblancafrancisco/">
                        <Icon type="linkedin" />
                    </a>
                </div>
                <div>
                    <a href="mailto:francisco.torreblanca15@gmail.com">
                        <Icon type="mail" />
                    </a>
                </div>
            </div>
            </div>
        )
    }
}