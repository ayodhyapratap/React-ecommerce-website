import React from 'react'
import Section2nd_2_data from './Section2nd_2_data'

function Section2nd_3() {
  return (
    <div className='container mx-auto'>

        <div className="flex relative justify-center divide-x divide-solid items-center">
            
            {/* Secod Section start */}
            <div className="md:h-[100vh]  overflow-x-hidden p-1  my-2 container grid grid-flow-row grid-cols-2 md:grid-cols-3 md:gap-2 md:overflow-scroll">
                <Section2nd_2_data />
                <Section2nd_2_data />
                <Section2nd_2_data />
                <Section2nd_2_data />
                <Section2nd_2_data />
                <Section2nd_2_data />
                
            </div>
        </div>



    </div>
  )
}

export default Section2nd_3