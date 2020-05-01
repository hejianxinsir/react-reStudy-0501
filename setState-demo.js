
{/* HTML 
  <div id="app">
  </div> 

  重点： 改变数据只能用 setState 方法；如果你写两个一样的 setState 方法
        只会更新一次，因为它会合并。

        如果一定要写两个且保证两个更新都有效，那么就在 setState 里面写函数。如下代码。
*/}


class Box1 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      number: 0
    }
  }
  
  add(){
    this.setState({
      number: this.state.number + 1
    })
  }
  minus(){
    this.setState({
      number: this.state.number - 1
    })
  }
  
  render(){
    return (
      <div className="red">
        <p>{this.state.number}</p>
        <p>{this.props.name}</p>
        <button onClick={this.add.bind(this)}>+</button>
        <button onClick={this.minus.bind(this)}>-</button>
      </div>
    )
  }
}

class Box2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      number: 0
    }
  }
  add(){
//     this.setState({
//       number: this.state.number + 1
//     })
    this.setState((state)=>{
      return { number: state.number + 1 }
    })
    
    this.setState((state)=>{
      return {number: state.number + 1}
    })
  }
  minus(){
    this.setState({
      number: this.state.number - 1
    })
  }
  
  render(){
    return (
      <div>
        <p>{this.state.number}</p>
        <p>{this.props.name}</p>
        <button onClick={this.add.bind(this)}>+</button>
        <button onClick={this.minus.bind(this)}>-</button>
      </div>
    )
  }
}

function App(props){
  return (
    <div>
      <Box1 name="frank"/>
      <Box2 name="john"/>
    </div>
  )
}

render()

function render(){
  ReactDOM.render(
    <App />,
    document.querySelector('#app')
  )
}