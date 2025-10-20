import React from "react";
const Login=(props) => {
    return(
        <div className="login-container">
            <h1 className="welcome-message">Welcome to Decentralized Voting Application</h1>
            <button className="login-button" onClick={props.connectWallet}>Login Metamask</button>
        </div>
    )
}
export default Login;