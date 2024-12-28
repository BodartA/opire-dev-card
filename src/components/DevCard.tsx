import { useState } from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react'
import Barcode from '../assets/Barcode.png'
import users from '../../data.json'

const DevCard = () => {

  const [isOnTag, setIsOnTag] = useState(false)
  const user = users?.users[0]

  return (
    <div className=' min-h-screen min-w-screen flex items-center'>

      <div className='flex-1 h-full w-full'>

        <div className="lg:h-[280px] lg:max-w-[800px] lg:w-[800px] max-w-[600px] flex-shrink h-auto lg:flex lg:flex-row flex flex-col-reverse drop-shadow-2xl hover:lg:scale-110 lg:duration-700 mx-auto">

          <div className={` lg:h-full lg:w-[600px] max-w-full h-auto lg:flex flex-1 bg-zinc-50 rounded-b-3xl rounded-t-lg lg:rounded-l-3xl lg:rounded-r-lg px-4 pb-4 pt-6 lg:py-4 lg:pl-6 lg:pr-14 ${isOnTag ? "lg:-translate-x-5 lg:-skew-x-6 lg:-rotate-6 lg:origin-bottom-right lg:duration-500" : " lg:duration-500"} z-10`}>

            <div className='lg:self-center lg:relative lg:left-full lg:translate-x-[55px] lg:border-l-2 lg:border-dotted lg:border-zinc-50 lg:w-auto lg:h-[250px] lg:flex hidden z-10'></div>

            <div className=' flex flex-col p-4 max-h-full max-w-full bg-gradient-to-r from-opireLightGreen to-opireDarkGreen gap-2 shadow-custom rounded-md'>
              <h2 className=' text-start font-oswald text-lg font-light text-zinc-900 uppercase'>Opire developer stats</h2>
              <div className='grid grid-cols-2 border-dashed border border-zinc-900 justify-center items-center text-center divide-zinc-900 text-zinc-900 p-2 gap-4 uppercase font-bold'>
                <p>Issues resolved : {user.devStats.issuesResoved}</p>
                <p>Money earned: {user.devStats.moneyEarned}  </p>
                <p>Challenges won : {user.devStats.challengesWon}</p>
                <p>Contributed repos : {user.devStats.contributedRepos}</p>
              </div>
              <h2 className=' font-oswald text-lg tracking-tight font-normal uppercase'>Most used technos</h2>

              <div className=' flex-grow flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10px,_black_calc(100%-10px),transparent_100%)]'>
                <ul className=' flex flex-grow w-full flex-shrink-0 items-center justify-start font-oswald font-semibold uppercase text-3xl text-zinc-900 animate-infinite-scroll'>
                  {user.mostUsedTechs.map((data, i) => (
                    <li className=' flex flex-shrink-0 line-clamp-1 mx-2 underline' key={i}>{data.langage}</li>
                  ))}
                </ul>
                <ul className='flex flex-grow w-full flex-shrink-0 items-center justify-start font-oswald font-semibold uppercase text-3xl text-zinc-900 animate-infinite-scroll' aria-hidden="true">
                  {user.mostUsedTechs.map((data, i) => (
                    <li className=' flex flex-shrink-0 line-clamp-1 mx-2 underline' key={i}>{data.langage}</li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

          <div className='flex lg:w-[2px] lg:h-[250px] lg:mx-0 h-[2px] max-w-full mx-[15px] shrink border-b-2 border-zinc-50 border-dotted lg:border-none'></div>

          <a href={user.socialLinks.github} onMouseEnter={() => setIsOnTag(true)} onMouseLeave={() => setIsOnTag(false)} className=' lg:flex lg:h-full lg:w-[200px] w-full lg:rotate-0 bg-zinc-50 rounded-t-3xl rounded-b-lg lg:rounded-r-3xl lg:rounded-l-lg hover:lg:translate-x-5  hover:lg:rotate-[20deg] lg:origin-bottom-left lg:duration-500 hover:lg:skew-x-12'>

            <div className=' lg:self-center lg:relative lg:left-0 lg:-translate-x-[1px] lg:border-l-2 lg:border-dotted lg:border-zinc-50 lg:w-auto lg:h-[250px] lg:flex hidden z-10'></div>

            <div className='lg:flex lg:flex-row p-4 text-zinc-900 flex flex-col-reverse'>

              <div className=' lg:flex lg:flex-col lg:w-1/2 gap-1 flex items-center'>
                <div className='lg:[writing-mode:vertical-rl] flex-1 flex flex-col justify-end overflow-hidden text-ellipsis font-oswald'>
                  <h2 className=' text-opireLightGreen tracking-tight font-extrabold text-xs lg:line-clamp-1 line-clamp-2'>{user.role}</h2>
                  <h1 className=' tracking-tight text-2xl font-bold line-clamp-2'>{user.name}</h1>
                </div>
                <div className='lg:flex lg:flex-row lg:justify-start lg:gap-2 flex flex-col gap-2'>
                  <a href={user.socialLinks.X}><Twitter size={20} /></a>
                  <a href={user.socialLinks.github}><Github size={20} /></a>
                  <a href={user.socialLinks.linkedIn}><Linkedin size={20} /></a>
                </div>
              </div>

              <div className='flex gap-2'>
                <div className=' text-center lg:[writing-mode:vertical-lr] font-semibold text-xs font-oswald text-zinc-900'>Joined : {user.registrationDate}</div>
                <div className=' lg:flex lg:justify-center lg:items-start hidden'>
                  <img className='h-full w-full object-cover' src={Barcode}></img>
                </div>
              </div>
            </div>

          </a>

        </div >
      </div>
    </div >
  );
};

export default DevCard;