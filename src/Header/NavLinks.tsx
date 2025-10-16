// import { use } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLinks = () => {
    const links = [
        {name:"Find Jobs",url:"/find-jobs"}, 
        {name:"Find Talents",url:"/find-talent"}, 
        {name:"Post Job",url:"/post-job"}, 
        {name:"About US",url:"/about"}
    ];

    const location = useLocation();

    return (
        <>
            <div className='flex gap-5 text-mine-shaft-300 h-full items-center'>
                {
                links.map((link,idx)=><div className={`border-t-[3px] h-full flex items-center ${location.pathname === link.url ? "border-bright-sun-400 text-bright-sun-400" : "border-transparent"}`}><Link key={idx} to={link.url}>{link.name}</Link></div>)
                }
            </div>
        </>
    )
}

export default NavLinks;