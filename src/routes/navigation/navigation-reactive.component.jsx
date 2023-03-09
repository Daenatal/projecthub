import React from 'react';
import { Fragment, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { ReactComponent as Bolt } from '../../assets/bolt.svg';
import { ReactComponent as Plus } from '../../assets/plus.svg';
import { ReactComponent as Bell } from '../../assets/bell.svg';
import { ReactComponent as Messenger } from '../../assets/messenger.svg';
import {ReactComponent as CogIcon} from '../../assets/cog.svg';
import { ReactComponent as Chevron } from '../../assets/chevron.svg';

import { ReactComponent as Caret } from '../../assets/caret.svg';


import './navigation-reactive.styles.scss';

import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';







const DropDownMenu = () => {

    const [open, setOpen] = useState(true);

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const nodeRef = React.useRef(null);
    const nodeRef2 = React.useRef(null);

    useEffect(() => {
        setMenuHeight(nodeRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight (el)  {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    const DropDownItem = (props) => {

        return(
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-button">{props.rightIcon}</span>
            </a>
        ); 
    }
    if (open){
        return (
       
            <div className='dropdown' style={{height: menuHeight}} onMouseLeave={() => setOpen(!open)}>
            <CSSTransition 
                in={activeMenu === 'main'} 
                unmountOnExit 
                timeout={500} 
                className="menu-primary"
                onEnter={calcHeight}
                nodeRef={nodeRef}>
                <div className="menu">
                    <DropDownItem>My Profile</DropDownItem>
                    <DropDownItem 
                        leftIcon={<CogIcon />} 
                        rightIcon={<Chevron />}
                        goToMenu="settings">
                            Settings
                    </DropDownItem>
                </div>
            </CSSTransition> 


            <CSSTransition 
                in={activeMenu === 'settings'} 
                unmountOnExit timeout={500} 
                className="menu-secondary"
                onEnter={calcHeight}
                nodeRef={nodeRef}>
                    <div className="menu">
                        <DropDownItem>My Profile</DropDownItem>
                        <DropDownItem 
                            leftIcon={<Arrow />} 
                            goToMenu="main">
                                Settings
                        </DropDownItem>
                        <DropDownItem>Settings</DropDownItem>
                        <DropDownItem>Settings</DropDownItem>
                        <DropDownItem>Settings</DropDownItem>
                        <DropDownItem>Settings</DropDownItem>
                        <DropDownItem>Settings</DropDownItem>
                        <DropDownItem>Settings</DropDownItem>
                    </div>
            </CSSTransition> 
        </div>
        
        );
    }
    
}


const NavbarItems = () => {
    return (
        <Fragment>
            <NavItem icon={<Plus />} />
            <NavItem icon={<Bell />} />
            <NavItem icon={<Messenger />} />
            <NavItem icon={<Caret />}>
                {/* dropdown goes here */}
                <DropDownMenu />
            </NavItem>
        </Fragment>
    );
}

function NavItem(props) {

    const [open, setOpen] = useState(false);

    return (
        <li className='nav-item'>
            <a href="#" className='icon-button' 
                onClick={() => setOpen(!open)}
                onMouseEnter={() => setOpen(!open)}
                >
                {props.icon}
            </a>
            {open && props.children}
        </li>
    )
}

const Navbar = () => {
    return (
        <Fragment>
            <nav className="navbar">
                <ul className="navbar-nav">
                    <Link className='logo-container' to='/'>
                        <CrwnLogo className='logo' />
                    </Link>
                    <Link className="nav-links-container" to='/shop'>
                        Shop
                    </Link>
                    <NavbarItems />
                </ul>
            </nav>
            <Outlet />
        </Fragment>
        
    )
}

export default Navbar;