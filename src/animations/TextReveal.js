import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);
function TextReveal({children,fontSize}) {
  const containerRef = useRef();
  const char = useRef();
  useGSAP(
    () => {
      gsap.to(char.current, {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: char.current,
        },
      });
    },
    { scope: containerRef }
  );
  return (
    <Clip ref={containerRef}>
      <Words ref={char} fontSize={fontSize}>{children}</Words>
    </Clip>
  );
}

export default TextReveal;

const Clip = styled.div`
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
`;
const Words = styled.span`
  display: inline-block;
  font-size: ${props => props.fontSize || "2rem"};
  transform: translateY(110px);
  color: black;
`;
