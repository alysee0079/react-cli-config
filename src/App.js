import React from 'react'
import axios from 'axios'

// class Child extends React.Component {
//   componentDidMount() {
//     document.querySelector('#btn').addEventListener('click', e => {
//       console.log(e)
//     })
//   }
//   handleBtn(e) {
//     e.preventDefault()
//     console.log(e)
//   }
//   render() {
//     return (
//       <div id="btn" onClick={this.handleBtn} style={{ width: 100, height: 100, background: '#ccc' }}>
//         22
//       </div>
//     )
//   }
// }

class App extends React.Component {
  state = {
    isShow: false
  }
  handleCl = () => {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  componentDidMount() {
    // axios.get('/data/cityinfo/101010100.html')
    // document.body.addEventListener('click', e => {
    //   document.querySelector('#btn').addEventListener('click', e => {
    //     e.stopPropagation()
    //   })
    // })
  }
  componentDidUpdate() {
    console.log(this)
  }
  render() {
    return (
      <div style={{ color: 'red' }}>
        font
        <button onClick={this.handleCl}>btn</button>
      </div>
    )
  }
}
export default App
