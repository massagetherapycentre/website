import React from 'react';
import AppFrame from '../components/AppFrame.js';

export default class BookingsPage extends React.Component {
  render() {
    return (
      <AppFrame>
        <iframe
          src="https://aguadulgent-massage-centre.cliniko.com/bookings?business_id=51199&practitioner_id=76508&embedded=true"
          frameBorder="0"
          scrolling="auto"
          width="100%"
          height="1000"
        />
      </AppFrame>
    );
  }
}
