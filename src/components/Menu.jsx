import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import auth from '../services/firebaseconfig'

const Menu = () => {

    const record = useHistory()
    const [user, setUser] = useState(null)

    useEffect(() =>{
        auth.onAuthStateChanged ((user) => {
            if (user) {
                setUser(user.email)
            }
        })
    },[])

    const LogOut = () => {
        auth.signOut()
        setUser(null)
        record.push('/login')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    {
                        user ?
                        (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to='/product'>Product</Link>
                                </li>
                            </>
                        )
                        :
                        (
                            <li>
                                <Link className="nav-link" to='/login'>Login</Link>
                            </li>
                        )
                    }     
                </ul>
                {
                    user ?
                    (
                        <button 
                            onClick={LogOut}
                            className="btn btn-danger">
                            Logout
                        </button>
                    )
                    :
                    (
                        <span></span>
                    )
                }
            </nav>
        </div>
    )
}

export default Menu
