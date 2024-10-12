import React from 'react'

const Heading = ({ subtitle, title }) => {
    return (
        <div>
            <div id="heading">
                <h3>{subtitle}</h3>
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default Heading
