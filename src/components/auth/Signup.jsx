import React, {Component} from 'react'
import { Input, Button } from 'antd'
import toastr from 'toastr'
import axios from 'axios'

class Signup extends Component{

    state = {
        signup:{},
        loading:false
    }

    onChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const {signup} = this.state
        signup[field] = value
        this.setState({signup})
    }

    createUser = (e) => {
        e.preventDefault()
        const {signup} = this.state
        if(signup.password !== signup.password2) {
            return toastr.error('Las contraseñas no coinciden')
        }
        axios.post('http://localhost:3000/signup', signup)
        .then(user=>{
            console.log(user)
            toastr.success("Registro exitoso")
            this.props.history.push("/profile")
        })
        .catch(e=>toastr.error(e,"Error al intentar registrar"))
    }

    render(){
        const {signup, loading} = this.state
        return(
            <form onSubmit={this.createUser} className="Signup">
                <h2>Registrarse</h2>
                <p>
                    <Input 
                        name="username"
                        type="text"
                        onChange={this.onChange}
                        value={signup.username}
                        placeholder="Nombre de usuario" 
                    />
                    
                </p>
                <p>
                <Input 
                    name="email"
                    type="email"
                    onChange={this.onChange}
                    value={signup.email}
                    placeholder="Correo electrónico" 
                    />    
                </p> 
                <p>
                <Input 
                    name="password"
                    type="password"
                    onChange={this.onChange}
                    value={signup.password}
                    placeholder="Password" 
                    />    
                </p>  
                <p>
                <Input 
                    name="password2"
                    type="password"
                    onChange={this.onChange}
                    value={signup.password2}
                    placeholder="Repite tu password" 
                    />    
                </p>   
                <Button loading={loading} type="primary" htmlType="submit" >Registrarme</Button>
            </form>
        )
    }
}

export default Signup