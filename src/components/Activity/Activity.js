import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import './Activity.css';

const Activity = ({activity, handleExerciseTime}) => {
    const {img, name, about, rating, time } = activity;

    return (
        <div className='mb-6'>
            <div className="card bg-white text-black p-5 shadow-md">
                <figure><img src={img} className="rounded-md w-full h-[200px] bg-cover" alt="Shoes" /></figure>
                <div className="text-left">
                    <div className='flex flex-col gap-4 py-4'>
                        <div>
                            <h2 className="text-2xl font-semibold">{name}</h2>
                        </div>
                        <div className='text-lg'>
                            <p>{about.slice(0,90)+'...'}</p>
                        </div>
                        <div>
                            <p>Rating : {rating} stars</p>
                            <p>Time required : {time}m</p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button onClick={() => {handleExerciseTime(activity)}} className="bg-lean-500 w-full bg-teal-500 text-black hover:bg-black hover:text-white rounded-md flex flex-row py-3 justify-center items-center"><p className='pr-2 text-lg font-semibold'>Add to list</p><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;