import { useEffect, useState } from 'react';
import React from 'react';
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';
import Header from '../Header/Header'
import './Activities.css'

const Activities = () => {
    const [activities,setActivites] = useState([]);

    useEffect(() => {
        fetch('activities.json')
        .then(res => res.json())
        .then(data => setActivites(data))
        .catch(error => console.log(error))
    },[])

    return (
        <div>
             <div className='grid grid-cols-5 gap-4 bg-gray-200'>
                <div className='col-span-5 md:col-span-3 lg:col-span-4 mx-24 mt-4'>
                    <Header></Header>
                    <h1 className='text-center text-xl md:text-3xl font-semibold md:text-left text-black mb-10'>Select today’s coding practice</h1>
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12'>
                        {
                          activities.map(activity => <Activity
                            activity = {activity}
                            key={activity.id}
                          ></Activity>)
                        }
                    </div>
                </div>
                <div className='col-span-5 rounded-md mx-24 py-8 mb-5 md:rounded-none md:mx-0 md:py-0 md:mb-0 md:col-span-2 lg:col-span-1 bg-orange-300 text-white relative'>
                <div className='sticky top-0'>
                    <Cart></Cart>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Activities;