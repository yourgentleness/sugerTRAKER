import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ScheduleSharpIcon from '@mui/icons-material/ScheduleSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
         <nav className='navbar fixed bottom-0 inset-x-0 border-b-2 bg-white'>
            <p className='logo hidden text-main-color'>Sugar<span className='font-bold'>Tracker</span></p>
            <ul className='h-16 text-sm flex flex-row justify-around items-center text-gray-500 focus:text-main-color'>
                <li className=''>
                    <Link className='link-nav' to={'/'}>
                        <span>
                            <HomeIcon className=''/>
                        </span>
                        Home
                    </Link>
                </li>
                <li>
                    <Link className='link-nav' to={'History'}>
                        <span>
                            <ScheduleSharpIcon/> 
                        </span>
                        History
                    </Link>  
                </li>
                <li className='plus relative bottom-4  text-main-color'>
                    <a className='link-nav'>
                        <AddCircleIcon style={{ fontSize:'60' }}/>
                    </a>  
                </li>
                <li>
                    <Link className='link-nav' to={'Search'}>
                        <span>
                            <SearchSharpIcon/> 
                        </span>
                        Search
                    </Link>  
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
                    <Link className='link-nav' to={'Profile'}>
                        <span>
                            <AccountCircleSharpIcon/>
                        </span>
                        Profile
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
