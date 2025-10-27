import { motion } from 'framer-motion';

const links = [
  { id: 'journey', label: 'מסע הקריפטו' },
  { id: 'tools', label: 'כלים לקהילה' },
  { id: 'call-to-action', label: 'הצטרפו אלינו' },
];

const Navigation = () => {
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="main-nav"
    >
      <div className="brand">CryptoRabbi</div>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <button type="button" onClick={() => handleClick(link.id)}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navigation;
