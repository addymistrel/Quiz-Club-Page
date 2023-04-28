import { insta } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You're more interested in learning  <br className="sm:block hidden" /> when you've fun.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We at Silicon Quiz Club call upon all the students who hava a flair for quizzing ? to come and indulge themselves in world full of curiosity.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={insta} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
