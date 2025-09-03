import React from 'react';
import { NavLink } from 'react-router-dom';

const Users = () => {
  return (
    <>
        <div className="p-6 space-y-10 mt-25">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="flex flex-col justify-center bg-gradient-to-t from-blue-700 to-yellow-600 p-4 rounded-lg h-[340px] shadow-lg shadow-blue-950">
                    <div className='h-auto w-auto border-4 border-white/10 p-4 bg-blue-950 shadow-[0_0_12px_rgba(0,0,0,0.2)] flex items-center justify-center mx-auto'>
                        <div className="w-36 h-36 mx-auto flex items-center justify-center rounded-full bg-yellow-600  shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                            <i className="fa-solid fa-user-graduate text-white text-[80px]"></i>
                        </div>
                    </div>
                    <div className='mt-7'>
                        <NavLink className="flex w-48 h-12 bg-blue-950 mx-auto text-white tracking-wider items-center justify-center rounded-xl text-lg text-center border-2 border-white/25 shadow-[0_0_12px_rgba(0,0,0,0.2)] transition-all duration-700 ease-in-out hover:scale-105 hover:bg-yellow-600 hover:border-yellow-700">
                        Student
                        </NavLink>
                    </div>
                </div>

                <div className="flex flex-col justify-center bg-gradient-to-t from-blue-700 to-yellow-600 p-4 rounded-lg h-[340px] shadow-lg shadow-blue-950">
                    <div className='h-auto w-auto border-4 border-white/10 p-4 bg-blue-950 shadow-[0_0_12px_rgba(0,0,0,0.2)] flex items-center justify-center mx-auto'>
                        <div className="w-36 h-36 mx-auto flex items-center justify-center rounded-full bg-yellow-600  shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                            <i className="fa-solid fa-chalkboard-teacher text-white text-[80px]"></i>
                        </div>
                    </div>
                    <div className='mt-7'>
                        <NavLink className="flex w-48 h-12 bg-blue-950 mx-auto text-white tracking-wider items-center justify-center rounded-xl text-lg text-center border-2 border-white/25 shadow-[0_0_12px_rgba(0,0,0,0.2)] transition-all duration-700 ease-in-out hover:scale-105 hover:bg-yellow-600 hover:border-yellow-700">
                        Teacher
                        </NavLink>
                    </div>
                </div>

                <div className="flex flex-col justify-center bg-gradient-to-t from-blue-700 to-yellow-600 p-4 rounded-lg h-[340px] shadow-lg shadow-blue-950">
                    <div className='h-auto w-auto border-4 border-white/10 p-4 bg-blue-950 shadow-[0_0_12px_rgba(0,0,0,0.2)] flex items-center justify-center mx-auto'>
                        <div className="w-36 h-36 mx-auto flex items-center justify-center rounded-full bg-yellow-600  shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                            <i className="fa-solid fa-id-badge text-white text-[80px]"></i>
                        </div>
                    </div>
                    <div className='mt-7'>
                        <NavLink className="flex w-48 h-12 bg-blue-950 mx-auto text-white tracking-wider items-center justify-center rounded-xl text-lg text-center border-2 border-white/25 shadow-[0_0_12px_rgba(0,0,0,0.2)] transition-all duration-700 ease-in-out hover:scale-105 hover:bg-yellow-600 hover:border-yellow-700">
                        Staff
                        </NavLink>
                    </div>
                </div>

                <div className="flex flex-col justify-center bg-gradient-to-t from-blue-700 to-yellow-600 p-4 rounded-lg h-[340px] shadow-lg shadow-blue-950">
                    <div className='h-auto w-auto border-4 border-white/10 p-4 bg-blue-950 shadow-[0_0_12px_rgba(0,0,0,0.2)] flex items-center justify-center mx-auto'>
                        <div className="w-36 h-36 mx-auto flex items-center justify-center rounded-full bg-yellow-600  shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                            <i className="fa-solid fa-file-invoice-dollar text-white text-[80px]"></i>
                        </div>
                    </div>
                    <div className='mt-7'>
                        <NavLink className="flex w-48 h-12 bg-blue-950 mx-auto text-white tracking-wider items-center justify-center rounded-xl text-lg text-center border-2 border-white/25 shadow-[0_0_12px_rgba(0,0,0,0.2)] transition-all duration-700 ease-in-out hover:scale-105 hover:bg-yellow-600 hover:border-yellow-700">
                        Accounts
                        </NavLink>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Users;