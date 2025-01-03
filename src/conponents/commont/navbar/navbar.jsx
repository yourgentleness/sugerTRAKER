import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ScheduleSharpIcon from '@mui/icons-material/ScheduleSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './navbar.css'

const Navbar = () => {
    return (
         <nav className='fixed bottom-0 inset-x-0 border-b-2 bg-white'>
            <ul className='h-16 text-sm text-gray-500 focus:text-main-color border-solid flex flex-row justify-around items-center'>
                <li className=''>
                    <a href="">
                        <HomeIcon className=''/>
                        Home
                    </a>
                </li>
                <li>
                    <a href="">
                        <ScheduleSharpIcon/> 
                        History
                    </a>  
                </li>
                <li>
                    <a href="" className='relative bottom-4 text-main-color'>
                        <AddCircleIcon style={{ fontSize:'60' }}/>
                    </a>  
                </li>
                <li className='flex items-center justify-center '>
                    <a href="">
                        <SearchSharpIcon/> 
                        Search
                    </a>  
                    {/* <label for='input' className='w-8 h-7 cursor-pointer flex items-center justify-center rounded-l-lg bg-slate-100 text-black'>
                        <SearchSharpIcon fontSize='small'/>
                    </label> */}
                    {/* <input
                        className='h-7 w-60 focus:outline-none cursor-pointer text-justify rounded-r-lg bg-slate-100'
                        id='input'
                        type='text'
                        placeholder='Search...'
                    /> */}
                </li>
                <li>
                    <a href="">
                        <AccountCircleSharpIcon/>
                        Profile
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
