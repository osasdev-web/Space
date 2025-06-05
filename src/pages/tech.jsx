import { useState } from "react"
import bg from '../assets/technology/background-technology-desktop.jpg'
import data from "../data.json"

export default function tech() {

  // load all the technology into this stats
  const [technologies, setTechnologies]= useState(data.technology)

  // listens and waits for the selected technology to change
  const [selectedTechnology, setSelectedTechnology]= useState(technologies[0])






  return  (
    <>
      <div className="h-screen bg-cover bg center">
        <div className='absolute -z-10 inset-0'>
          <img src={bg} className='object-cover h-full w-full' />
        </div>


        

          <div className='w-full pt-40 px-32'>
            <h2> <span className='text-gray-700 font-semibold pr-4'>03</span>SPACE LAUNCH 101</h2>
          </div>

          <div className="flex">

            <div className="flex gap-5 pt-20 pl-32">
              <div className="flex flex-col gap-5">
                <div onClick={()=>setSelectedTechnology(technologies[0])} className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center font-semibold text-lg border border-white hover:bg-white cursor-pointer text-white hover:text-black">
                 1
                 </div>

                <div onClick={()=>setSelectedTechnology(technologies[1])} className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center font-semibold text-lg border border-white hover:bg-white cursor-pointer text-white hover:text-black">
                 2
                </div>

                <div onClick={()=>setSelectedTechnology(technologies[2])} className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center font-semibold text-lg border border-white hover:bg-white cursor-pointer text-white hover:text-black">
                 3
                </div>

                </div>

                <div>
                  <h3 className="uppercase text-gray-400 text-sm tracking-widest mb-2">The terminology</h3>

                  <h1 className="text-3xl md:text-5xl uppercase font-serif mb-4">{selectedTechnology.name}</h1>

                  <p className="text-gray-300 max-w-md">
                    {selectedTechnology.description}
                  
                  </p>

                </div>

                <div>
                  <img src={selectedTechnology.images.portrait} alt="Launch vehicle" className="w-90 h-90 rounded-lg object-cover ml-20" />
                </div>
              

              
                

              

            </div>


          </div>

      
    
          

      </div>
     
    </>
  )
}