import { useState } from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react'
import Barcode from '../assets/Barcode.png'
import users from '../../data.json'

const DevCard = () => {

  const [isOnTag, setIsOnTag] = useState(false)
  const user = users?.users[0]

  return (
    <div>
      <div className="h-[280px] w-[800px] flex justify-center items-center drop-shadow-2xl hover:scale-110 duration-700">

        <div className={` h-full w-[600px] flex bg-zinc-50 rounded-l-3xl rounded-r-lg py-4 pl-6 pr-14 ${isOnTag ? "-translate-x-5 -skew-x-6 -rotate-6 origin-bottom-right duration-500" : " duration-500"} z-10`}>
          <div className=' self-center relative left-full translate-x-[55px] border-l-2 border-dotted border-zinc-50 w-auto h-[250px] z-10'></div>

          <div className=' flex flex-col p-4 size-full bg-pastGreen gap-2'>
            <h2 className=' text-start font-oswald text-lg font-light text-zinc-900 uppercase'>Opire developer stats</h2>
            <div className='grid grid-cols-2 border-dashed border border-zinc-900 justify-center items-center text-center divide-zinc-900 text-zinc-900 p-2 gap-4 uppercase font-bold'>
              <p>Issues resolved : {user.devStats.issuesResoved}</p>
              <p>Money earned: {user.devStats.moneyEarned}  </p>
              <p>Challenges won : {user.devStats.challengesWon}</p>
              <p>Contributed repos : {user.devStats.contributedRepos}</p>
            </div>
            <h2 className=' font-oswald text-lg tracking-tight font-normal uppercase'>Most used technos</h2>






            <div className=' flex-grow flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10px,_black_calc(100%-10px),transparent_100%)]'>
              <ul className=' flex flex-grow min-w-full flex-shrink-0 items-center justify-start font-oswald font-semibold uppercase text-3xl text-zinc-900 animate-infinite-scroll'>
                {user.mostUsedTechs.map((data, i) => (
                  <li className=' flex flex-shrink-0 line-clamp-1 mx-2 underline' key={i}>{data.langage}</li>
                ))}
              </ul>
              <ul className='flex flex-grow min-w-full flex-shrink-0 items-center justify-start font-oswald font-semibold uppercase text-3xl text-zinc-900 animate-infinite-scroll' aria-hidden="true">
                {user.mostUsedTechs.map((data, i) => (
                  <li className=' flex flex-shrink-0 line-clamp-1 mx-2 underline' key={i}>{data.langage}</li>
                ))}
              </ul>
            </div>








          </div>

        </div>

        <div className='w-[2px] h-[250px]'></div>

        <a href={user.socialLinks.github} onMouseEnter={() => setIsOnTag(true)} onMouseLeave={() => setIsOnTag(false)} className=' flex h-full w-[200px] bg-zinc-50 rounded-r-3xl rounded-l-lg hover:translate-x-5 hover:rotate-[20deg] origin-bottom-left duration-500 hover:skew-x-12'>

          <div className=' self-center relative left-0 -translate-x-[1px] border-l-2 border-dotted border-zinc-50 w-auto h-[250px] z-10'></div>

          <div className='flex flex-row p-4 text-zinc-900'>

            <div className=' flex flex-col w-1/2 gap-1'>
              <div className='[writing-mode:vertical-rl] flex-1 flex flex-col justify-end overflow-hidden text-ellipsis font-oswald'>
                <h2 className=' text-pastGreen tracking-tight font-extrabold text-xs line-clamp-1'>{user.role}</h2>
                <h1 className=' tracking-tight text-2xl font-bold line-clamp-2'>{user.name}</h1>
              </div>
              <div className='flex justify-start gap-2'>
                <a href={user.socialLinks.X}><Twitter size={20} /></a>
                <a href={user.socialLinks.github}><Github size={20} /></a>
                <a href={user.socialLinks.linkedIn}><Linkedin size={20} /></a>
              </div>
            </div>

            <div className='flex gap-2'>
              <div className=' text-center [writing-mode:vertical-lr] font-semibold text-xs font-oswald text-zinc-900'>Joined : {user.registrationDate}</div>
              <div className=' flex justify-center items-start'>
                <img className=' h-full w-full object-cover' src={Barcode}></img>
              </div>

            </div>

          </div>
        </a>

      </div >
    </div >
  );
};

export default DevCard;