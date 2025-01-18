import React from 'react'
import India from '@react-map/india'

const Map = () => {
  return (
      <div className=''>
          <India strokeColor='white' mapColor='gray' size={500} hoverColor="orange" type='select-single' />
    </div>
  )
}

export default Map
