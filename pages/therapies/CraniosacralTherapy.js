import React from 'react';
import AppFrame from '../../components/AppFrame';
import ContentHeading from '../../components/ContentHeading';
import Heading from '../../components/Heading';
import BulletList from '../../components/BulletList';
import Button from '../../components/Button';
import Paragraph from '../../components/Paragraph';

export default ({}) => (
  <AppFrame>
    <ContentHeading title="Craniosacral Therapy Cairns" subtitle="Read more about our approach to craniosacral therapy"/>

    <Paragraph>{`CranioSacral Therapy (CST) is used to detect and correct imbalances in the craniosacral system, which may be the cause of sensory, motor or neurological dysfunction. The craniosacral system consists of the membranes and cerebrospinal fluid that surround and protect the brain and spinal cord. It extends from the skull, face and mouth - which make up the cranium- down to the sacrum , or tailbone area.`}</Paragraph>
    <Paragraph>{`The therapy has been successfully used to treat headaches, neck and back pain, TMJ, chronic fatigue, motor coordination difficulties, eye problems and central nervous system disorders.`}</Paragraph>

    <Heading>What can I expect from a session?</Heading>
    <Paragraph>{`A typical CST session takes place in a quiet , private setting. You remain fully clothed as you relax on a comfortable , padded table. Your therapist begins by gently touching various parts of your body to monitor the rhythm of the fluid that is flowing around your central nervous system. By carefully listening with the hands locate weak fluid flow or tissue motion, your practitioner can trace those areas of weakness through the body to the original source of dysfunction. Delicate manual techniques are then used to release those problem areas and improve the form and function of your central nervous system. A CST session can last up to an hour or more. It can be used alone or integrated with other therapies to create powerful effects. What you experience from your own session is highly individual. The sessions are generally deeply relaxing, creating feelings of warmth or gentle pulsing in the areas the therapist is working on.`}</Paragraph>

    <Heading>What conditions does CST address?</Heading>
    <BulletList list={[
      `Migraines and Headaches`,
      `Chronic Neck and Back Pain`,
      `Stress and Tension -Related Disorders`,
      `Motor-Coordination Impairments`,
      `Infant and Childhood Disorders`,
      `Brain and Spinal Cord Injuries`,
      `Chronic Fatigue`,
      `Fibromyalgia`,
      `TMJ Syndrome`,
      `Parkinson's Disease`,
      `Scoliosis`,
      `Central Nervous System Disorder`,
      `Learning Disabilities`,
      `ADD / ADHD`,
      `Post-Traumatic Stress Disorder`,
      `Orthopaedic problems`,
      `And Many Other Conditions`,
    ]}/>

    <Heading>How was this gentle therapy developed?</Heading>
    <Paragraph>{`CST was developed by Dr. John E. Upledger, an osteopathic physician featured in TIME magazine as one of America's next wave of innovators. From 1975 to 1983, Dr. Upledger was a professor of biomechanics at the College of Osteopathic Medicine at Michigan State University. While he was there he led a team of anatomists, physiologists, biophysicists, and bioengineers who performed and published the clinical research that formed the basis for the approach he named CranioSacral Therapy. In 1985, Dr. Upledger founded the Upledger Institute to teach people worldwide about the value of this effective approach. In a continuing study of this Curriculum, in 2009 Kevin English has acted as a Teacher Assist for CST 1 in Sydney and CST 2 in Buenos Aires. More than 80,000 therapists have been trained in CST`}</Paragraph>

    <Heading>Why is CST so Important?</Heading>
    <Paragraph>{`CST is a light touch approach that can create dramatic improvements in your life. It releases tensions deep in your body to relieve pain and dysfunction and improve whole body health and performance. Few body structures have more influence over your health and well-being than your central nervous system. And few body systems have more impact on your central nervous system than the craniosacral system - the soft tissues and fluid that protect your brain and spinal cord. Every day you endure stresses and strains and your body absorbs them. But your body can only handle so much tension before the tissues begin to tighten and potentially affect the brain and spinal cord. Unfortunately, this can compromise the function of the central nervous system- and the performance of nearly every other system in the body. CST releases those tensions to allow the entire body to relax and self-correct. Using a gentle touch- starting with a 5 gram pressure - practitioners evaluate your internal environment. Then they use didtintive light-touch techniques to release any restrictions they find. By freeing the central nervous system to perform at its best, CST naturally eliminates pain and stress, strengthens your resistance to dis-ease, and enhances your health and well-being. And because its so gentle, CST can be effective for all ages, from newborns to elders.`}</Paragraph>

  </AppFrame>
);
