export default function HomePage(){
    return (
    <>
      <div className="h-screen bg-cover bg center">
        <div className='absolute -z-10 inset-0'>
          <img src='background-home-desktop.jpg' className='object-cover h-full w-full' />
        </div>
        <div>

          {/* nav was here */}

          <div className="relative z-20 flex flex-col md:flex-row justify-between items-center px-10 md:px-24 pt-32 md:pt-40 space-y-10 md:space-y-0 top-40">
            {/* <!-- Left Text --> */}
            <div className="max-w-xl text-center md:text-left">
              <p className="text-sm tracking-widest text-white/70 mb-4">SO, YOU WANT TO TRAVEL TO</p>
              <h1 className="text-9xl md:text-9xl font-serif font-bold mb-6 text-white">SPACE</h1>
              <p className="text-white/70 leading-relaxed">
                Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not 
                hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
              </p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="w-48 h-48 bg-white text-black rounded-full flex items-center justify-center text-xl font-serif tracking-wide hover:scale-105 transition transform duration-300 shadow-xl ml-220">
              EXPLORE
            </div>
          </div>
        </div>
      </div>
    </>
  )
}