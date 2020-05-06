<script src="https://cdn.bootcdn.net/ajax/libs/redux/4.0.5/redux.min.js"></script>

{/* <div id="app"></div> */}

function add1(){
  store.dispatch({type: 'add', payload: 1})
}
function minus1(){
  store.dispatch({type: 'add', payload: -1})
}
function addif(){
  if(store.getState() % 2 === 1){
    store.dispatch({type: 'add', payload: 1})
  }
}
function addafter(){
  setTimeout(function(){
    store.dispatch({type: 'add', payload: 1})
  },1000)
}
function render(store){
  var app = document.querySelector('#app')
  app.innerHTML = `
    <div>你点击了<span id="value">${store.getState()}</span>次</div>
    <button id="add1" onclick="add1()">+1</button>
    <button id="minus1" onclick="minus1()">-1</button>
    <button id="add1ifOdd" onclick="addif()">单数则+1</button>
    <button id="add1after1sec" onclick="addafter()">一秒后+1</button>
  `
}
function stateChanger(state, action){
  if(state === undefined){
    return 1
  }else{
    if(action.type === 'add'){
      var newState = state + action.payload
      return newState
    }else{
      return state
    }
  }
}
var store = Redux.createStore(stateChanger)
render(store)
store.subscribe(()=>{
  render(store)
})