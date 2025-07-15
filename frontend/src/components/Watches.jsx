import React from 'react'
import WatchCard from './WatchCard'

const names = ["w-1", "w-2", "w-3", "w-4"];
const text = ["For Fashion" , "For Adventure" , "For Lifestyle" , "For Productivity"]
function Watches() {
  return (
    <div className='flex flex-col lg:flex-row md:flex-col justify-between '>

      {/* Main Image Section */}
        <div className="m-3 flex-shrink-0">
          <img src="./img/shaheen.webp" alt="img" className='h-[100vh] w-auto sm:w-auto sm:max-w-md md:max-w-xl rounded-lg'/>
        </div>

      {/* Watch Cards Section */}
        <div className="flex flex-wrap gap-4 gap-x-8 gap-y-8 justify-center p-5">
          {names.map((name, index)=>{
            return (
              <WatchCard
               path={`./img/${name}.webp`}
               text={text[index]}
              />
            )
          })}
        </div>
    </div>
  )
}

export default Watches