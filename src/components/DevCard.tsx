import React from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react'
import Barcode from '../assets/Barcode.png'

const DevCard = () => {
  return (
    <>
      <div className='h-[280px] w-[800px] flex justify-center items-center drop-shadow-2xl'>

        <div className=' h-full w-[600px] flex bg-zinc-50 rounded-l-3xl rounded-r-lg py-6 pl-6 pr-14'>
          <div className=' size-full bg-emerald-600'>

          </div>

        </div>




        <div className=' flex h-full w-[200px] bg-zinc-50 rounded-r-3xl rounded-l-lg'>

          <div className='flex flex-row p-4 text-zinc-800'>

            <div className=' flex flex-col w-1/2 gap-1'>
              <div className='[writing-mode:vertical-rl] flex-1 flex flex-col justify-end overflow-hidden text-ellipsis'>
                <h2 className=' text-emerald-600 font-light text-xs line-clamp-2'>Frontend developer</h2>
                <h1 className=' text-xl font-bold line-clamp-2'>Antoine BODART</h1>
              </div>
              <div className='flex justify-start gap-2'>
                <Twitter size={20} />
                <Github size={20} />
                <Linkedin size={20} />
              </div>
            </div>

            <div className='flex flex-row w-1/2 gap-2'>
              <div className=' text-center [writing-mode:vertical-lr] font-semibold text-xs font-mono'>Joined : 02/20/23</div>
              <div className=' flex flex-1 justify-center items-start'>
                <img className=' h-full w-full object-cover' src={Barcode}></img>
              </div>

            </div>

          </div>
        </div>

      </div >
    </>
  );
};

export default DevCard;