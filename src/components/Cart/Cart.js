import React from 'react';
import Practice from '../Practice/Practice';
import Profile from '../Profile/Profile';
import './Cart.css'

const Cart = ({cart}) => {
    let totalTime = 0;
    for(const activity of cart){
        totalTime = totalTime + activity.time;
    }
    return (
        <div>
            <Profile></Profile>
            <Practice
                totalTime = {totalTime}
            ></Practice>
        </div>
    );
};

export default Cart;