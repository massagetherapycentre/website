import React from 'react';
import Link from 'next/link';

const Container = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      max-width: 940px;
      margin: 0 auto;
    `}</style>
  </div>
);

export default ({ children }) => (
  <div className="root">
    <div className="header">
      <Container>
        <div className="innerHeader">
          <img src="/static/aguadulgentlogo.png" />
          <div className="right-col">
            <div className="mobile">0418 774 388</div>
            <ul>
              <li><Link href="/"><a>Therapies</a></Link></li>
              <li><Link href="/"><a>Bookings</a></Link></li>
              <li><Link href="/"><a>Prices</a></Link></li>
              <li><Link href="/"><a>About</a></Link></li>
              <li><Link href="/"><a>Contact</a></Link></li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
    <div className="mainView">
      <Container>
        {children}
      </Container>
    </div>
    <div className="footer">
      <Container>
        <div>Located at 158 McManus Street, Whitfield, Cairns.</div>
        <div>© Aguadulgent Massage Centre {new Date().getUTCFullYear()}</div>
      </Container>
    </div>
    <style jsx>{`
      .root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      .header {
        background-color: #000;
        border-bottom: 5px solid #c2c0bf;
      }

      .innerHeader {
        display: flex;
      }

      .right-col {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        padding: 42px 0;
      }

      .mobile {
        font-size: 30px;
        color: #ddd;
        font-weight: 300;
      }

      ul {
        list-style-type: none;
        display: flex;
        margin: 0;
      }

      li {
        color: #ddd;
        font-weight: bold;
        font-size: 14px;
      }

      li:not(:last-of-type) {
        margin-right: 20px;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      .mainView {
        flex-grow: 1;
      }

      .footer {
        background-color: #1e1e1e;
        border-top: 5px solid #c2c0bf;
        color: #aaa;
        font-size: 14px;
        padding: 50px 0;
        text-align: center;
      }
    `}</style>
    <style global jsx>{`
      body {
        margin: 0;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        line-height: 1.5;
      }
    `}</style>
  </div>
);
