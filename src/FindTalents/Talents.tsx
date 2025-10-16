import React from 'react'
import Sort from '../FindJobs/Sort';
import { talents } from '../Data/TalentData';
import TalentsCard from './TalentsCard';
const Talents = () => {
return (
    <>
        <div className='p-5'>
            <div className='flex justify-between'>
                <div className='text-2xl font-semibold'>Talents</div>
                <Sort/>
            </div>
            <div className='mt-10 flex flex-wrap gap-10 justify-center'>
            {
                talents.map((item,index)=>(
                        <TalentsCard key={index} {...item}/>
                ))
            }
            </div>
        </div>
    </>
)}

export default Talents;
