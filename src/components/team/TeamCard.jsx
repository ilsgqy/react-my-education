import React from 'react'
import { team } from '../../dummydata'

const TeamCard = () => {
    return (
        <>
            {team.map((val) => (
                <div className="items shadow">
                    <div className="img">
                        <img src={val.cover} alt="" />
                        <div className="overlay">
                            <i class="fab fa-facebook-f icon"></i>
                            <i class="fab fa-twitter icon"></i>
                            <i class="fab fa-instagram icon"></i>
                            <i class="fab fa-tiktok icon"></i>
                        </div>
                        <div className="details">
                            <h2>{val.name}</h2>
                            <p>{val.work}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default TeamCard
