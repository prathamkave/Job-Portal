import { Divider, Input, RangeSlider } from '@mantine/core';
import MultiSelectCreatable from '../FindJobs/MultiSelectCreatable';
import React from 'react'
import { useState } from 'react';
import { searchFields } from '../Data/TalentData';
import { IconUserCircle } from '@tabler/icons-react';

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([1, 100]);
return (
    <>
    <div className='flex px-5 py-8 items-center !text-mine-shaft-100'>
        <div className='flex items-center'>
            <div className='text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1 mr-2'><IconUserCircle size={20}/></div>
            <Input className='[&_input]:!placeholder-mine-shaft-500' variant='unstyled' placeholder='Talent Name'/>
        </div>
        <Divider mr='xs' size={'xs'} orientation='vertical' className='bg-mine-shaft-700'/>
        {
            searchFields.map((item,index)=>(
                <><div className='w-1/5 ' key={index}>
                    <MultiSelectCreatable {...item}/>
                </div>
                <Divider mr='xs' size={'xs'} orientation='vertical' className='bg-mine-shaft-700'/>
                </>
            ))
        }
        <div className='w-1/5 [&_.mantine-Slider-label]:!translate-y-11'>
            <div className='flex text-sm justify-between'>
                <div>Salary</div>
                <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
            </div>
            <RangeSlider color='brightSun.4' size="xs" value={value}
            labelTransitionProps={{
                transition: 'skew-down',
                duration: 150,
                timingFunction: 'linear',
            }}
            onChange={setValue}/>
        </div>
    </div>
    </>
)}

export default SearchBar;
