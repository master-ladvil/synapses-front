import React from "react"


const Login = (props) => {
    const {email,password, setEmail,setPassword,handleLogin,handleSignup,hasaccount,setHasaccount,emailError,passworderror} = props
    return(
        
        <section className = "login">
            <div className = "loginContainer">
                <label>Username</label>
                <input type = "text" autoFocus required 
                value ={email}
                onChange={(e) => setEmail(e.target.value)} 
                />
                <p className="errorMsg">{emailError}</p>

                <label>Phone No</label>
                <input type = "text"></input>
                
                <label>Password</label>
                <input type = "password" required value = {password} 
                onChange = {(e) => setPassword(e.target.value)}/>
                <p className="errorMsg">{passworderror}</p>


                <div className="btnContainer">
                    {hasaccount ? (
                        <>
                        <button onClick={handleLogin}>Login</button>
                        <p>Don't have an account? <span onClick={() => setHasaccount(!hasaccount)}>Sign up</span></p>
                        </>
                    ) : (
                        <>
                        <button onClick={handleSignup}>Sign up</button>
                        <p>
                            Have an account?
                             <span onClick={() => setHasaccount(!hasaccount)}>Login</span>
                             </p>
                        </>
                    )}
                </div>
                


            </div>
        </section>


    )
}


export default Login