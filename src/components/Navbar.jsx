import React, { Component } from "react"
import {Link} from "react-router-dom"
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

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
                <Menu.Item key="app" >
                    <Icon type="read" />Descubre
                </Menu.Item>
                <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Three - Submenu</span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <Link to="/login">Login</Link>
                </Menu.Item>
            </Menu>
            </div>
        );
    }
}
export default Navbar