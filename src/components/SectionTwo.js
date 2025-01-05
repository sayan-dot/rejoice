"use client";
import TextHighlight from "@/animations/TextHighlight";
import styles from "./sectionTwo.module.css";

function SectionTwo() {
  return (
    <div className={styles.page2}>
      <div className={styles.textWrapper}>
        <TextHighlight
          leftText="Tomorrow’s Brands, Today™"
          rightText="Paris / San Diego"
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We use the power of
          narrative, design &amp; technology to transform founder's visions into
          remarkable brands. We focus on premium, luxury and tech brands. We
          also offer two engagement models, Agency &amp; Venture. Your vision,
          your choice.
        </TextHighlight>
      </div>
    </div>
  );
}

export default SectionTwo;
