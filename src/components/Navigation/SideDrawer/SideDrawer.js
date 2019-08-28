import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux'

const sideDrawer = (props) => {
    const sideDrawer = [classes.SideDrawer];
    if(props.open) {
        sideDrawer.push(classes.Open);
    } else {
        sideDrawer.push(classes.Close);
    }
    return (
        <Aux>
            <Backdrop show = {props.open} clicked = {props.closed}/>
            <div className={sideDrawer.join(" ")}>
                <Logo height="11%" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;