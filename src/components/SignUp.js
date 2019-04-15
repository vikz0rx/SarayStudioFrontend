import React from 'react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
    constructor () {
        super();
        
        this.state = {
            email: '',
            username: '',
            password: '',
            passwordRepeat: '',
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e) {
        this.setState({ [e.target.name]: e.target.value });

        if (e.target.name === 'email' && e.target.value.toLowerCase().indexOf('@') === -1) {
            console.log(e.target.value);
            this.setState({ username: e.target.value })
        }
    }

    render() {
        return (
            <section className='split-screen'>
                <div className='split-screen--main'>
                    <h2 className='split-screen--title'>Регистрация</h2>
                    <form action='' method='post' className='split-screen--form'>
                        <label htmlFor='email'>Электронная почта</label>
                        <input type='email' id='email' name='email' onChange={this.handleChange} required />

                        <label htmlFor='username'>Имя пользователя</label>
                        <input type='text' id='username' name='username' onChange={this.handleChange} value={this.state.username} minLength={6} required />

                        <label htmlFor='password'>Пароль</label>
                        <input type='password' id='password' name='password' onChange={this.handleChange} minLength={8} required />

                        <label htmlFor='password-repeat'>Повторите пароль</label>
                        <input type='password' id='password-repeat' name='passwordRepeat' onChange={this.handleChange} minLength={8} required />

                        <div>
                            <input type='checkbox' id='agreement' required />
                            <label htmlFor='agreement'> Согласие на обработку персональных данных</label>
                        </div>

                        <input type='submit' value='Продолжить' />
                    </form>
                    <Link to='/signin' className='link'>Уже есть аккаунт?</Link>
                </div>
                <div className='split-screen--common' style={{backgroundImage: 'url(https://bit.ly/2VFIDWU)'}}></div>
            </section>
        )
    }
}

export default SignUp;