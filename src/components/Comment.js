import React from 'react'
import CommentsAction from './CommentsAction'

const Comment = ({data}) => {
    const {name, text} = data
  return (
  <>
    <div className='w-fit flex items-start shadow-sm p-2 m-2 bg-yellow-50 rounded-lg'>
        <div className='h-9 '>
            <img className='w-8 cursor-pointer h-8 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ66Z_VbQdf8hb5Hr7gAwBpY_B2T7mBFH5qwg&usqp=CAU" alt="user-icon" />
        </div>
        <div className='px-3'>
            <p>{name}</p>
            <p>{text}</p>
    <CommentsAction/>
        </div>

    </div>
    {/* Handle rendering of replies */}
    {/* <div>
      {replies && replies.length > 0 && (
        <div className='ml-5'>
          {replies.map((reply, index) => {
            return(
              <div className='bg-red-400 ml-2 rounded-lg p-2 m-2' key={index}>
                <Comment  data={reply} />
              </div>
            )}
          )}
        </div>
      )}
    </div> */}

  </>
  )
}

export default Comment
