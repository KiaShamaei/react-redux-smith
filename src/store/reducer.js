const initailState = {
    age: 20,
    history : []
}

export const reducer = (state = initailState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case "ADD": return {
            ...state,
            age: state.age + action.value ,
            history :  state.history.concat({
                id : Math.random() , 
                age : state.age + action.value
            })

        }
        case "SUB": return {
            ...state,
            age: state.age - action.value,
            history :  state.history.concat({
                id : Math.random() , 
                age : state.age - action.value
            })

        }
        case "DEL" :  return{
            ...state , 
            history : state.history.filter(el => el.id !== action.key)
        }
        default: return newState
    }
}