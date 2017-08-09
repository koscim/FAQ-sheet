import React from 'react';
import Question from './Question'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.className = "fa fa-plus-square toggleBoxPlus"
    this.state = {
      id: null
    }
    // this.showAnswer = this.showAnswer.bind(this)
    this.changeState = this.changeState.bind(this)
  }
  changeState(id){
    if(id != this.state.id){
      this.setState({id: id})
    } else {
      this.setState({id: null})
    }
  };

  // showAnswer(){
  //   this.setState({clicked: !this.state.clicked})
  //   if(!this.state.clicked){
  //     this.setState({answer: this.props.data.answer})
  //     this.className = "fa fa-minus-square toggleBoxMinus"
  //   } else {
  //     this.setState({answer: null})
  //     this.className = "fa fa-plus-square toggleBoxPlus"
  //   }
  // }
  render() {
    let questions = this.props.data.map(item => {
      let answer;
      let className;
      if (this.state.id === item.id){
        className = "fa fa-minus-square toggleBoxMinus";
        answer = item.answer;
        // this.setState({id:null})
      } else {
        className = "fa fa-plus-square toggleBoxPlus";
        answer = null;
      }
        // this.setState({clicked: !this.state.clicked})
        // if(!this.state.clicked){
        //   this.setState({answer: this.props.data.answer})
        //   this.className = "fa fa-minus-square toggleBoxMinus"
        // } else {
        //   this.setState({answer: null})
        //   this.className = "fa fa-plus-square toggleBoxPlus"
        // }
      return(
        <Question
          key={item.id}
          id={item.id}
          question={item.question}
          className ={className}
          answer={answer}
          setSelected={this.changeState}
        />
      )
    });
    let headerText = "We're here to help"
    return(
      <div className="row">
      <h1>{headerText}</h1>
        <ul>
          {questions}
        </ul>
      </div>
    )
  }
}

export default App;

// return(
//   <div>
//   <h1>We Are Here To Help</h1>
//     <ul>
//       <li><i className={this.className} onClick={this.showAnswer} aria-hidden="true"></i>
//       <span className="question">{this.props.data.question}</span>
//         <p>{this.state.answer}</p>
//       </li>
//     </ul>
//   </div>
// )
