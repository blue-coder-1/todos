import React, {Component} from 'react';
import './todo.css';
import 'tachyons';


class Todo extends Component{
	constructor(props){
		super(props);

		this.state={
			userInput:'',
			list: [],
			count: 0
		}
	}

	changeUserInput(input){
        this.setState({
        	userInput: input
        });
	}

	addToList(input){
		let listArray = this.state.list;

		listArray.push(input);

		this.setState({
			list: listArray,
			userInput: ''
		})
	}
	 removeItem(index) {
  const list = this.state.list;

  list.splice(index, 1);
  this.setState({ list });
}

	render(){
		return (
			<div className='tc'>
			<h1 className='f3 f-headline-l f1-m ttu tracked-tight mt0 green'>Todos-List App</h1>
			<h1 className='f5 f3-m f1-l ttu tracked mt0 purple'>Add List Items</h1>
			<input title="enter max 54 characters"
			onChange={ (e)=>this.changeUserInput(e.target.value)}
			value={this.state.userInput}
			className="input-reset ba b--gold-20 pa2 mb2 db w-90"
			onKeyPress={(e)=>{
                if(e.which === 13){
				this.addToList(this.state.userInput)}}
				} 
			type="text"
			/>
			<a className="f4 fw7 dib pa2 no-underline bg-animate bg-red hover-bg-light-blue black" onClick={
				()=> this.addToList(this.state.userInput)
			} href="#">Add Todo</a>
			<ul>{
        this.state.list.map((text, i) => {
        	if(text!==''&&text.length<=54&&text!==' '){
          return (
            <li onClick={() => this.removeItem(i)} key={i}>
              {text}
            </li>
          );}}
        )}
        <div className='tc'>
        <p className='f6 f3-m f3-l'>The list currently has <span className='dark-red'>{this.state.list.length}</span> items</p>
        </div>
      </ul>
			</div>
		);
	}
}

export default Todo;