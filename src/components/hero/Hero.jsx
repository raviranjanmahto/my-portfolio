import css from "./Hero.module.scss";
import person from "../../assets/person.png";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className='primaryText'
          >
            Hey There,
            <br />
            I'm Raviranjan
          </motion.span>

          <motion.span
            variants={fadeIn("left", "tween", 0.4, 1)}
            className='secondaryText'
          >
            I design beautiful simple
            <br />
            things, And I love what i do
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.7)}
            src={person}
            alt='person'
          />
        </motion.div>

        <a className={css.email} href='mailto:rvrnjnmahto@gmail.com'>
          rvrnjnmahto@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className='primaryText'>02</div>
            <div className='secondaryText'>
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img
              src='https://udemy-certificate.s3.amazonaws.com/image/UC-54d46568-1c58-4b8d-a7f5-6870de583313.jpg'
              alt='certificate'
            />
            <span>CERTIFIED PROFESSIONAL MERN/</span>
            <span>FULL-STACK DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
