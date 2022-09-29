import { useEffect, useState } from 'react';
import React from 'react';
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';
import Header from '../Header/Header'
import './Activities.css'
import Question from '../Question/Question';

const Activities = () => {
    const [activities,setActivities] = useState([]);
    const [task, setTask] = useState([])

    useEffect(() => {
        fetch('./activities.json')
        .then(res => res.json())
        .then(data => {
            setActivities(data) 
            localStorage.setItem('break-time',0);
        })
    },[])

    const handleExerciseTime = (activity) =>{
        let newActivity = [...task,activity]
        setTask(newActivity);
    }

    
    return (
        <div>
            <div className='grid grid-cols-7 gap-4 bg-gray-200 px-4 md:px-0 md:pl-4'>
                <div className='col-span-7 md:col-span-4 lg:col-span-5 mt-4 md:px-10 lg:px-20'>
                    <Header></Header>
                    <h1 className='text-xl md:text-3xl font-semibold xl:text-left text-center text-black mb-10'>Select today’s coding practice</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12'>
                        {
                          activities.map(activity => <Activity
                            activity = {activity}
                            key={activity.id}
                            handleExerciseTime = {handleExerciseTime}
                          ></Activity>)
                        }
                    </div>
                    <Question></Question>
                </div>
                <div className='rounded-md py-8 mb-5 md:rounded-none md:mx-0 md:py-0 md:mb-0 col-span-7 md:col-span-3 lg:col-span-2 bg-white text-black relative'>
                <div className='sticky top-2'>
                    <Cart 
                        cart = {task}
                    ></Cart>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Activities;