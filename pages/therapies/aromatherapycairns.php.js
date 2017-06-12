import React from 'react';
import AppFrame from '../../components/AppFrame';
import ContentHeading from '../../components/ContentHeading';
import Heading from '../../components/Heading';
import BulletList from '../../components/BulletList';
import Button from '../../components/Button';
import Paragraph from '../../components/Paragraph';

export default () => (
  <AppFrame pageTitle="Aromatherapy Cairns — Aguadulgent Massage Centre">
    <ContentHeading
      title="Aromatherapy Cairns"
      subtitle="Read more about our approach to aromatherapy"
    />

    <Paragraph>
      {`Kevin English is qualified with a Diploma In Medicinal Aromatherapy. Prerequisites include a Diploma in Advanced Remedial Massage, and studies of Anatomy and Physiology 1 and 2. Symptom Analysis and Evaluation precedes Essential Oil therapy. This is included in all Massage Therapies, and not just Aromatherapy Massage, but also Remedial Massage and Manual Lymphatic Drainage, and Fijian Hot Stone Massage. In Clinical Practice, Blending and Prescribing from an in house Materia Medica is conducted. Currently working with 64 different essential oils.`}
    </Paragraph>

    <Heading>Definition of Aromatherapy</Heading>
    <Paragraph>
      {`The literal definition of Aromatherapy implies the use of AROMAS or AROMATIC substances as a THERAPY or to achieve a THERAPEUTIC RESULT, by way of the Sense of Smell. This is an accurate description, yet does not describe the many ways in which Essential Oils and other Aromatic Plant substances can be used. Hence ESSENTIAL OIL THERAPY is a more accurate way of defining the art and practice of Aromatherapy.`}
    </Paragraph>

    <Heading>General Uses</Heading>
    <Paragraph>
      {`<b>External</b>`}
    </Paragraph>
    <BulletList
      list={[
        `Massage: Aromatherapy technique, Swedish/ Remedial, Acupressure , Shiatsu, Foot and Hand Reflexology, Neuromuscular Massage, etc.`,
        `Hydrotherapy: Foot and Hand baths, whole baths, Sitz baths, compresses, poultices, inhalations.`,
        `Psychotherapy counselling, Hypnotherapy, Psychology, etc.`,
        `Stress Management`,
        `Meditation; for personal development and Stress reduction.`,
        `Psychic and Spiritual Healing`,
        `Cosmetics and Perfumery`,
        `Aesthetics`,
      ]}
    />
    <Paragraph>
      {`<b>Internal</b>`}
    </Paragraph>
    <BulletList
      list={[
        `Tisanes; with herbal teas or as herbal teas only`,
        `Elixirs; with herbal compounds`,
        `Syrups; Honey and sugar based preparation`,
        `Essences; in alcoholic bases`,
        `Vinegars and Waters`,
      ]}
    />

    <Heading>Some Effects of Hydrostatic Pressure</Heading>
    <BulletList
      list={[
        `Helps stabilise unstable jounts`,
        `Provides more resistence to expansion of abdomen and ribs in breathing, thereby strengthening diaphram and intercostal muscles.`,
        `Aids venous return in legs`,
        `Compresses all soft tissues, enhancing Lymphatic return`,
        `Increases thoracic blood volume, which increases volume of air in ribcage`,
        `Renal response to immersion is diuresis - increased urine secretion, including sodium and potassium.`,
      ]}
    />

    <Heading>How Do Essential Oils Work?</Heading>
    <Paragraph>
      {`<b>They affect us in 3 different and overlapping ways;</b>`}
    </Paragraph>
    <BulletList
      list={[
        `On the physical body, both locally and systematically, via the lymphatic and blood circulation.`,
        `When applied to the body surface via massage, baths, compresses, or lotions, they have a local effect, i.e. the site of application, and Systemically i.e. throughout the body. The Systemic effect occurs when essential oils are absorbed through the skin into the Lymphatic circulation, and they are then dumped from the lymphatics into the blood stream. Once circulating in the blood stream, they are carried to their target organs where they exert a therapeutic effect on specific tissues. Every Essential Oil has its own Target Organ e.g. Juniper oil targets the urinary tract and kidneys in particular, with secondary effects on the digestive, respiratory and reproductive systems.`,
        `On the mind and emotions via the Sense of Smell and the Limbic System: Even when Essential Oils are inhaled only, in the form of steam inhalation for a cold, or as a fumigator in the background for psychological effect, the oils will be absorbed across the mucous membranes of the respiratory tract and lungs into the blood stream, where once again they can travel around the body quickly to their Target Organ.`,
      ]}
    />

    <Heading>Some common properties include</Heading>
    <BulletList
      list={[
        `Antiseptic`,
        `Anti-inflammatory`,
        `Cytophylactic`,
        `Sedative`,
        `There are oils that act on; Anxiety, Depression, Anger, Apathy, Confusion, Dwelling in the Past, Fear, Grief, Hyper-sensitive, Impatience/ Irritability, Jealousy, Panic, Shock, Suspicion, Euphorics, Aphrodisiacs, Regulators, Mental Stimulants, Sedatives, Invigorators.`,
      ]}
    />

  </AppFrame>
);
