import React from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react'
import Barcode from '../assets/Barcode.png'

const DevCard = () => {
  return (
    <div>
      <div className='h-[280px] w-[800px] flex justify-center items-center drop-shadow-2xl'>

        <div className=' h-full w-[600px] flex bg-zinc-50 rounded-l-3xl rounded-r-lg py-6 pl-6 pr-14'>
          <div className=' flex flex-col p-2 size-full bg-pastGreen'>
            <h2 className=' text-start'>Opire developer stats</h2>
            <div className='grid grid-cols-2 border-dashed border justify-center items-center text-center divide-x divide-dashed'>
              <p>Challenge won : 3</p>
              <p>Money earned : 400 $</p>
            </div>
          </div>

        </div>


        <div className=' flex h-full w-[200px] bg-zinc-50 rounded-r-3xl rounded-l-lg'>

          <div className='flex flex-row p-4 text-zinc-800'>

            <div className=' flex flex-col w-1/2 gap-1'>
              <div className='[writing-mode:vertical-rl] flex-1 flex flex-col justify-end overflow-hidden text-ellipsis font-oswald'>
                <h2 className=' text-pastGreen font-extrabold text-xs line-clamp-2'>Frontend developer OF THE BEEST WORLD Of the wolrd</h2>
                <h1 className=' text-2xl font-bold line-clamp-2'>Antoine BODART DE ZUMO DE NARANJA</h1>
              </div>
              <div className='flex justify-start gap-2'>
                <Twitter size={20} />
                <Github size={20} />
                <Linkedin size={20} />
              </div>
            </div>

            <div className='flex flex-row gap-2'>
              <div className=' text-center [writing-mode:vertical-lr] font-semibold text-xs font-oswald'>Joined : 02/20/23</div>
              <div className=' flex justify-center items-start'>
                <img className=' h-full w-full object-cover' src={Barcode}></img>
              </div>

            </div>

          </div>
        </div>

      </div >
    </div>
  );
};

export default DevCard;