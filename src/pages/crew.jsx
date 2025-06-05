import { useState } from "react"
import data from "../data.json"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";




export default function crew() {

  const [currentIndex, setCurrentIndex]= useState(0)


// load all the destination into this stats
const [crews, setCrews]= useState(data.crew)

// listens and waits for the selected destination to change
const [selectedCrewMember, setSelectedCrewMember]= useState(crews[currentIndex])




const handleNextImage=()=>{
  
if(currentIndex >= crews.length - 1){
  setCurrentIndex(0)
  setSelectedCrewMember(crews[0])
}else{
  setSelectedCrewMember(crews[currentIndex + 1])
  setCurrentIndex(currentIndex + 1)
}
}

const handlePreviousImage=()=>{
  if(currentIndex === 0){
  setCurrentIndex(crews.length-1)
  setSelectedCrewMember(crews[currentIndex + crews.length - 1])
}else{
  setSelectedCrewMember(crews[currentIndex - 1])
  setCurrentIndex(currentIndex - 1)

}
  
}

  return (
    <>
      <div className="h-screen bg-cover bg center">
        <div className='absolute -z-10 inset-0'>
          <img src='background-crew-desktop.jpg' className='object-cover h-full w-full' />
        </div>

        <div className="flex gap-5 h-full">

            <div className=" flex absolute z-50 mt-86 w-full justify-between">

              <div>
                <button onClick={handlePreviousImage}><IoIosArrowBack /> </button>
              </div>

              <div>
                <button onClick={handleNextImage}><IoIosArrowForward /> </button>

              </div> 

            </div>

        <div className='w-full pt-40 px-32'>
            <h2> <span className='text-gray-700 font-semibold pr-4'>02</span>MEET YOUR CREW</h2>

          

            <h3 className="w-1/2 text-gray-300 mt-29 font-light uppercase">{selectedCrewMember.role}</h3>

            <h1 className="text-white mt-3 uppercase font-serif">{selectedCrewMember.name}</h1>

            <p className="w-3/5 mt-6 leading-relaxed">{selectedCrewMember.bio}</p>

            <div className="flex space-x-4 justify-center lg:justify-start mt-6">
                <div onClick={()=>setSelectedCrewMember(crews[0])} className="w-3 h-3 rounded-full bg-white cursor-pointer"></div>
                <div onClick={()=>setSelectedCrewMember(crews[1])} className="w-3 h-3 rounded-full bg-white cursor-pointer"></div>
                <div onClick={()=>setSelectedCrewMember(crews[2])} className="w-3 h-3 rounded-full bg-white cursor-pointer"></div>
                <div onClick={()=>setSelectedCrewMember(crews[3])} className="w-3 h-3 rounded-full bg-white cursor-pointer"></div>
             </div>

             

            

        </div>

        <div className="w-1/2 mt-50">
          <img src={selectedCrewMember.images.png} alt="image" className="h-full object-contain"/>
        </div>

        

        </div>

        
      </div>
      

    </>
  )
  
}