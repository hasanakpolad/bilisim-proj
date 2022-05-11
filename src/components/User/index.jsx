import React, { useState } from 'react'
import "./style.css"

function visible() {
    return false
}
function signup() {

}
function User() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [passAgn, setPassAgn] = useState('')
    const [loginName, setLoginName] = useState('')
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <div className="card card-body">
                            <div className='cardNav'>
                                <button className='btn btn-primary'>Giriş Yap</button>
                                <button className='btn btn-primary' onChange={signup()}>Kayıt Ol</button>
                            </div>
                            <form hidden={visible()} id="signupForm" action="/signup" method="post" data-parsley-validate="" data-parsley-errors-messages-disabled="true" noValidate="" _lpchecked="1">
                                <div className="form-group required">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="form-control text-lowercase" id="name" required="" name="username" />
                                </div>
                                <div className="form-group required">
                                    <label htmlFor="username">Email</label>
                                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control text-lowercase" id="email" required="" name="username" />
                                </div>
                                <div className="form-group required">
                                    <label className="d-flex flex-row align-items-center" htmlFor="password">Password</label>
                                    <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} className="form-control" required="" id="pass" name="password" />
                                </div>
                                <div className="form-group required">
                                    <label className="d-flex flex-row align-items-center" htmlFor="password">Password Again</label>
                                    <input type="password" value={passAgn} onChange={(e) => setPassAgn(e.target.value)} className="form-control" required="" id="passAgn" name="password" />
                                </div>
                                <div className="form-group pt-1">
                                    <button className="btn btn-primary" type="submit" onClick={signup()}>Sign In</button>
                                </div>
                            </form>
                            <form hidden={visible()} id="loginForm" action="/login" method="post" data-parsley-validate="" data-parsley-errors-messages-disabled="true" noValidate="" _lpchecked="1">
                                <div className="form-group required">
                                    <label htmlFor="username">Username / Email</label>
                                    <input type="text" value={loginName} onChange={(e)=> setLoginName(e.target.value)} className="form-control text-lowercase" id="username" required="" name="username" />
                                </div>
                                <div className="form-group required">
                                    <label className="d-flex flex-row align-items-center" htmlFor="password">Password
                                        <a className="ml-auto border-link small-xl" href="/forget-password">Forget?</a></label>
                                    <input type="password" className="form-control" required="" id="password" name="password" />
                                </div>
                                <div className="form-group mt-4 mb-4">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="remember-me" name="remember-me" data-parsley-multiple="remember-me" />
                                        <label className="custom-control-label" htmlFor="remember-me">Remember me?</label>
                                    </div>
                                </div>
                                <div className="form-group pt-1">
                                    <button className="btn btn-primary btn-block" type="submit">Log In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User