import React from 'react'
import { IconBookmark } from '@tabler/icons-react';
import { ActionIcon, Button, Divider } from '@mantine/core';
import { Link } from 'react-router-dom';
import { card, skills } from '../Data/JobDescData';

const JobDesc = (props:any) => {
return (
    <>
        <div className='w-2/3 mt-2'>
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center'>
                    <div className='p-3 bg-mine-shaft-800 rounded-xl'>
                        <img className='h-14' src={`/Icons/Google.png`} alt={props.company} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='font-semibold text-2xl'>Software Engineer II</div>
                        <div className='text-lg text-mine-shaft-300'>Google &#x2022; 3 days ago &#x2022; 48 Applicants</div>
                    </div>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <Link to='/apply-job'>
                        <Button color='brightSun.4' size='sm' variant='light'>Apply</Button>
                    </Link> 
                    <IconBookmark className='text-bright-sun-400 cursor-pointer'/>
                </div>
            </div>

            <Divider my='xl' />
            <div className='flex justify-between'>
                {
                    card.map((item:any, index:any ) => 
                        <div key={index} className='flex flex-col items-center gap-1'>
                            <ActionIcon color='brightSun.4' className='!h-12 !w-12' variant='light' radius='xl' aria-label='Settings'>
                                <item.icon className='h-4/5 w-4/5' stroke={1.5} />
                            </ActionIcon>
                            <div className='text-sm text-mine-shaft-300'>{item.name}</div>
                            <div className='font-semibold'>{item.value}</div>
                        </div>
                    )
                }
            </div>

            <Divider my='xl' />
            <div>
                <div className='text-xl font-semibold mb-5'>Required Skills</div>
                <div className='flex flex-wrap gap-2'>
                    {
                        skills.map((skill:any, index:any) =>
                            <div key={index}>
                                <ActionIcon color='brightSun.4' className='!h-fit !font-medium !w-fit' variant='light' p='xs' radius='xl' aria-label='Settings'>
                                    {skill}
                                </ActionIcon>
                            </div>
                    )}
                </div>
            </div>
            
            <Divider my='xl' />
            <div>

            </div>
        </div>
    </>
)}

export default JobDesc;
