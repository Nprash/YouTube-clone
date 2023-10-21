import React from 'react'

const SearchSugest = (props) => {
    const takethis = props.takethis
  return (
    <div className='w-60 h-fit p-2 border rounded-lg border-red-300 -z-0 shadow-lg'>
 <ul className='flex flex-wrap justify-center items-center'>
     <li>{takethis[0]}</li>
     <li>{takethis[1]}</li>
     <li>{takethis[2]}</li>
     <li>{takethis[3]}</li>
     <li>{takethis[4]}</li>
     <li>{takethis[5]}</li>
     <li>{takethis[6]}</li>
     <li>{takethis[7]}</li>
     <li>{takethis[8]}</li>
     <li>{takethis[9]}</li>
    
 </ul>
</div>
  )
}

export default SearchSugest
