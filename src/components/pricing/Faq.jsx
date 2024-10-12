import React from 'react'
import Heading from '../common/heading/Heading'
import { faq } from '../../dummydata'

const Faq = () => {
    return (
        <>
            <Heading subtitle='FAQS' title='Frequesntly Ask Question' />
            <section className="faq">
                <div className="container">
                    {
                        faq.map((val, index) => (
                            <div className="box">
                                <button>
                                    <h2>{val.title}</h2>
                                </button>
                                <div className="text">
                                    <p>{val.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Faq
