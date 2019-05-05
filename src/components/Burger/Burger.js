import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)

        // turn ingredients objext into array, map array for counts, then map array for ingredients
        .map((ingKey) => {
            return [...Array(props.ingredients[ingKey])].map((_, i) => {
                return <BurgerIngredient key={ingKey + i} type={ingKey} />
            })
        }).reduce((arr, el)=>{
            return arr.concat(el)
        }, [])
        if(transformedIngredients.length === 0){
            transformedIngredients = <p>Please start adding ignredients</p>
        }


    // function makeArr(obj) {
    //     const objKeysArr = Object.keys(obj);
    //     const objValuesArr = Object.values(obj);
    //     const ingredientsArr = [];
    //     objKeysArr.forEach((el, index) => {
    //       for (let i = 0; i < objValuesArr[index]; i++) {
    //         ingredientsArr.push(<BurgerIngredient type={el} key={el+i+Math.floor(Math.random() * 10000)}/>); 
    //       }
    //     });
    //     return ingredientsArr;
    //   }

    



    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger