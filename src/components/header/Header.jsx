import { useState } from "react";
import { motion } from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";

import css from "./Header.module.scss";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerShadow = useHeaderShadow();

  return (
    <motion.div
      initial='hidden'
      whileInView='show'
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>
          <a href='#'>Raviranjan Mahto</a>
        </div>
        <ul
          style={getMenuStyles(menuOpen)}
          className={`flexCenter ${css.menu}`}
        >
          <a href=''>Services</a>
          <a href=''>Experience</a>
          <a href=''>Portfolio</a>
          <a href=''>Testimonial</a>
          <a href=''>Contact</a>
        </ul>

        <div
          className={css.menuIcon}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
