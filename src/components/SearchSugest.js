import React from 'react'

const SearchSugest = (props) => {
    const takethis = props.takethis
  return (
    <div className='w-60 relative items-center p-2 border rounded-lg border-red-300 -z-0 shadow-lg'>
 <ul className='flex justify-center items-center '>

     <li>{takethis}</li>

    
 </ul>
</div>
  )
}

export default SearchSugest
