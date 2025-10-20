import React from "react";

const Connected = (props) => {
    return (
        <div className="connected-container">
            <h1 className="connected-header">You are Connected to Metamask</h1>
            <p className="connected-account">Metamask Account: {props.account}</p>
            <p className="connected-account">Remaining Time(in seconds): {props.remainingTime}</p>
            { props.showButton ? (
                <p className="connected-account">Thank you for your patience. Your vote has been considered and saved. You can exit the browser now.</p>
            ) : (
                <div>
                    <input type="number" placeholder="Entern Candidate Index." value={props.number} onChange={props.handleNumberChange}></input>
            <br />
    
            <button className="connected-button" onClick={props.voteFunction}>Vote</button>
            <p className="connected-account">Please wait for a while after entering your vote, as it takes some time to access blockchain network and finalising your transaction.</p>

                </div>
            )}
            
            <table id="myTable" className="candidates-table">
                <thead>
                <tr>
                    <th>Index</th>
                    <th>Candidate name</th>
                    <th>Candidate votes</th>
                </tr>
                </thead>
                <tbody>
                {props.candidates.map((candidate, index) => (
                    <tr key={index}>
                    <td>{candidate.index}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.voteCount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            
        </div>
    )
}

export default Connected;