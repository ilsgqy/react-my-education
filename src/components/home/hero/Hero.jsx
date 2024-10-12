import React from 'react'
import "./Hero.css"
import Heading from '../../common/heading/Heading'

const Hero = () => {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <Heading subtitle='WELCOME TO ACDAEMIA' title = 'Best Online Education Expertise' />
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                    <div className="button">
                        <button className='primary-btn'>
                            GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                        <button>
                            VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                    </div>
                </div>
            </section>
            <div className='margin'></div>
        </>
    )
}

export default Hero