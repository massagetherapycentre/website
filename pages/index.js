import React from 'react';
import Link from 'next/link';
import AppFrame from '../components/AppFrame.js';

export default () => (
  <AppFrame>
    <div className="bannerBox">
      <img src="static/massagecentrebanner.jpg" />
      <Link href="bookings.php">
        <a className="ghostLink" />
      </Link>
    </div>
    <div className="therapies">
      <div className="therapyBox">
        <img src="static/craniosacraltherapy.jpg" />
        <h2>Craniosacral therapy</h2>
        <p>
          Craniosacral Therapy has been described by a patient as
          {' '}
          <b>"a great DEFRAG"</b>
          . That's pretty accurate, as the mind "Zones" out into a deep space of realignment of mind, body and soul.
          Another said;
          {' '}
          <b>
            "all young people should have this Therapy....they would never bother with drugs again."
          </b>
        </p>
        <Link href="/therapies/craniosacraltherapycairns.php">
          <a>Learn more about craniosacral therapy</a>
        </Link>
      </div>
      <div className="therapyBox">
        <img src="static/aquatictherapy.jpg" />
        <h2>Aquatic therapy</h2>
        <p>
          Muscles melting as if dripping from the bones, being supported floating
          in warm water by the Therapist, the body gently stretched in a lazy dolphin dance,
          I apply a nose clip to serenely enter the water. A deepening sense of
          awe as the land of gravity recedes. Such ecstatic joy, peace and
          Connectedness to the Divine...
        </p>
        <Link href="/therapies/aquatictherapycairns.php">
          <a>Learn more about aquatic therapy</a>
        </Link>
      </div>
      <div className="therapyBox">
        <img src="static/remedialmassage.jpg" />
        <h2>Remedial massage</h2>
        <p>
          Remedial Massage is the signature Therapy of Aquadulgent Massage Centre.
          Where the Therapist has studied a wide range of subjects about the body
          and how it works, and an extensive range of Therapies that best target
          a particular body malfunction. Listens to the patient with ears, hands,
          eyes,feelings, and charts a course of Therapy to best serve the total
          health of the patient.
        </p>
        <Link href="/therapies/remedialmassagecairns.php">
          <a>Learn more about remedial massage</a>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .bannerBox {
        position: relative;
      }
      .ghostLink {
        position: absolute;
        bottom: 15px;
        left: 10px;
        width: 265px;
        height: 70px;
      }
      .therapies {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 100px;
      }
      .therapyBox {
        width: 30%;
      }
      .therapyBox:not(:last-of-type) {
        margin-right: 20px;
      }
    `}</style>
  </AppFrame>
);
