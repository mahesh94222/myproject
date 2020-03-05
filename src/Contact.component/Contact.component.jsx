import React, { Component } from 'react';
import axios from 'axios';


class Contact extends Component {
  constructor(props) {
    super(props)

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserPhone = this.onChangeUserPhone.bind(this);
    this.onChangeUserMessage = this.onChangeUserMessage.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      name: '',
      email: '',
      phoneno: '',
      message: '',
    }
  }

  onChangeUserName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeUserEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeUserPhone(e) {
    this.setState({ phoneno: e.target.value })
  }

  onChangeUserMessage(e) {
    this.setState({ message: e.target.value })
  }


  handleClick() {

    const emailObject = {
      name: this.state.name,
      email: this.state.email,
      phoneno: this.state.phoneno,
      message: this.state.message
    };

    axios.post('http://127.0.0.1:8080/send', emailObject)
      .then((res) => {
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      });

    this.setState({ name: '', email: '', phoneno: '', message: '' })

    //console.log("click");
  }

  render() {
    return (
      <section className="my-5 py-5">
        <div className="container">
          <div className="well well-sm">
            <h3>
              <strong className=" text-center">Our Location</strong>
            </h3>
          </div>

          <div className="row">
            <div className="col-md-7">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1oryS2JEslZ2ByybZzh31Q81tVPSZcUaO"
                style={{
                  border: "0",
                  width: "100%",
                  height: "315px",
                  frameborder: "0"
                }}
                allowFullscreen
              />
            </div>

            <div className="col-md-4 ">
              <h4>
                <strong>Contact Us</strong>
              </h4>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={this.state.name} onChange={this.onChangeUserName} />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={this.state.email} onChange={this.onChangeUserEmail}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone"
                    value={this.state.phoneno} onChange={this.onChangeUserPhone}
                  />
                </div>
                <textarea
                  className="form-control"
                  cols="30"
                  rows="3"
                  placeholder="Message"
                  value={this.state.message} onChange={this.onChangeUserMessage}
                />
                <br/>
                <button value="Send" className="btn btn-warning btn-lg " onClick={this.handleClick}>Send</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;