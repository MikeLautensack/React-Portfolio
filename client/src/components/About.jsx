import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                    </p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold pl'>
                    <p>Hi, I'm Mike, welcome to my portfolio.  Please take a look at my work!</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tenetur adipisci excepturi recusandae ipsam cumque vero dolor aperiam cum numquam! Officia rerum tempore, consequatur ad doloremque, maiores inventore corporis eligendi quis atque dolorum, voluptatum animi tenetur? Ratione obcaecati tempora nihil quaerat necessitatibus. Minima reprehenderit ex quas soluta debitis sunt. Nostrum.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About