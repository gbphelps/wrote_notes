import React from 'react';

export default class TextEditor extends React.Component{
  constructor(props){
    super(props);
    this.state=props.note;
    this.handleSubmit=this.handleSubmit.bind(this);
    console.log(props.note);
  }

  componentDidMount(){
    this.props.onMount();
  }

  update(field){
    return e => {
      this.setState({[field]: e.target.value})
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state);
  }

  render(){
    return(
      <div className='text-editor-pane'>

        <div className='text-editor-header'>
        <button onClick={this.handleSubmit}>Submit</button>
        </div>

        <div className='text-editor-content'>
          <form className='text-editor-field' onSubmit={this.handleSubmit}>
            <input
              type='text'
              className='editor-note-title'
              value={this.state.title}
              onChange={this.update('title')}/>
            <textarea
              className='editor-note-body'
              onChange={this.update('body')}
              value={this.state.body}/>
          </form>
        </div>
      </div>
    );
  }
}
