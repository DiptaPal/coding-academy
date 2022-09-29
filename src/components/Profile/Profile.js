import React from 'react';
import './Profile.css';
import profile from '../../images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Profile = () => {
    return (
        <div>
            <div className='flex text-lg mt-8 px-6'>
                <img src={profile} className='w-16 h-16 rounded-full' alt="" />
                <div className='pl-4'>
                    <p className='text-left font-bold'>Dipta Pal</p>
                    <div className='flex items-center justify-center'>
                        <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                        <p className='pl-2'>Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
            <div className='bg-gray-200 mx-6 text-lg mt-12 rounded-md py-6'>
                <p>United International University</p>
                <p>Department of CSE</p>
                <div className='flex items-center justify-between px-6 pt-4'>
                    <div>
                        <p><span className='text-4xl font-bold'>75</span><span className='text-lg text-gray-500'>kg</span></p>
                        <p className='text-xl'>Weight</p>
                    </div>

                    <div>
                        <p className='text-4xl font-bold'>5.6</p>
                        <p className='text-xl'>Height</p>
                    </div>
                    
                    <div>
                        <p><span className='text-4xl font-bold'>25</span><span className='text-lg text-gray-500'>yrs</span></p>
                        <p  className='text-xl'>Age</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;