
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classes from './BurgerIngredient.css'

class BurgerIngrident extends Component {
    
    render() {
        let ingrident = null;
        switch(this.props.type) {
            case ('bread-bottom'):
                ingrident = <div className={classes.BreadBottom}></div>
                break;
            case ('bread-top'):
                ingrident = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingrident = <div className={classes.Meat}></div>
                break;
            case ('bacon'):
                ingrident = <div className={classes.Bacon}></div>
                break;
            case ('cheese'):
                ingrident = <div className={classes.Cheese}></div>
                break;
            case ('salad'):
                ingrident = <div className={classes.Salad}></div>
                break;
            default:
                ingrident = null;
        }
        return ingrident;
    }
}

BurgerIngrident.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngrident;
