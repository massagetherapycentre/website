import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ArrowDropDown from 'react-icons/lib/md/arrow-drop-down';
import Popover from './Popover.js';
import { colors } from '../utils/theme.js';

const TherapiesDropdown = () => (
  <Popover launcher={<a>Therapies <ArrowDropDown width={20} height={20} /></a>}>
    <ul>
      <li>
        <Link href="/therapies/remedialmassagecairns.php">
          <a>Remedial Massage</a>
        </Link>
      </li>
      <li>
        <Link href="/therapies/craniosacraltherapycairns.php">
          <a>Craniosacral Therapy</a>
        </Link>
      </li>
      <li>
        <Link href="/therapies/aquatictherapycairns.php">
          <a>Aquatic Therapy</a>
        </Link>
      </li>
      <li>
        <Link href="/therapies/synergistictherapies.php">
          <a>Synergistic Therapies</a>
        </Link>
      </li>
      <li>
        <Link href="/therapies/hotstonetherapycairns.php">
          <a>Hot Stone Therapies</a>
        </Link>
      </li>
      <li>
        <Link href="/therapies/aromatherapycairns.php">
          <a>Aromatherapy Therapies</a>
        </Link>
      </li>
    </ul>
    <style jsx>{`
      ul {
        list-style: none;
        color: ${colors.gray};
        padding: 0;
      }
      a {
        white-space: nowrap;
        text-decoration: none; color: inherit;
        cursor: pointer;
      }
      li > a {
        padding: 5px 20px;
        display: block;
      }
      li > a:hover {
        background-color: ${colors.lightestGray};
      }
    `}</style>
  </Popover>
);

const Container = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      max-width: 940px;
      margin: 0 auto;
    `}</style>
  </div>
);

const Header = () => (
  <div className="header">
    <Container>
      <div className="innerHeader">
        <Link href="/">
          <a><img src="/static/aguadulgentlogo.png" /></a>
        </Link>
        <div className="right-col">
          <div className="mobile">0418 774 388</div>
          <ul>
            <li><TherapiesDropdown /></li>
            <li><Link href="/bookings.php"><a>Bookings</a></Link></li>
            <li><Link href="/pricings.php"><a>Prices</a></Link></li>
            <li><Link href="/about.php"><a>About</a></Link></li>
            <li><Link href="/contactus.php"><a>Contact</a></Link></li>
          </ul>
        </div>
      </div>
    </Container>
    <style jsx>{`
      .header {
        background-color: ${colors.black};
        border-bottom: 5px solid ${colors.lightGray};
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
        color: ${colors.lightGray};
        font-weight: 300;
      }

      ul {
        list-style-type: none;
        display: flex;
        margin: 0;
      }

      li {
        color: ${colors.lightGray};
        font-weight: bold;
        font-size: 14px;
      }

      li:not(:last-of-type) {
        margin-right: 20px;
      }

      a {
        text-decoration: none;
        color: inherit;
        line-height: 1;
      }
    `}</style>
  </div>
);

const MainView = ({ children }) => (
  <div className="mainView">
    <Container>
      {children}
    </Container>
    <style jsx>{`
      .mainView {
        flex-grow: 1;
        padding: 50px 0 100px;
      }
    `}</style>
  </div>
);

const Footer = () => (
  <div className="footer">
    <Container>
      <div>Located at 158 McManus Street, Whitfield, Cairns.</div>
      <div>© Aguadulgent Massage Centre {new Date().getUTCFullYear()}</div>
    </Container>
    <style jsx>{`
      .footer {
        background-color: ${colors.darkGray};
        border-top: 5px solid ${colors.lightGray};
        color: ${colors.lightGray};
        font-size: 14px;
        padding: 50px 0;
        text-align: center;
        line-height: 2;
      }
    `}</style>
  </div>
);

export default ({ pageTitle = '', children }) => (
  <div className="root">
    <Head>
      <title>{pageTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <MainView>{children}</MainView>
    <Footer />
    <style jsx>{`
      .root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
    `}</style>
    <style global jsx>{`
      body {
        margin: 0;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        line-height: 1.5;
      }
      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);
