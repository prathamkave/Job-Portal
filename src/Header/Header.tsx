import { IconAnchor, IconBell, IconSettings } from '@tabler/icons-react';
import Avatar from '@mui/material/Avatar';
import { Indicator } from '@mantine/core';
import NavLinks from './NavLinks';

const Header = () => {
    return (
        <div className="w--full bg-mine-shaft-950 h-20 text-white flex justify-between items-center px-6 font-['poppins']">
            <div className='flex gap-1 items-center text-bright-sun-400'>
                <IconAnchor className='h-8 w-10' stroke={2.5}/>
                <div className='text-3xl font-semibold cursor-pointer'>JobHook</div>
            </div>
            <NavLinks/>
            <div className='flex gap-3 items-center'>                
                    <div className='flex gap-2 items-center cursor-pointer'>
                        <div>Marshal</div>
                        <Avatar src="./avatar.png" alt="it's me"/>
                    </div>
                    <div className='p-1.5 bg-mine-shaft-900 border border-gray-600 rounded-full cursor-pointer'>
                        <IconSettings stroke={1.5}/>
                    </div>
                    <div className='p-1.5 bg-mine-shaft-900 border border-gray-600 rounded-full cursor-pointer'>
                        <Indicator color="brightSun.4" offset={6} size={8} processing>
                            <IconBell stroke={1.5}/>
                        </Indicator>
                    </div>
            </div>
        </div>
    )
}

export default Header;
