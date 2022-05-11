const intialState={kurti:[], shirt:[], dress:[]}

export const addKurtiReducer=(state=intialState, action)=>{
    // console.log("action.payload:",action.payload)
    switch(action.type){
       case "ADD-KURTI": return {...state, kurti: [...action.payload]};

       case "ADD-SHIRT": return {...state, shirt: [...action.payload]};

       case "ADD-Girl-Dress": return {...state, dress: [...action.payload]};

       default: return state
    }
}