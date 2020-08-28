import React from 'react';

import '../Login/Login.css';


class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
      chats: [
        {
          phone: "07033680280",
          message: "Hello",
          username: "John",
          timeStamp: Date.now()
        }
      ]
    }
  }

  submitChat = (event) => {
    event.preventDefault();
    const newMessage = {
      phone: "07033680280",
      message: this.state.message,
      username: "John",
      timeStamp: Date.now()
    }

    const chat = [...this.state.chats]
    chat.push(newMessage)
    this.setState({ chats: chat })
  }


  onInputChange = (event) => {
    this.setState({message: event.target.value})
  }

  render() {
    return (
      <div className='.login-form'>
        <div className='mt6'>
          {
            this.state.chats.map((item, index) => {
              return (
                <div key={index} className='bg-white m5'>
                  <p>{ item.phone }</p>
                  <p>{item.username}</p>
                  <p>{item.timeStamp}</p>
                  <p>{item.message}</p>
                </div>
              )
            })
          }
        </div>
        <div className='mt6'>
          <form onSubmit={this.submitChat}>
            <input type='text' placeholder='type your message' onChange={this.onInputChange} />
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Chat;