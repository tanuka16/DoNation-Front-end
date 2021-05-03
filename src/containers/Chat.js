import React, {Component} from 'react';

import ChatBot from 'react-simple-chatbot';



const steps = [
  {
    id:'1',
    message: 'Hey there 👋, thanks for visiting our website. What is your name?',
    trigger: '2'
  },
  {
    id: '2',
    user: true,
    trigger: '3'
  },
  {
    id:'3',
    message: 'Hi {previousValue}, nice to meet you! We help nonprofits raise and save more money online every day.',
    trigger: '4'
  },
  {
    id:'4',
    message: 'How can I help you today?',
    trigger:'5',
    delay: 1750,
  },
  {
    id: '5',
    options: [
          { value: 1, label: 'Want to know how to donate money through our website?', trigger: '6' },
          { value: 2, label: 'Why should I donate to charities?', trigger: '10' },
          { value: 3, label: 'Would you like to watch a fun video?', trigger: '8' },
          { value: 4, label: 'Who made this app?', trigger: '7' },

        ],
  },
  {
    id:'6',
    message: "To give donation to a charity organization, kindly signup or login. Find the organization you would like to support and place the amount you would like to donate.",
    trigger: '9'
  },
  {
    id: '7',
    message:'💃🏻👸🏻 TANUKA DAS👸🏻💃🏻',
    trigger: '9',
    delay: 1000
  },
  {
    id: '8',
    component: <CharityLink />,
    trigger: '9'
  },
  {
    id: '9',
    message: "How else can I help you?",
    trigger:'5',
    delay: 10000
  },
  {
    id: '10',
    message: "Google it!!🤓",
    delay: 1000,
    trigger: '9'

  }



]

function CharityLink(props) {
  return(<iframe width="560" height="315" src="https://www.youtube.com/embed/xpB9Bvd42hk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>)

}


class Chat extends Component{
  state={
    showChat: false
  }

  handleClick=()=>{
    this.setState({showChat: !this.state.showChat})           //! makes the statement toggle; whatever it evalutes to, gets its opposite value
  }

  render(){
    return(
      <div className='icon-bar' >
        {this.state.showChat && <ChatBot steps={steps}/>}
        <button onClick={this.handleClick}>
          <img src="https://img.icons8.com/nolan/64/000000/technical-support.png"/>
        </button>
      </div>
    );
  }
}

export default Chat;
