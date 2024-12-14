import React from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react'

const DevCard = () => {
  return (
    <>
      <div className='h-[280px] w-[800px] flex justify-center items-center drop-shadow-2xl'>

        <div className=' h-full w-[600px] flex bg-zinc-50 rounded-l-3xl rounded-r-lg py-6 pl-6 pr-14'>
          <div className=' size-full bg-emerald-600'>

          </div>

        </div>

        <div className=' flex h-full w-[200px] bg-zinc-50 rounded-r-3xl rounded-l-lg'>

          <div className=' h-full w-full flex p-2 text-zinc-800'>

            <div className=' flex flex-col'>
              <img className='w-[48px] h-[48px]'></img>
              <div className=' border'>
                <h2>Front-end developer</h2>
                <h1>Ted Frosty</h1>
              </div>
              <div className='flex border-2 justify-start gap-2'>
                <Twitter />
                <Github />
                <Linkedin />
              </div>
            </div>

            <div>

            </div>

          </div>
        </div>

      </div >
    </>
  );
};

export default DevCard;