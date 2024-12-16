import React, { useState } from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react'
import Barcode from '../assets/Barcode.png'

const DevCard = () => {

  const [isOnTag, setIsOnTag] = useState(false)

  return (
    <div>
      <div className="h-[280px] w-[800px] flex justify-center items-center drop-shadow-2xl hover:scale-110 duration-700">

        <div className={` h-full w-[600px] flex bg-zinc-50 rounded-l-3xl rounded-r-lg py-4 pl-6 pr-14 ${isOnTag ? "-translate-x-5 -skew-x-6 -rotate-6 origin-bottom-right duration-500" : " duration-500"}`}>
          <div className=' flex flex-col p-4 size-full bg-pastGreen gap-2'>
            <h2 className=' text-start font-oswald text-lg font-light text-zinc-900 uppercase'>Opire developer stats</h2>
            <div className='grid grid-cols-2 border-dashed border border-zinc-900 justify-center items-center text-center divide-zinc-900 text-zinc-900 p-2 gap-4 uppercase font-bold'>
              <p>Issues resolved : 3</p>
              <p>Money earned : 400 $</p>
              <p>Challenges won : 3</p>
              <p>Contributed repos : 10</p>
            </div>
            <h2></h2>
          </div>

        </div>

        <div className=' border-l-2 border-dashed border-zinc-50 w-auto h-[250px]'></div>

        <div onMouseEnter={() => setIsOnTag(true)} onMouseLeave={() => setIsOnTag(false)} className=' flex h-full w-[200px] bg-zinc-50 rounded-r-3xl rounded-l-lg hover:translate-x-5 hover:rotate-[20deg] origin-bottom-left duration-500 hover:skew-x-12'>

          <div className='flex flex-row p-4 text-zinc-900'>

            <div className=' flex flex-col w-1/2 gap-1'>
              <div className='[writing-mode:vertical-rl] flex-1 flex flex-col justify-end overflow-hidden text-ellipsis font-oswald'>
                <h2 className=' text-pastGreen tracking-tight font-extrabold text-xs line-clamp-1'>Frontend developer</h2>
                <h1 className=' tracking-tight text-2xl font-bold line-clamp-2'>Antoine BODART</h1>
              </div>
              <div className='flex justify-start gap-2'>
                <Twitter size={20} />
                <Github size={20} />
                <Linkedin size={20} />
              </div>
            </div>

            <div className='flex gap-2'>
              <div className=' text-center [writing-mode:vertical-lr] font-semibold text-xs font-oswald text-zinc-900'>Joined : 02/20/23</div>
              <div className=' flex justify-center items-start'>
                <img className=' h-full w-full object-cover' src={Barcode}></img>
              </div>

            </div>

          </div>
        </div>

      </div >
    </div >
  );
};

export default DevCard;