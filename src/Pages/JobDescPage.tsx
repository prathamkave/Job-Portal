import { Button } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import React from 'react'
import { Link } from 'react-router-dom';



const JobDescPage = () => {
return (
    <>
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Link className='my-4 inline-block' to='/find-jobs'>
                <Button leftSection={<IconArrowLeft size={20}/>}  color='brightSun.4' variant='light'>Back</Button> 
            </Link>
                <div className='flex gap-5'>
                </div>
        </div>
    </>
)}

export default JobDescPage;
