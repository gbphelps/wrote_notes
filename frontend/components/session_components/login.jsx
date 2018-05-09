import React from 'react';

export default class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      identifier:'',
      password:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state);
  }


  listErrors(){
    return this.props.errors.map((error,i) => <li key={i}>{error}</li>);
  }

  render(){
    return(
      <div>
        <img className='elephant-icon'/>
        <h1>Sign In</h1>

        <form onSubmit={this.handleSubmit} className='sign-in'>

          <button>Demo User</button>

          <div className='divider'>
            <div className='line'></div>
            or
            <div className='line'></div>
          </div>

          <input
            type='text'
            placeholder='Email or Username'
            value={this.state.identifier}
            onChange={this.update('identifier')}/>
          <input
            type='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.update('password')}/>
          <button className='accent'>Log In</button>
          {this.listErrors()}
        </form>
      </div>
    );
  }
}
