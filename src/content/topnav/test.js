import React from 'react';
export default class LoginControl extends React.Component{
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.handleSomething=this.handleSomething.bind(this);
    this.state={
      isLoginIn:false
    }
  }
  handleClick(){
   this.setState((prevState)=>({isLoginIn : !prevState.isLoginIn})); 
    console.log('click');
  }
  handleSomething(){
    console.log('something');
  }
  render(){
    return (<div>
      <Greeting isLoginIn={this.state.isLoginIn} />
      <LoginButton  isLoginIn={this.state.isLoginIn} onClick={this.handleClick} />
    </div>);
  } 
}


class UserGreeting extends React.Component{
  render(){
    return <h1>Welcome back</h1>;
  }
}

class GuestGreeting extends React.Component{
  render(){
    return <h1>Please sign up</h1>;
  }
}

class Greeting extends React.Component{
  render(){
    const isLoginIn=this.props.isLoginIn;
    if(isLoginIn){
      return <UserGreeting />
    }
    return <GuestGreeting />;
  }
}

class LoginInButton extends React.Component{
  render(){
    return <button onClick={this.props.onClick}>login in</button>;
  }
}
class LoginOutButton extends React.Component{
    render(){
      return <button onClick={this.props.onClick}>login out</button>;
    }
 }

class LoginButton extends React.Component{
  render(){
    let isLoginIn=this.props.isLoginIn;
     if(isLoginIn){
      return <LoginOutButton onClick={this.props.onClick}/>
    } 
    return < LoginInButton onClick={this.props.onClick}/>;
  }
}
