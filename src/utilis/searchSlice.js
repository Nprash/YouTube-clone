import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({

    name : "search",
    initialState: {

    },
    reducers:{
        cacheResults :(state, action)=>{
            //TO catch the search keyword & results in below format
            //{"ip":["ip","ipho","ophone","iphone14","iphone15"]}
// compare above in to below line
            state = Object.assign(state, action.payload)


        },
    },

});


export const {cacheResults }  = searchSlice.actions
export default searchSlice.reducer;





// cache:
// time complexity to search in an arry = 0(n) /bigo of n
// time complexity to search in an object = 0(1)
//[i,ip,iph,iphone] will use array method like array.indx() to search in an arry
//{ i:
//  ip:
//  iph
//  ophone
//}
// takes 0(1) time to search in an object

// we can use map