import React from 'react';
import { toast } from 'react-toastify';
import './Practice.css'

const Practice = ({totalTime}) => {
    const handleToast = () =>{
        toast.success("Congratulation !! you have done your activity 😊");
    }
    const addBreak = (time) => {
        console.log(time);
    }
    return (
        <div className='px-6 mt-6'>
            <h1 className='text-left text-2xl mb-6 font-semibold'>Add a Break</h1>
            <div className='bg-gray-200 text-lg rounded-md p-6 flex items-end justify-between font-semibold'>
                <button onClick={() => addBreak(10)} className='rounded-full bg-teal-500 w-14 h-14'>10m</button>
                <button onClick={() => addBreak(20)} className='rounded-full bg-teal-500 w-14 h-14'>20m</button>
                <button onClick={() => addBreak(30)} className='rounded-full bg-teal-500 w-14 h-14'>30m</button>
                <button onClick={() => addBreak(40)} className='rounded-full bg-teal-500 w-14 h-14'>40m</button>
                <button onClick={() => addBreak(50)} className='rounded-full bg-teal-500 w-14 h-14'>50m</button>
            </div>
            <h1 className='text-left text-2xl mt-20 mb-6 font-semibold'>Practice Details</h1>
            <div className='bg-gray-200 text-2xl rounded-md p-6 flex items-center justify-between'>
                <p>Exercise time</p>
                <p>{totalTime}m</p>
            </div>
            <div className='bg-gray-200 text-2xl my-6 rounded-md p-6 flex items-center justify-between'>
                <p>Break time</p>
                <p></p>
            </div>
            <div>
                <button onClick={handleToast} className='py-4 bg-teal-500 w-full rounded-md text-2xl font-semibold'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Practice;