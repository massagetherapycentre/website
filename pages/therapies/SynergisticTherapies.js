import React from 'react';
import AppFrame from '../../components/AppFrame';
import ContentHeading from '../../components/ContentHeading';
import Heading from '../../components/Heading';
import BulletList from '../../components/BulletList';
import Button from '../../components/Button';
import Paragraph from '../../components/Paragraph';

export default ({}) => (
  <AppFrame>
    <ContentHeading title="Synergistic Therapies" subtitle="Read more about our range of synergistic therapies"/>

    <Heading>Sports Massage</Heading>
    <Paragraph>{`Sports Massage brings all the specialised therapies in massage together to firstly PREVENT injury. A Swedish style massage when applied to the athlete prior to activity, will warm, nourish and relax the muscles, and so far less injury is suffered.`}</Paragraph>
    <BulletList list={[
      `Too much training in a too short time frame`,
      `Specialised training in poor physical condition`,
      `Lack of adequate rest (for recuperation ) and/or warm up`,
      `Faulty nutrition - vitamin and mineral deficiencies`,
      `Excessive use of a part of the body`,
    ]}/>
    <Paragraph>{`Common Injuries include; FRACTURES ;rest, magnetic therapy,gentle lymphatic massage, passive movements and joint mobilisations to re-establish motor co-ordination. CHIPPED BONES; relief of pain and muscle spasm, magnetic therapy,hot and cold therapies. KNEE JOINT is at home with Aquatic Therapies, magnetic therapy, essential oils, leading up to massage and passive movements. MUSCLE INJURIES, TORN TENDONS, CORKED MUSCLE,SPRAINS require special care that further injury is not sustained , and more vigorous forms of therapy executed as the tissue repairs. By combining the complete range of therapies available at Aquadulgent Massage Centre, any Sports Injury can be alleviated, and a referral made for treatments beyond the range of therapies on offer. eg X-rays, brain scan, manipulations.`}</Paragraph>
    <Paragraph>{`Sports Massage can assist the athlete during sports injury rehabilitation to promote more rapid healing and less scar tissue formation. A wide range of techniques helps the athlete return to full endurance, flexiblity and strength. Advise on exercise and diet to accompany massage treatments is invaluable in returning the athlete to full functional activity.`}</Paragraph>

    <Heading>Swedish Massage</Heading>
    <Paragraph>{`Swedish Massage concentrates on working on one side of the body at a time. Unlike DEEP TISSUE Massage, it works within the pain/ comfort threshold of the patient, encouraging the gentle release of tension and stress. All of the techniques are incorporated into Remedial Massage, and often when a patient has requested a Swedish Massage , and physical problems have been uncovered, a progression is made to a Remedial Massage.`}</Paragraph>

    <Heading>Deep Tissue Massage</Heading>
    <Paragraph>{`Deep Tissue Massage is a technique which is designed to manipulate the deep fascia layers and deep muscle layers of the body. It is based on the theory that stress can be stored deep within the body, and is arranged in layers, trauma after trauma, each layer relating to a different level of consciousness. It can be quite painful for the patient, and is said to evoke emotional responses as each layer of stress and trauma is unlocked and released. It is a particular body type that seeks out this style of body work.`}</Paragraph>

    <Heading>Zone Therapy/Reflexology</Heading>
    <Paragraph>{`Zone Therapy/Regloxology are techniques which are localised to specific body regions, eg hands, feet and ears. The various regions have reflex relationships to all parts of the body, and various techniques are used to bring about specific reactions in a chosen body area. eg sciatic problems.`}</Paragraph>

    <Heading>Manual Lymphatic Drainage</Heading>
    <Paragraph>{`Manual Lymphatic Drainage is a soft, gentle style of massage used to improve function of the Lymph system, increase general energy health, to aid absorption of Essential Oils more effectively, to prevent Lymph blockages, increase Immune System function, Assist the utilisation of fats by body cells. REQUIRED by: sedentary/ immobilised patients; patients with high CHO, refined foods, protein diets; to remove toxins due to pollution, smoking, drinking alcohol, drugs, poor diet, chemicals; aid recovery from injury; in removal of toxic accumulations; Lymphodema. Contra-indicated in cases of chemotherapy, lymphatic cancer, acute illness.`}</Paragraph>

    <Heading>Wata Yoga</Heading>
    <Paragraph>{`Wata Yoga classes evolved from a need from patients with issues of alignment. By combining Therapeutic Exercise with a range of relevant Asanas, practiced vertically and floating supine , with basic alignment exercises from the AQUATHERICS® bodywork program , and the principles of water from Watsu®, clients quickly move through a realignment, as the structural muscles relax in the warm water , and the movements re-educate the muscles to hold the bones in the correct alignment. By "stacking the bones " first, clients ease about their alignment accelerates with each session. Current session is held on Tuesdays at 5.30pm. Usually attendance at these classes is a follow up from massage therapy, to speed up the re-education of muscles responsible for alignment.`}</Paragraph>

    <Heading>Far Infra Red (FIR) Sauna</Heading>
    <Paragraph>{`Many clients book a 30 minute session prior to a massage therapy, as it greatly enhances the effectiveness of the massage`}</Paragraph>
    <Paragraph>{`Some Benefits;`}</Paragraph>
    <BulletList list={[
      `Removal of Toxins; In one study by American researchers, the sweat of people using a conventional sauna was found to be 95 to 97% water, while the sweat of those using an FIR system was 80 to 85% water, with the non water portion principally cholesterol, fat-soluble toxins, toxic heavy metals, sulphuric acid, sodium, ammonia, and uric acid. This unusually high concentration of heavy metals and other fat-soluble toxins is not found in the sweat from normal exercise`,
      `Passive Cardiovascular conditioning effect`,
      `Outstanding Caloric Consumption and Weight Control`,
      `Musculoskeletal Cases`,
      `Rheumatoid Arthritis`,
      `Increases extensibility of collagen fibres`,
      `Decreases joint stiffness directly`,
      `Relieves muscle spasm`,
      `Pain relief`,
      `Increases Blood Circulation`,
      `Ear, Nose and Throat conditions relieved`,
      `Skin, the body's largest body system`,
    ]}/>

    <Heading>Modalities</Heading>
    <Paragraph>{` Aquatic Therapies/Bodywork/Massage are relatively new in Australia some modalities to be experienced at Practitoner competency include; `}</Paragraph>

    <Heading>Ion Flush Foot-Bath™</Heading>
      <BulletList list={[
        `a revolutionary new cleansing tool`,
        `Eliminate toxins`,
        `Reclaim vibrant health`,
        `Replenish energy levels`,
      ]}/>
    <Paragraph>{`In a world of over 74,000 Chemicals, Increased pollution, heavy metals, and noxious fumes....YOU Need a Cleansing Strategy!`}</Paragraph>
    <Paragraph>{`<b>The Ion Flush Foot-Bath Energiser;</b>`}</Paragraph>
    <Paragraph>{`Those likely to benefit; Tired stressed people seeking an energy boost,smokers,drinkers,drug takers and party animals; those in poor health with low immunity; persons working in a polluted environment; those suffering arthritis, sports injury or gout; Diabetics- not type1 ; high blood pressure; prostrate problems and skin ailments; circulation problems.`}</Paragraph>
    <Paragraph>{`These Synergistic Therapies are located poolside, and are available individually or as part of a Synergistic Combination with other Therapies.`}</Paragraph>

  </AppFrame>
);
