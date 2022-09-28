import React from 'react';
import './Activity.css'

const Activity = ({activity}) => {
    const {img, name, about, rating, time } = activity;

    return (
        <div className='mb-6'>
            <div className="card bg-white text-black p-5 shadow-md">
                <figure><img src={img} className="rounded-md w-full h-[200px]" alt="Shoes" /></figure>
                <div className="text-left">
                    <div className='flex flex-col gap-8'>
                        <div>
                            <h2 className="text-lg">{name}</h2>
                        </div>
                        <div>
                            <p>{about.slice(0,90)+'...'}</p>
                            <p>Rating : {rating} stars</p>
                            <p>Time required : {time}m</p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button className="bg-lean-500 w-full bg-teal-500 text-black hover:bg-black hover:text-white rounded-md flex flex-row py-3 justify-center items-center"><p className='pr-2'>Add to Cart</p></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;