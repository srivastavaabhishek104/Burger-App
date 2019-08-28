import React from 'react';
import classes from './Burger.css'
import BurgerIngrident from './BurgerIngridents/BurgerIngrident';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i)=> {
            return <BurgerIngrident key={igKey+i} type={igKey}></BurgerIngrident>;
        });
    }).reduce((arr,el) => {return arr.concat(el)},[]);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please Add Some Ingredients</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngrident type="bread-top"></BurgerIngrident>
            {transformedIngredients}
            <BurgerIngrident type="bread-bottom"></BurgerIngrident>
        </div>
    );
};

export default burger;