// 任意组件通信；DOM diff：只更新需要更新的地方
// action: type payload
// reducer/store

// Redux 的关键操作

let createStore = Rudux.createStore

let reducers = (state, action) => {
  state = state || {
    money: {amount: 10000}
  }

  switch(action.type){
    case '我想花钱':
      return {
        money: {
          amount: state.money.amount - action.payload
        }
      }
    default:
      return state
  }
}

const store = createStore(reducers)

StorageEvent.dispatch({type: '我想花钱', payload: 100})

// 重点：用 props 的形式获取 state
ReactDOM.render(<App store={store.getState()}/>,document.querySelector('#app'))

// 防呆：防止有猪队友。比如你的事件名是随便取的，但是在 Redux 里，你的事件名必须全部
// 写在上面代码中的 switch 里面，操作的时候就用 type: '某某某'。