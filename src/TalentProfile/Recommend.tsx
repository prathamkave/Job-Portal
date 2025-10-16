import React from 'react'
import TalentsCard from '../FindTalents/TalentsCard';
import { talents } from '../Data/TalentData';

const Recommend = () => {
return (
    <>
        <div>
            <div className='text-xl font-semibold mb-5'>Recommended Talent</div>
            <div className='flex flex-col flex-wrap gap-10'>
                {
                    talents.map((talent,index)=>
                        index<4 && <TalentsCard key={index} {...talent}/>
                    )
                }
            </div>
        </div>
    </>
)}

export default Recommend;
