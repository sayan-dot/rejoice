import HeaderNav from "@/components/HeaderNav";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import styles from "./Heropage.module.css";
function Hero() {
  const titleRef = useRef();
  useGSAP(
    () => {
      gsap.to(".char", {
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: "back.out(1.3)",
      });
    },
    { scope: titleRef }
  );
  return (
    <main className={styles.main}>
      <div className={styles.page1}>
        <video autoPlay muted loop src="/video/video1.mp4"></video>
        <div className={styles.page1Content}>
          <HeaderNav />
          {/* TODO: make the animation in separete component */}
          <h1 className={styles.title} ref={titleRef}>
            <span className="char">r</span>
            <span className="char">e</span>
            <span className="char">j</span>
            <span className="char">o</span>
            <span className="char">u</span>
            <span className="char">i</span>
            <span className="char">c</span>
            <span className="char">e</span>
          </h1>
        </div>
      </div>
    </main>
  );
}

export default Hero;
