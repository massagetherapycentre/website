import React from 'react';
import Send from 'react-icons/lib/md/send';
import AppFrame from '../components/AppFrame.js';
import ContentHeading from '../components/ContentHeading.js';
import Button from '../components/Button.js';
import { Input, Textarea } from '../components/Input.js';
import { colors } from '../utils/theme.js';

const INPUT_WIDTH = 300;
const CLOUD_FUNCTION_ENDPOINT =
  'https://us-central1-valid-earth-170013.cloudfunctions.net/send-email';

// Updaters
const isSending = state => ({ ...state, isSending: true });
const isNotSending = state => ({ ...state, isSending: false });
const showError = state => ({ ...state, didSendFail: true });
const hideError = state => ({ ...state, didSendFail: false });
const updateInput = (input, value) => state => ({ ...state, [input]: value });
const sendSucceeded = state => ({ ...state, didSendSucceed: true });

export default class ContactUsPage extends React.Component {
  state = {
    isSending: false,
    didSendFail: false,
    didSendSucceed: false,
  };

  sendEmail = event => {
    event.preventDefault();
    this.setState(isSending);
    this.setState(hideError);

    fetch(CLOUD_FUNCTION_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        contactNumber: this.state.contactNumber,
        message: this.state.message,
      }),
    })
      .then(res => {
        if (!res.ok) return Promise.reject('Error');
        this.setState(isNotSending);
        this.setState(sendSucceeded);
      })
      .catch(() => {
        this.setState(showError);
        this.setState(isNotSending);
      });
  };

  render() {
    return (
      <AppFrame pageTitle="Contact Us — Aguadulgent Massage Centre">
        <form>
          <h2>Contact form</h2>
          {this.state.didSendFail &&
            <div className="row">
              <div className="errorBox">
                <h3 className="errorHeading">Error!</h3>
                <p className="errorText">
                  Something went wrong while trying to send your message 😭 😭
                  <br />
                  Try again, or just grab the email details further down the page and send us an email that way.
                </p>
              </div>
            </div>}
          <div className="row" style={{ width: INPUT_WIDTH }}>
            <Input
              placeholder="Name"
              value={this.state.name}
              onChange={e => this.setState(updateInput('name', e.target.value))}
            />
          </div>
          <div className="row" style={{ width: INPUT_WIDTH }}>
            <Input
              placeholder="Email"
              value={this.state.email}
              onChange={e =>
                this.setState(updateInput('email', e.target.value))}
            />
          </div>
          <div className="row" style={{ width: INPUT_WIDTH }}>
            <Input
              placeholder="Contact number"
              value={this.state.contactNumber}
              onChange={e =>
                this.setState(updateInput('contactNumber', e.target.value))}
            />
          </div>
          <div className="row textareaBox">
            <Textarea
              placeholder="Message"
              rows="3"
              value={this.state.message}
              onChange={e =>
                this.setState(updateInput('message', e.target.value))}
            />
          </div>
          <div className="row">
            <Button onClick={this.sendEmail}>
              {this.state.isSending
                ? <span>Sending...</span>
                : <span>Send message <Send style={{ marginLeft: 5 }} /></span>}
            </Button>
          </div>
          {this.state.didSendSucceed &&
            <div className="row successBox">
              ✓ Message sent successfully
            </div>}
        </form>
        <div className="contactDetails">
          <h2>Contact details</h2>
          <div className="row">
            <div className="key">Email</div>
            <div>info@massagetherapycentre.com.au</div>
          </div>
          <div className="row">
            <div className="key">Address</div>
            <div>158 McManus Street, Whitefield, Cairns</div>
          </div>
          <div className="row">
            <div className="key">Phone</div>
            <div>0431 199 192</div>
          </div>
          <div className="row">
            <div className="key">Hours</div>
            <div>10:30am–8:30pm Monday–Friday</div>
          </div>
          <div className="row">
            <div className="key">Post</div>
            <div>PO Box 841, Edge Hill, Cairns QLD 4870</div>
          </div>
        </div>
        <style jsx>{`
          .row {
            margin-bottom: 20px;
          }
          .contactDetails {
            margin-top: 100px;
            padding-top: 50px;
            border-top: 1px solid ${colors.lightestGray};
            color: ${colors.gray};
          }
          h2 {
            color: ${colors.blue};
          }
          .textareaBox {
            max-width: 40em;
          }
          .key {
            font-weight: bold;
          }
          .errorBox {
            padding: 20px;
            border: 1px solid ${colors.lightestGray};
            border-radius: 4px;
          }
          .errorHeading {
            color: ${colors.red};
            margin: 0 0 5px 0;
          }
          .errorText {
            margin: 0;
          }
          .successBox {
            color: ${colors.green};
            font-weight: bold;
          }
        `}</style>
      </AppFrame>
    );
  }
}
