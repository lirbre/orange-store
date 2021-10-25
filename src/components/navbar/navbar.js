import React, { useState } from 'react';

import { GiOrangeSlice } from 'react-icons/gi';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { FaRegUser, FaBars } from 'react-icons/fa';

import './navbar.css';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [search, setSearch] = useState('');
    let disabled = true;

    const navMobileOpen = () => {
        setMobileOpen(!mobileOpen);
    }
    
    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    if (search !== '') {
        disabled = false;   
    }

    if (mobileOpen === true) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible';
    }

    return mobileOpen === false ? 
    (
        <header>
            <h1><a href="https://github.com/lirbre" rel="noreferrer" target="_blank"><NewIcon iconName={<GiOrangeSlice style={{color: "var(--mainorange)", fontSize: '50px'}}/>}/>Orange<p>Store</p></a></h1>
            <button className="nav-switch nav-button" onClick={() => navMobileOpen()}>
                <NewIcon iconName={<FaBars size="45"/>}/>
            </button>
            <div className="nav-mobile"> 
                <form 
                    className="nav-form"
                    onSubmit={e => e.preventDefault()}
                >
                    <input 
                        className="nav-search" 
                        placeholder='Search for a product'
                        onChange={handleChange}
                    />
                    <button
                        className="nav-button"
                        type='submit'
                        disabled={disabled}
                    >
                        <NewIcon iconName={<AiOutlineSearch size="28" />}/>
                    </button>
                </form>
                <NewIcon iconName={<FiShoppingCart size="28"/>}/>
                <NewIcon iconName={<FaRegUser size="28"/>}/>
            </div>
        </header>
    ) : (
        <>
            <header>
                <h1><a href="https://github.com/lirbre" rel="noreferrer" target="_blank"><NewIcon iconName={<GiOrangeSlice style={{color: "var(--mainorange)", fontSize: '50px'}}/>}/>Orange<p>Store</p></a></h1>
                <button className="nav-switch nav-button" onClick={() => navMobileOpen()}>
                    <NewIcon iconName={<FaBars size="45"/>}/>
                </button>
            </header>
            <div className='mobile-options'>
                <form 
                    className="mobile-nav-form"
                    onSubmit={e => e.preventDefault()}
                >
                    <input 
                        className="nav-search" 
                        placeholder='Search for a product'
                        onChange={handleChange}
                        required
                    />
                    <button
                        className="nav-button"
                        type='submit'
                        disabled={disabled}
                    >
                        <NewIcon iconName={<AiOutlineSearch size="28" />}/>
                    </button>
                </form>
                <div className="mobile-nav-icon">
                    <p>User</p>
                    <NewIcon iconName={<FaRegUser size="28"/>}/>
                </div>
                <div className="mobile-nav-icon">
                    <p>My Cart</p>
                    <NewIcon iconName={<FiShoppingCart size="28"/>}/>
                </div>
                <button className="mobile-nav-close nav-button" onClick={() => navMobileOpen()}>
                    <NewIcon iconName={<AiOutlineClose size='3.75rem'/>}/>
                </button>
            </div>
        </>
     )
}

const NewIcon = ({ iconName }) => {
    return (
        <span className='navbar-span-icon'>
            {iconName}
        </span>
    )
}   

export default Navbar;  