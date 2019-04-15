import React from 'react';
import { Link } from 'react-router-dom';

class SignIn extends React.Component {
    constructor () {
        super();
        
        this.state = {
            email: '',
            password: '',
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <section className='split-screen'>
                <div className='split-screen--main'>
                    <h2 className='split-screen--title'>Личный кабинет</h2>
                    <form action='' method='post' className='split-screen--form'>
                        <label htmlFor='email'>Электронная почта</label>
                        <input type='email' id='email' name='email' onChange={this.handleChange} required />

                        <label htmlFor='password'>Пароль</label>
                        <input type='password' id='password' name='password' onChange={this.handleChange} minLength={8} required />

                        <input type='submit' value='Продолжить' />
                    </form>
                    <Link to='/signup' className='link'>Еще нет аккаунта? Зарегистрируйтесь</Link>
                </div>
                <div className='split-screen--common' style={{backgroundImage: 'url(https://bit.ly/2VFIDWU)'}}></div>
            </section>
        )
    }
}

export default SignIn;