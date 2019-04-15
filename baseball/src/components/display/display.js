import React from 'react'

const Dashboard = props => {
    return(
        <div>
            <h1>Strikes:</h1>
            <div data-testid='strikes-display'>{props.display.strikes}</div>
            <h1>Balls:</h1>
            <div data-testid='balls-display'>{props.display.balls}</div>
        </div>
    )
}

export default Dashboard;