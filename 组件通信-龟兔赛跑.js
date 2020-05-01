{/* 
 重点：父子通信、function、class

 <div id="app"></div>
- 如果你的组件很纯净，就可以用 function。
比如:
function(){
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

- 如果你有自己的内部状态、内部数据，就要用 class 
*/}

// App 就是父组件, App 里面的 Track1 Track2 就是子组件
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      result1: 0,
      result2: 0
    }
    this.t0 = new Date()
  }
  
  success1(){
    console.log('🐇跑完啦')
    this.setState({
      result1: new Date() - this.t0
    })
  }
  success2(x){
    console.log(x)
    console.log('🐢跑完啦')
    this.setState({
      result2: new Date() - this.t0
    })
  }
  
  render(){
    return (
      <div>
        <div class="wrapper">
          <Time1 result={this.state.result1}/>
          <Judge />
          <Time2 result={this.state.result2}/>
        </div>
        
        {/* 这里的success1函数是父组件传的函数，子组件 Track1 在恰当的时候调用这个函数，这就是父子通信 */}
        {/* <Track1 success={this.success1.bind(this)}/> 
        <Track2 success={this.success2.bind(this)}/> */}

        {/* 
        
        Playground 这部分代码就是祖孙通信了. 
        所以祖孙组件如何通信？

        爷爷传给爸爸，爸爸传给孙子
        App 就是爷爷，Playground 就是爸爸，Track1 Track2 就是孙子
        仔细看代码
        */}
        <Playground
          success1 = {this.success1.bind(this)}
          success2 = {this.success2.bind(this)}
        ></Playground>
      </div>
    )
  }
}

function Playground(props){
  let success1 = props.success1
  let success2 = props.success2

  return (
    <div>
      <Track1 success={success1}/> 
      <Track2 success={success2}/> 
    </div>
  )
}

function Time1(props){
  return (
    <div>
      <h2>🐇用时</h2>
      <div>{props.result}</div>
    </div>
  )
}

function Time2(props){
  return (
    <div>
      <h2>🐢用时</h2>
      <div>{props.result}</div>
    </div>
  )
}

// function Judge(){
//   return (
//     <div class="judge">
//       <h4>👨裁判</h4>
//     </div>
//   )
// }

class Track1 extends React.Component{
  constructor(){
    let n = 0
    super()
    this.state = {
      style: {
        transform: `translate(${n}%)`
      }
    }
    let timerId = setInterval(()=>{
      n+=20
      this.setState({
         style: {
           transform: `translate(${n}%)`
         }
      })
      if(n>=100){
        window.clearInterval(timerId)
        this.props.success()  // 上面说的恰当的时候就是这里
      }
    }, 1000)
  }
  
  render(){
    return (
      <div>
        <div class="player" style={this.state.style}>🐇</div>
        <div class="track"></div>
      </div>
    )
  }
}

class Track2 extends React.Component{
  constructor(){
    let n = 0
    super()
    this.state = {
      style: {
        transform: `translate(${n}%)`
      }
    }
    let timerId = setInterval(()=>{
      n+=10
      this.setState({
         style: {
           transform: `translate(${n}%)`
         }
      })
      if(n>=100){
        window.clearInterval(timerId)
        this.props.success('我是小🐢🐢')  // 这里还可以传参，在父组件定义的函数里能取到，见父组件的代码
      }
    }, 1000)
  }
  
  render(){
    return (
      <div>
        <div class="player" style={this.state.style}>🐢</div>
        <div class="track"></div>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('#app'))