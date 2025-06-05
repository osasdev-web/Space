import { useState } from 'react'
import bg from '../assets/destination/background-destination-desktop.jpg'
import moon from '../assets/destination/image-moon.png'
import data from '../data.json'


export default function Destination(){

  // logic for this components goes here

  // load all the destinations into this state
  const [destinations, setDestinations] = useState(data.destinations)

  // listing and waits for the selected destination to change
  const [selectedDestination, setSelectedDestination] = useState(destinations[0])


  const handleDestination = (destination) => {
    if (destination === "moon") {
      setSelectedDestination(destinations[0])

    } else if (destination === "mars") {
      setSelectedDestination(destinations[1])

    } else if (destination === "europa") {
      setSelectedDestination(destinations[2])

    } else if (destination === "titan") {
      setSelectedDestination(destinations[3])
    }

  }



  return(
    <>
        <div className="w-full bg-cover bg center">
          <div className='absolute -z-10 inset-0'>
             <img src={bg} className='object-cover h-full w-full' />
          </div>

          <div className='w-full pt-40 px-32'>
            <h2> <span className='text-gray-700 font-semibold pr-4'>01</span> PICK YOUR DESTINATION</h2>
          </div>

          <div className='w-full flex justify-between px-32 mt-10'>
            <div className='w-1/2'>
                <img src={selectedDestination.images.png} alt='image of moon' className='w-2/3' />
            </div>

            <div className='w-1/2'>
               <div className=' border-gray-400 w-1/2'>
                  <ul className='flex flex-row gap-10'>
                    <li onClick={()=>handleDestination('moon')} className="hover:border-b-white py-2 hover:border-b-2 cursor-pointer">MOON</li>
                    <li onClick={()=>handleDestination('mars')} className="text-gray-500 hover:border-b-white py-2 hover:border-b-2 cursor-pointer">MARS</li>
                    <li onClick={()=>handleDestination('europa')} className="text-gray-500 hover:border-b-white py-2 hover:border-b-2 cursor-pointer">EUROPA</li>
                    <li onClick={()=>handleDestination('titan')} className="text-gray-500 hover:border-b-white py-2 hover:border-b-2 cursor-pointer">TITAN</li>
                  </ul>
               </div>

               <h1 className='text-6xl font-serif font-light mb-6 mt-6 uppercase'>

                {selectedDestination.name}

                </h1>

               <p className='text-gray-400 text-base leading-relaxed max-w-md mb-10'>
                     {selectedDestination.description}
                
               </p>

               <div className="flex gap-20 border-t border-gray-500 pt-6 text-white text-sm tracking-widest uppercase">
                <div>
                <p className="text-gray-400 mb-2">Avg. Distance</p>
                <p className="text-2xl">{selectedDestination.distance}</p>
              </div>

              <div>
                <p className="text-gray-400 mb-2">Est. Travel Time</p>
                <p className="text-2xl">{selectedDestination.travel}</p>
              </div>

               </div>
            </div>
          </div>
        </div>

    </>
  )
}