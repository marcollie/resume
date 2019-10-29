import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <p className="mail">Email: marcollie@daum.net</p>
        <p className="git">
          Github: <a href="https://github.com/marcollie" target="_blank" rel="noopener noreferrer">
          https://github.com/marcollie</a>
        </p>
      </div>
    )
  }
}

export default Contact;