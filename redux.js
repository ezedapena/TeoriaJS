// ACTIONS === What to do
// REDUCERS === How to do 
// STORE == Keep data in single place



//ACTION
const addTaskAction = {
    type: "ADD_TASK",
    task: "This is a new task!" // payload
}

const removeTaskAction = {
    type: "REMOVE_TASK",
    id: 1 // payload
}

// ACTION TYPES
export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

// should be in redcer.js for example
function reducer(state = [], action) {
    //for updating store
    // Reducer take the current state as argument and return the updated state
    // NOTHING ELSE

    //action parameter:
    //tells the reducer which task they have to perform.
    if(action.type === "ADD_TASK") {
        return [
            ...state,
            {
                id: "ShouldBeUniqueID",
                task: action.payload.task,
                completed: false
            }
        ];
    }

    if(action.type === "REMOVE_TASK") {
        return state.filter(task => task.id !== action.payload.id);
    }
}

//STORE

//import { createStore } from 'redux';

// rootReducer must be the wrapper of all our reducer
// const store = createStore(rootReducer);
// export default store;



// STRUCTURE EXAMPLE
/*
src
    store
        -store.js
        tasks ( slice )
            -action.js
            -reducer.js
            -actionTypes.js
        employees ( slice )
            -action.js
            -reducer.js
            -actionTypes.js
*/


// THUNKS is for async actions, redux-toolkit includes 
export const fetchTodo = () => async (dispatch, getState) => {
    // Perform async task here
    //dispatch(addTask(task.title));
}

// MIDDLEWARES
// Run after dispatch and before it reach de reducer
