"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import SplitType from "split-type";
import styled from "styled-components";
import TextReveal from "./TextReveal";

gsap.registerPlugin(ScrollTrigger);

function TextHighlight({ children, leftText, rightText }) {
  const textRef = useRef();
  const textWrapper = useRef();

  useGSAP(
    () => {
      const splitText = new SplitType(textRef.current, { types: "words" });

      gsap.to(splitText.words, {
        color: "black",
        stagger: 1,
        scrollTrigger: {
          trigger: splitText.words,
          markers: true,
          start: "bottom 18%",
          scrub: true,
        },
      });

      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: textWrapper.current,
          pin: true,
          start: "top top",
          end: "+=50%",
          pinSpacing: true,
          markers: true,
        },
      });
    },
    { scope: textWrapper }
  );

  return (
    <Wrapper ref={textWrapper}>
      <TextRevealDiv>
        <TextReveal fontSize="1.8rem">{leftText}</TextReveal>
        <TextReveal fontSize="1.8rem">{rightText}</TextReveal>
      </TextRevealDiv>

      <TextBody ref={textRef}>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        {children}
      </TextBody>
    </Wrapper>
  );
}

export default TextHighlight;

const Wrapper = styled.div`
  position: relative;
  height: auto;
  overflow: hidden;
`;

const TextRevealDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4vw;
  border-bottom: 1px solid black;
  padding-bottom: 1rem;
`;

const TextBody = styled.p`
  margin-top: 4vw;
  color: rgba(0, 0, 0, 0.365);
  font-size: 4.6vw;
`;
