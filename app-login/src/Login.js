import React from "react";

const Login = (props) => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;

    return (
        <section className="login">
            <div className="loginContainer">

                <label>
                    Username
                </label>

                <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>

                <input
                    type="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />


                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Entrar</button>
                            <p><span onClick={() => setHasAccount(!hasAccount)}>Primeiro acesso</span></p>
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignup}>cadastrar</button>
                            <p>Já tenho uma conta! <span onClick={() => setHasAccount(!hasAccount)}> Login</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Login;