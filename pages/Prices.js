import React from 'react';
import AppFrame from '../components/AppFrame';
import ContentHeading from '../components/ContentHeading';
import PricingTable from '../components/PricingTable';

export default () => (
  <AppFrame>
    <ContentHeading title="Massage Therapy Prices" subtitle="View our pricing structure below."/>
    <PricingTable priceList={[
        {name: 'Massage Therapy (massage, CST, lymphatic)', time: '1 Hour', price: 98},
        {name: 'Massage Therapy (massage, CST, lymphatic)', time: '75 Minutes', price: 120},
        {name: 'Massage Therapy (massage, CST, lymphatic)', time: '90 Minutes', price: 140},
        {name: 'Aquatic Therapy', time: '1 Hour', price: 114},
        {name: 'First Session Raindrop, VitaFlex or Emotional Clearing', time: '1 Hour', price: 130},
        {name: 'Follow-up Session Raindrop, VitaFlex or Emotional Clearing', time: '1 Hour', price: 120},
        {name: 'Fijian Hot Stones', time: '90 Minutes', price: 140},
        {name: 'Ion Cleanse Foot Bath', time: '30 Minutes', price: 45},
        {name: 'Body Detox (FIR Sauna)', time: '30 Minutes', price: 30},
      ]}/>
  </AppFrame>
);
