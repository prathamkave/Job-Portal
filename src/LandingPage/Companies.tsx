import React from 'react'
import Marquee from 'react-fast-marquee'
import { companies } from '../Data/Data'

const Companies = () => {
return (
    <>
        <div className='mt-10 pb-5'>
            <div className='text-4xl mb-8 text-center font-semibold text-mine-shaft-100'>Trusted by <span className='text-bright-sun-400'>1000+</span> companies</div>
        </div>
        <Marquee pauseOnHover={true}>
            {
                companies.map((company, index) => 
                <div key={index} className='mx-8 px-2 py-1 hover:bg-mine-shaft-900 rounded-xl cursor-pointer'>
                    <img className='h-14' src={`/Companies/${company}.png`} alt={company} />
                </div>
                )
            }
        </Marquee>
    </>
)
}

export default Companies;
