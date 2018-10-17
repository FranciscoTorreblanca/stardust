import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Menu, Icon } from 'antd';


class Navbar extends Component {
    state = {
        current: 'home',
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <div className="Navbar">

                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="logo">
                    </Menu.Item>
                    <Menu.Item key="home">
                        <Link to="/">
                            <img className="App-logo" src="logo.png" alt="logo" />
                            Stardust
                </Link>
                    </Menu.Item>
                    <Menu.Item key="discover" >
                    <Link to="/discover">
                        <Icon type="read" /> <span> Descubre </span>
                    </Link>
                </Menu.Item>
                    <Menu.Item key="login">
                        <Link to="/login">Login</Link>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}
export default Navbar