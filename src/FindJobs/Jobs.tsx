import React from 'react'
import Sort from './Sort';
import JobCard from './JobCard';
import { jobList } from '../Data/JobsData';

const Jobs = () => {
return (
    <>
        <div className='p-5'>
            <div className='flex justify-between'>
                <div className='text-2xl font-semibold'>Recommended Jobs</div>
                <Sort/>
            </div>
            <div className='mt-10 flex flex-wrap gap-10 justify-center'>
            {
                jobList.map((item,index)=>(
                        <JobCard key={index} {...item}/>
                ))
            }
            </div>
        </div>
    </>
)}

export default Jobs;
