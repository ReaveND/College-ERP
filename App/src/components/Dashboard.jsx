import React from 'react'

const Dashboard = () => {
  return (
    <>
        {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Students */}
            <div className="flex items-center bg-[#e9e9e9] p-4 rounded-md h-auto">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-400 shadow-md">
                <i className="fa-solid fa-user-group text-white"></i>
              </div>
              <div className="ml-4">
                <p className="text-xl font-bold">6,500</p>
                <p className="text-sm text-gray-600">Students</p>
              </div>
            </div>

            {/* Courses */}
            <div className="flex items-center bg-[#e9e9e9] p-4 rounded-md h-auto">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-400 shadow-md">
                <i className="fa-solid fa-book-open text-white"></i>
              </div>
              <div className="ml-4">
                <p className="text-xl font-bold">2,300</p>
                <p className="text-sm text-gray-600">Courses</p>
              </div>
            </div>

            {/* Teachers */}
            <div className="flex items-center bg-[#e9e9e9] p-4 rounded-md h-auto">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-400 shadow-md">
                <i className="fa-solid fa-graduation-cap text-white"></i>
              </div>
              <div className="ml-4">
                <p className="text-xl font-bold">1,200</p>
                <p className="text-sm text-gray-600">Teachers</p>
              </div>
            </div>

            {/* Subjects */}
            <div className="flex items-center bg-[#e9e9e9] p-4 rounded-md h-auto">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-400 shadow-md">
                <i className="fa-solid fa-address-book text-white"></i>
              </div>
              <div className="ml-4">
                <p className="text-xl font-bold">1,200</p>
                <p className="text-sm text-gray-600">Subjects</p>
              </div>
            </div>
          </div>
    </>
  )
}

export default Dashboard