import React from 'react'
import Comment from "./Comment"

const commentsData = [
  {
    name: "prasanth",
    text: "lorem ipsum dollar amet",
    replies: [],
  },
  {
    name: "amruth",
    text: "lorem ipsum dollar amet",
    replies: [ 
      {
        name: "gopi",
        text: "lorem ipsum dollar amet",
        replies: [],
      },
      {
        name: "ramu",
        text: "lorem ipsum dollar amet",
        replies: [ 
          {
            name: "prasanth",
            text: "lorem ipsum dollar amet",
            replies: [
              {
                name: "lokes",
                text: "lorem ipsum dollar amet",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "lokes",
        text: "lorem ipsum dollar amet",
        replies: [],
      },
    ],
  },
  {
    name: "rahul",
    text: "lorem ipsum dollar amet",
    replies: [
      {
        name: "lokes",
        text: "lorem ipsum dollar amet",
        replies: [
          {
            name: "ramesh",
            text: "lorem ipsum dollar amet",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "ramesh",
    text: "lorem ipsum dollar amet",
    replies: [],
  },
];



const CommentsList = ({maincomments}) =>{
  return ( 
  maincomments.map((comment,index)=> {
  return(
    <div key={index}>
      <Comment data={comment}/>
      <div className='pl-5 border-l-2 border-l-green-300 ml-5'>
      <CommentsList maincomments={comment.replies} />
      {/* replies are rendered in this list with the same component */}
      </div>
    </div>
  )})

)};
// we are rendering comment comp along with replies in commentsList component, 
//mapping each comment to main comment
//above is recursion for mapping subcomments/replies to the main comments
const CommentsContainer = () => {
  return (
    <div className='w-full p-2 m-2 bg-pink-50 rounded-lg'>
      <h1 className='text-2xl font-bold'> Comments:</h1>
      <CommentsList maincomments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;
