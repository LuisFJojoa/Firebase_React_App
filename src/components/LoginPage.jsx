import React, {useState} from 'react'
import auth from '../services/firebaseconfig'
import {useHistory} from 'react-router-dom'

const LoginPage = () => {

    const record = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msgError, setMsgError] = useState(null)

    const RegisterUser = (e)=>{
        e.preventDefault()
        
        auth.createUserWithEmailAndPassword(email, password)
        .then(response => {
            record.push('/home')
        })
        .catch(err => {
            /* auth/invalid-email */
            /* auth/weak-password */
            if (err.code == 'auth/invalid-email') {
                setMsgError('Wrong Format email')
            }

            if (err.code == 'auth/weak-password'){
                setMsgError('Wrong Password, It must have 6 chars')
            }
        })
    }

    const LoginUser = () => {
        auth.signInWithEmailAndPassword(email, password)
        .then(response => {
            record.push('/home')
        })
        .catch(err => {
            /* auth/invalid-email */
            /* auth/password-incorrect */
            console.log(err);
            if (err.code == 'auth/user-not-found') {
                setMsgError('Wrong user email, try again.')
            }

            if (err.code == 'auth/wrong-password'){
                setMsgError('Wrong Password, try again.')
            }
            
        })
    }

    return (
        <div className="row mt-5">
            <div className="col"></div>
            <div className="col">
                <form onSubmit={RegisterUser} className="form-group">
                    <input 
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    className="form-control"
                    placeholder="Type your email"
                    type="email"
                    />
                    <input 
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    className="form-control mt-4"
                    placeholder="Type your password"
                    type="password"
                    />
                    <input 
                    className="btn btn-dark btn-block mt-4"
                    value = "Register user"
                    type="submit"/>
                </form>
                <button 
                className="btn btn-success btn-block"
                onClick= {LoginUser}>
                    Login
                </button>
                {
                    msgError != null ?
                    (
                        <div className="alert alert-danger mt-3 d-flex justify-content-center">
                            {msgError}
                        </div>
                    )
                    :
                    (
                       <span></span>
                    )
                }
            </div>
            <div className="col"></div>
        </div>
    )
}

export default LoginPage
