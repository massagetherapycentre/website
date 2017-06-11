import React from 'react';
import AppFrame from '../../components/AppFrame';
import ContentHeading from '../../components/ContentHeading';
import Heading from '../../components/Heading';
import BulletList from '../../components/BulletList';
import Button from '../../components/Button';
import Paragraph from '../../components/Paragraph';

export default ({}) => (
  <AppFrame>
    <ContentHeading title="Remedial Massage Cairns" subtitle="Read more about our approach to remedial massage"/>

    <Paragraph>{`Remedial Massage is the systemic and scientific manipulation of the soft tissues of the body, and is performed directly upon the skin in a methodical manner for Therapeutic purposes. Skilfully used, Remedial Massage can assist the body in its own healing processes, where disease or injury has occurred in muscles, connective tissue, bones, joints, and internal organs. It can also assist healing through its effect on the psychological condition of the patient, increasing a sense of confidence, well-being and relaxation. Remedial Massage is a technique which is a composite of many other forms of Massage. RM makes use of Passive Movements and Joint Mobilising Techniques, working toward a specific goal in the treatment of the patient, and often working towards a specific and limited body region until that goal is accomplished.`}</Paragraph>

    <Heading>Your first session</Heading>
    <Paragraph>{`Your first session at AguaDulgent Massage Centre begins with a consultation to determine the most effective therapy to address your needs. A Structural Analysis - which is the Therapists' blue print of your total alignment, and/ or a Kinesthetic Analysis - being a measure of your Range of Movement, is conducted. A specific treatment relevent to your issues is devised. To enhance the Therapy and to allow the patient to further self correct anomolies, Applied Exercise Therapy becomes an ongoing "homework" . After all it is a remedy that we are seeking and no quick fix magic bullet remedy in the guise of a drug. Due to patients' needs in this area, Wata Yoga classes held in the clinics' Therapy Pool, with special attention to correcting alignment issues.`}</Paragraph>

    <Heading>General Effects of Remedial Massage</Heading>
    <BulletList list={[
      `<b>Restoration of Function;</b> Has a beneficial influence on virtually all body systems, including the skin, musculo-skeletal, nervous, cardiovascular, lymphatic -immune, digestive and glandular systems</br>`,
      `<b>Aids Elimination;</b> of toxic metabolic wastes via the bowels, lungs , kidneys, and skin`,
      `<b>Facilitates local blood supply;</b> RM aids and increases local blood supply to tissues, which in turn increases the nourishment of the cells composing those tissues and promotes waste removal. This enables cellular activities to be carried out normally.`,
      `<b>Promotes Relaxation;</b> RM relaxes tight, shortened, and spastic muscles and connective tissues.`,
      `<b>Looses Scar Tissue;</b> RM can loosen and diminish fibrous and scar tissue. Timely application of Massage in the healing process can prevent the formation of scar tissue`,
      `<b>Disperses Acid Deposits;</b> Can disperse uric and lactic acid deposits which can accumulate in and around joints, ligaments, tendons, muscles and fascia. These acids disturb the chemical activities of the cells.`,
      `<b>Sedate, Stimulate or Balance the Nervous System;</b> Depending on the techniques used, Massage can have either sedating, stimulating, or balancing effects upon Nervous System function.`,
      `<b>Normalise Glandular Functions;</b> Massage can either increase or decrease the functions of glands in the body, especially this effect is marked in the glands of the skin.`
    ]}/>

    <Button href="/bookings.php">Book a Massage</Button>
  </AppFrame>
);
