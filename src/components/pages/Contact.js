import React from "react";
import PropTypes from "prop-types";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      linkColor: { r: 25, g: 161, b: 185 },
      feedback: "",
      userName: "",
      userEmail: "",
      userMessage: "",
      formSubmitted: false
    };
  }

  handleChange = event => {
    this.setState({
      feedback: event.target.value
    });
  };

  handleChangeName = event => {
    this.setState({
      userName: event.target.value
    });
  };

  handleChangeEmail = event => {
    this.setState({
      userEmail: event.target.value
    });
  };

  handleChangeMessage = event => {
    this.setState({
      userMessage: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (
      this.state.userName != "" ||
      this.state.userEmail != "" ||
      this.state.userMessage != ""
    ) {
      this.sendEmail(
        "template_C5KfwxEI",
        this.state.userName,
        this.state.userEmail,
        this.state.userMessage
      );

      this.setState({
        formSubmitted: true
      });
    }
  };

  sendEmail = (templateId, senderName, senderEmail, senderMessage) => {
    window.emailjs
      .send("gmail", templateId, {
        reply_to: senderEmail,
        from_name: senderName,
        to_name: "jonjonclark@gmail.com",
        message_html:
          "<h1>New Message from Your Website</h1><p>" + senderMessage + "</p>"
      })

      .then(res => {
        this.setState({
          formEmailSent: true
        });
      })

      .catch(err => console.error("Failed to send feedback. Error: ", err));
  };

  render() {
    return (
      <div className="contactForm" style={{ alignContent: "centre" }}>
        <h1>Contact</h1>
        <p>
          Contact me @{" "}
          <a
            href="mailto:jonjonclark@gmail.com"
            style={{
              textDecoration: "none",
              color:
                "rgb(" +
                this.state.linkColor.r +
                "," +
                this.state.linkColor.g +
                "," +
                this.state.linkColor.b +
                ")"
            }}
          >
            jonjonclark@gmail.com
          </a>
        </p>
        {window.innerWidth >= 700 ? (
          this.state.formSubmitted === true ? (
            <h4>
              Thanks for the message, I'll respond when I next check my mail
            </h4>
          ) : (
            <div>
              <form
                className="feedback-form"
                onSubmit={this.handleSubmit}
                style={{ textAlign: "left" }}
              >
                <h3>Send me a message:</h3>
                <input
                  className="text-input"
                  id="name-entry"
                  name="name"
                  onChange={this.handleChangeName}
                  placeholder="Name"
                  required
                  value={this.state.userName}
                ></input>
                <input
                  className="text-input"
                  id="email-entry"
                  name="email"
                  type="email"
                  onChange={this.handleChangeEmail}
                  placeholder="Email"
                  required
                  value={this.state.userEmail}
                ></input>
                <textarea
                  className="text-input"
                  id="message-entry"
                  name="message"
                  onChange={this.handleChangeMessage}
                  placeholder="Your message"
                  required
                  value={this.state.userMessage}
                ></textarea>
                <input type="submit" value="Submit" id="sendEmail" />
              </form>
            </div>
          )
        ) : (
          undefined
        )}
      </div>
    );
  }
}
Contact.propTypes = {};
export default Contact;
