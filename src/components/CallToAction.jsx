import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <motion.section
      id="call-to-action"
      className="cta-section"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <h2>בואו נעצב יחד עתיד פיננסי מאוזן</h2>
      <p>
        הצטרפו למפגשי הלימוד הסגורים שלנו, קבלו מדריכים מעשיים וכלים מותאמים
        לסגנון החיים החרדי. השקיעו בחכמה, מתוך אחריות לערכים ולאמונה.
      </p>
      <div className="cta-actions">
        <a className="primary" href="mailto:info@cryptorabbi.com">שריינו מקום</a>
        <a className="secondary" href="#tools">ראו את הכלים</a>
      </div>
    </motion.section>
  );
};

export default CallToAction;
