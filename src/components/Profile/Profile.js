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
                <p>CSE Department</p>
                <div className='flex items-center justify-between px-6 pt-4'>
                    <div>
                        <p>75<span>kg</span></p>
                        <p>Weight</p>
                    </div>
                
                
                    <div>
                        <p>5.8</p>
                        <p>Height</p>
                    </div>
                
                
                        <div>
                        <p>25<span>yrs</span></p>
                        <p>Age</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;