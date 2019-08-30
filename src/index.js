import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers} from 'redux'

const App = () => {

    return (
        <div>app</div>
    )
}

const calculatorReducer = (currentValue = 0, action) => {
    if (action.type === 'ADD_ONE') {
        currentValue = currentValue + 1;
        return currentValue
    }
    if (action.type === 'SUBTRACT_ONE') {
        currentValue = currentValue - 1;
        return currentValue
    }
    if (action.type === 'ADD_SOMETHING') {
        currentValue = currentValue + action.payload;
        return currentValue
    }

    return currentValue
}

//This reducer is an example of something we should NEVER do
//We are mutating an array instead of creating a new one.
//Look at the history reducer present in the project: react-with-redux
const history = (historyList = [], action) => {
    if (action.type === 'ADD_ONE') {
        historyList.push('adding one')
        return historyList
    }
    if (action.type === 'SUBTRACT_ONE') {
        historyList.push('subtracting one')
        return historyList
    }
    if (action.type === 'ADD_SOMETHING') {
        historyList.push('adding any number')
        return historyList
    }
    if (action.type === 'CLEAR_HISTORY') {
        historyList = []
        return historyList
    }

    return historyList
}

const clearHistoryActionCreator = () => {
    return {
        type: 'CLEAR_HISTORY'
    }
}

const addActionCreator = () => {
    return {
        type: 'ADD_ONE'
    }
}

const subtractActionCreator = () => {
    return {
        type: 'SUBTRACT_ONE'
    }
}

const addAnyActionCreator = (value) => {
    return {
        type: 'ADD_SOMETHING',
        payload: value
    }
}

//const store = createStore(combineReducers({calculatorReducer: calculatorReducer, historyReducer: history}))
const store = createStore(combineReducers({calculatorReducer: calculatorReducer, histoyReducer: history}))

var myAction = addAnyActionCreator(12)
var myAction2 = subtractActionCreator()
var myAction3 = subtractActionCreator()

console.log("min action 3")
console.log(myAction3)

store.dispatch(addAnyActionCreator(17))
store.dispatch(addAnyActionCreator(400))
store.dispatch(clearHistoryActionCreator())
store.dispatch(addAnyActionCreator(12))

//store.dispatch({type: 'ADD_ONE', payload: ''})

//store.dispatch({type: 'SUBTRACT_ONE', payload: ''})

//store.dispatch({type: 'SUBTRACT_ONE', payload: ''})

//store.dispatch({type: 'SUBTRACT_ONE', payload: ''})

console.log(store.getState())



ReactDOM.render(<App />, document.getElementById('root'))