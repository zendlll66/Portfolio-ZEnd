import React from 'react'

const MyComponent = () => {
    return (
        <div className='h-screen w-full bg-black  relative'>
            <div className="absolute flex justify-center items-center space-x-5  border-red-500 m-10 p-4 rounded-[50px]">
                <a
                    href=""
                    className="text-[18px] text-white hover:text-red-300 hover:text-[24px] ease-in-out duration-500 transform "
                >
                    BUTTON
                </a>
                <a
                    href=""
                    className="text-[18px] text-white hover:text-red-300 hover:text-[24px] ease-in-out duration-500 transform "
                >
                    INPUT FIELD
                </a>
                <a
                    href=""
                    className="text-[18px] text-white hover:text-red-300 hover:text-[24px] ease-in-out duration-500 transform "
                >
                    CARD
                </a>
                <a
                    href=""
                    className="text-[18px] text-white hover:text-red-300 hover:text-[24px] ease-in-out duration-500 transform "
                >
                    NAVBARS
                </a>
            </div>
        </div>
    )
}

export default MyComponent