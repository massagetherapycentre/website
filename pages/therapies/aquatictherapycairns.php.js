import React from 'react';
import AppFrame from '../../components/AppFrame';
import ContentHeading from '../../components/ContentHeading';
import Heading from '../../components/Heading';
import BulletList from '../../components/BulletList';
import Button from '../../components/Button';
import Paragraph from '../../components/Paragraph';

export default ({}) => (
  <AppFrame>
    <ContentHeading title="Aquatic Therapy Cairns" subtitle="Read more about our approach to aquatic therapy"/>

    <Heading>A New World Of Ecstatic Wellbeing Awaits</Heading>
    <Paragraph>{`Practiced in warm water heated to 35Degrees Celsius, the same as skin temperature the following effects are common to all Modalities of the Water Massage Therapies practiced here.`}</Paragraph>

    <Heading>Some Effects of Warm Water</Heading>
    <BulletList list={[
      `Promotes muscle relaxation`,
      `Increases body temperature`,
      `Causes loss of sense of body shape and boundary`,
      `Reduces pain sensitivity`,
      `Decreases muscle spasm`,
      `Prepares connective tissue for stretching`,
      `Increases peripheral circulation`,
    ]}/>

    <Heading>Some Effects of Hydrostatic Pressure</Heading>
    <BulletList list={[
      `Helps stabilise unstable jounts`,
      `Provides more resistence to expansion of abdomen and ribs in breathing, thereby strengthening diaphram and intercostal muscles.`,
      `Aids venous return in legs`,
      `Compresses all soft tissues, enhancing Lymphatic return`,
      `Increases thoracic blood volume, which increases volume of air in ribcage`,
      `Renal response to immersion is diuresis - increased urine secretion, including sodium and potassium.`,
    ]}/>

    <Heading>Modalities</Heading>
    <Paragraph>{` Aquatic Therapies/Bodywork/Massage are relatively new in Australia some modalities to be experienced at Practitoner competency include; `}</Paragraph>

    <Heading>Watsu®</Heading>
    <Paragraph>{`Watsu is a form developed by Harold Dull in the 1980's by floating his Zen Shiatsu students in the warm pool at Harbin Hot Springs by applying its stretches and moves;and further developed in clinics and spas globally. Watsu® is a gentle form of bodywork therapy performed in warm water. It combines elements of massage, joint mobilisation, muscle stretching and dance. The deeply relaxing effects of warm water and nurturing support, combine with Watsu® movements, stretches, massage and meridian point work to create therapeutic benefits and potential healing. There are documented benefits in decreasing pain and improving quality of movement for people with; traumatic brain injury, spinal cord injury, stroke, arthritus, cancer survivors, Fibromyalgia, Cerebral Palsy, Parkinsons' Disease, anxiety, and chronic pain. As well, Watsu® is great for able bodied people wanting to release tension, relax, and have an experience that is often described as "bliss". Unlike Physiotherapy in the water,the Watsu® Therapist supports the receivers head and neck so that they can completely relax, letting go of physical restraints, and the mental impediment of "mind chatter". It has also been adapted for clients with special needs, for those with Neurologically and Orthopedically involved.`}</Paragraph>

    <Heading>AQUATHERICS®</Heading>
    <Paragraph>{`The AQUATHERICS® bodywork program was developed by Mary Theri Thomas. Theri is a certified instructor of practitioners and teachers of the Worldwide Aquatic Bodywork Association (WABA). AQUATHERICS® trained professionals complete classes developed out of Theri's extensive study of Holistic Health and her keen awareness and attention to connection, alignment, body mechanics, technique and learning styles. Her background as a Holistic Health Practitioner includes practitioner status and teaching certification in four other existing styles of Aquatic Bodywork as well as in many other styles of massage, fitness and hypnotherapy. Although there are obvious similarities among the many styles of Bodywork, Theri discovered there are also very different driving principles at the core of each approach. By focusing on these truths rather than choreography or sequence and by creating exercises on the spot to address getting the feeling of the principle in our own body, we can truly be available to join the being we are floating with in the water in awareness. We can fully be with the person in each moment and each movement with the confidence a strong foundation of principles gives us. Quality of touch and movement through awareness allows us to be with each person where they are in their life process. Having a broad knowledge base to draw from we meet the needs of a wide variety of clients whether the client is seeking relaxation, stress reduction, pain management, relief from medical conditions or from emotional unrest. Each person finds their balance of the mind body and spirit in their own way.`}</Paragraph>

  </AppFrame>
);
