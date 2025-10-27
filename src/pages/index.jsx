import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './index.module.css';
import CallToAction from '../components/CallToAction.jsx';

const HomePage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.3]);
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, 120]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.4], [0.2, 0.6]);

  const timeline = [
    {
      title: 'ההתחלה הסקרנית',
      text: 'ישראל גילה את הביטקוין מתוך חיפוש אחר כלים חדשים לחיזוק עצמאות כלכלית, אך שמר על סקרנות זהירה מתוך נאמנות להלכה.',
    },
    {
      title: 'למידה מבוקרת',
      text: 'בקהילה נוצרה מסגרת לימוד שבועית בה רבנים, רואי חשבון ומומחי בלוקצ׳יין פועלים יחד כדי לתרגם את הטכנולוגיה לשפה ערכית ומעשית.',
    },
    {
      title: 'יישום אחראי',
      text: 'המשפחה והקהילה אימצו תהליכי שקיפות, גיבויים קרים ותרחישי סיכון כדי להבטיח שהשקעות דיגיטליות משרתות את היציבות הרוחנית.',
    },
  ];

  const tools = [
    {
      title: 'שיעור שבועי חי',
      description: 'מפגש זום מונחה עברית עם תמלול בעברית, המסביר מושגים כמו הלבנת הון, מסחר הלכתי, ושימוש בטוח בארנקים.',
    },
    {
      title: 'ארנק קירור משותף',
      description: 'הדרכה על הגדרת ארנק רב-חתימה למשפחות, עם מדריך מודפס וממשק מותאם לימין-לשמאל.',
    },
    {
      title: 'מערכת סינון השקעות',
      description: 'רשימת בדיקות לפילוח השקעות לפי התאמה ערכית, סיכון, ועיקרון פיקוח נפש כלכלי.',
    },
  ];

  return (
    <div className={styles.page} ref={containerRef}>
      <motion.section
        className={styles.hero}
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <div className={styles.heroContent}>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            מסע הקריפטו של ישראל
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1 }}>
            טכנולוגיה פיננסית מתקדמת עם חמלה קהילתית. קבלו השראה מהשילוב בין
            חדשנות, הלכה וקשר אנושי חם.
          </motion.p>
        </div>
        <motion.div
          className={styles.heroOverlay}
          aria-hidden="true"
          style={{ opacity: overlayOpacity }}
        />
      </motion.section>

      <motion.section
        id="journey"
        className={styles.journey}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, duration: 0.8, ease: 'easeOut' },
          },
        }}
      >
        <motion.h2 variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}>
          מסע אישי עם שורשים עמוקים
        </motion.h2>
        <div className={styles.timeline}>
          {timeline.map((item) => (
            <motion.article
              key={item.title}
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
              className={styles.timelineCard}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="tools"
        className={styles.tools}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2>כלים מותאמים לקהילה החרדית</h2>
        <div className={styles.toolGrid}>
          {tools.map((tool) => (
            <motion.article
              key={tool.title}
              className={styles.toolCard}
              whileHover={{ y: -8, boxShadow: 'var(--shadow-elevated)' }}
            >
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <CallToAction />
    </div>
  );
};

export default HomePage;
