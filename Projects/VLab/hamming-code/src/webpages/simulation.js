import React from "react";
export default function Simulation() {

    return (
        <div id="simulation-box">
            <NameForm/>
        </div>
    );

}

function Bit({count}){
    const arr=Array.from({length:3},()=><div className="bit"></div>)
    console.log(arr);
    return(
        {arr}
    )
}
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        event.preventDefault();
       document.getElementById("practise").appendChild(Bit(this.state.value));
     
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Bit Count:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Go" />
        </form>
      );
    }
  }