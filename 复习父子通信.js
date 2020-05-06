class App extends React.Component {
  constructor(){
    super()
    this.state = {
      message: 'hello'
    }
  }
  
  changeMes(){
    console.log('111')
    this.setState({
      message: '555'
    })
  }
  
  render(){
    return (
      <div>
        <p>{this.state.message}</p>
        <Son xxx="hey you" change={this.changeMes.bind(this)}/>
      </div>
    )
  }
}

class Son extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <p>{this.props.xxx}</p>
        <button onClick={this.props.change}>sendToFath</button>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
)