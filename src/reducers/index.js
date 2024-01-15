// how to perform action
const initialState = 0;

const chnageTheNumber = (state = initialState, action) =>{
    switch ( action.type){
        case "INCREMENT": return stete + 1;
        case "DECREMENT": return state - 1;
    }
}
export default chnageTheNumber;