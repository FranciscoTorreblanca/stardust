import React, {Component} from 'react'
import {Input, Button} from 'antd'
import axios from 'axios'
import toastr from 'toastr'

const url = 'http://localhost:3000/login'

class Login extends Component{

    state = {
        auth:{},
        loading:false
    }

    login = (e) => {
        this.setState({loading:true})
        e.preventDefault()
        const {auth} = this.state
        axios.post(url, auth)
        .then(res=>{
            console.log(res)
            toastr.success("Has iniciado sesión")
            localStorage.setItem('user', JSON.stringify(res.data.user))
            localStorage.setItem('token', res.data.token)
            this.setState({loading:false})
            this.props.history.push('/profile')
        })
        .catch(e=>{
            toastr.error(e.message,"Error al enviar petición")
            this.setState({loading:false})
            
        })
    }

    onChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const {auth} = this.state
        auth[field] = value
        this.setState({auth})
    }

    render(){
        const {auth, loading} = this.state
        return(
            <div>
            <form onSubmit={this.login} style={{width:600, margin:"0 auto", padding:20}}>
                <h2>Iniciar sesión</h2>
                <p>
                <Input 
                    name="email"
                    type="email"
                    onChange={this.onChange}
                    value={auth.email}
                    placeholder="ripley@weyland-yutani.com..." 
                    />    
                </p> 
                <p>
                <Input 
                    name="password"
                    type="password"
                    onChange={this.onChange}
                    value={auth.password}
                    placeholder="*********" 
                    />    
                </p>   
                <Button loading={loading} type="primary" htmlType="submit" >Inicia sesión</Button>
            </form>
            </div>
        )
    }
}

export default Login