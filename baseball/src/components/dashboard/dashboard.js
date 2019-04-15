import React from 'react'

const Dashboard = props => {

    const {strike, ball, foul, hit} = props
    return(
        <div>
            <button onClick={strike}>Strike!</button>
            <button onClick={ball}>Ball!</button>
            <button onClick={foul}>Foul!</button>
            <button onClick={hit}>Hit!</button>
        </div>
    )
}

export default Dashboard;