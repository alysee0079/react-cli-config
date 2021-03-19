import React from 'react'

class ListOfWords extends React.PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps === this.props)
  //   return true
  // }
  render() {
    return <div>{this.props.words.name}</div>
  }
}

class WordAdder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      val: 0,
      words: {
        name: '发动机是分开几点开始'
      }
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 })
  }
  componentDidMount() {
    this.setState({ val: this.state.val + 1 })
    console.log(this.state.val) // 第1次输出
    this.setState({ val: this.state.val + 1 })
    console.log(this.state.val) // 第2次输出
    setTimeout(() => {
      this.setState({ val: this.state.val + 1 })
      console.log(this.state.val) // 第3次输出
      this.setState({ val: this.state.val + 1 })
      console.log(this.state.val) // 第4次输出
    }, 0)
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>btn</button>
        <ListOfWords words={this.state.words} />
      </div>
    )
  }
}
export default WordAdder
