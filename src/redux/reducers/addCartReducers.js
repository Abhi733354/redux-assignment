const initialState = 0;

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "AddCart" : return state + action.payload;
        case "DecCart" : return state - action.payload;
        case "RemoveCart" : return state - action.payliad;
        // case "AddCart" : return {...state , AddCart:[]}
        default: return state
    }         

}
export default reducer;