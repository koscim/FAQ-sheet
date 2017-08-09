import React from 'react';
// import fontAwewsome from 'react-fontawesome';

const Question = props => {
  let id = props.id
  let question = props.question
  let answer = props.answer
  let handleClick = () => {
    props.setSelected(props.id)
  }
  return (
    <li>
      <i className={props.className} onClick={handleClick} aria-hidden="true"></i>
      <span className="question" onClick={handleClick}>{props.question}</span>
      <p>{props.answer}</p>
    </li>
  )
}

// <i className={this.className} onClick={this.showAnswer} aria-hidden="true"></i>
// class Question extends React.Component {
//   constructor(props) {
//     super(props)
//     this.className = "fa fa-plus-square toggleBoxPlus"
//     this.state = {
//       clicked: false,
//       answer: null
//     }
//     this.showAnswer = this.showAnswer.bind(this)
//   }
//
//   showAnswer(){
//     this.setState({clicked: !this.state.clicked})
//     if(!this.state.clicked){
//       this.setState({answer: this.props.data.answer})
//       this.className = "fa fa-minus-square toggleBoxMinus"
//     } else {
//       this.setState({answer: null})
//       this.className = "fa fa-plus-square toggleBoxPlus"
//     }
//   }
//
//
//   render() {
//     return(
//       <li><i className={this.className} onClick={this.showAnswer} aria-hidden="true"></i>
//       <span className="question">{this.props.data.question}</span>
//         <p>{this.state.answer}</p>
//       </li>
//     )
//   }
// }

export default Question;
