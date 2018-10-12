import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Home from './components/Home'
// import Profile from './components/auth/Profile';
// import PublicProfile from './components/users/PublicProfile';

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            {/* <Route path="/profile" component={Profile} /> */}
            {/* <Route path="/users/:id" component={PublicProfile} /> */}
        </Switch>
    )
}

export default Routes