import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import iPhoneMockup from '.././assets/images/iphonemockup.png'

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height 100vh;
  padding: 3rem calc((100vw - 1300px) /2);

  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  position: relative;
  font-family: 'Lexend Deca', sans-serif;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 7rem;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 200;
    align-text: center;
  }

  p {
    margin: 2rem 0;
    font-size: 2rem;
    line-height: 1.1;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 100;
    align-text: centre
  }
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height 100%;
  max-width: 700px;
  max-height: 700px;
`;

function AboutHero() {

  const fadeRight = {
    hidden: { opacity: 0, x: -100},
    visible: { opacity: 1, x: 0 }
  }

  const fadeLeft = {
    hidden: { opacity: 0, x: 100},
    visible: { opacity: 1, x: 0 }
  }
  
  

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <>
      <Section>
        <Container>
          <ColumnLeft>
            <Image 
              src={iPhoneMockup}
              ref={ref}
              alt='iphone mockup'
              initial="hidden"
              animate={controls}
              variants={fadeRight}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.1 }}
            />
          </ColumnLeft>
          <ColumnRight>
          <motion.h1
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={fadeLeft}
              transition={{ duration: 0.5 }}
            >
              apstro
            </motion.h1>
            <motion.p
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={fadeLeft}
              transition={{ duration: 0.5 }}
            >
              Personalised spiritual guidance powered by the planets
            </motion.p>
          </ColumnRight>
        </Container>
      </Section>
    </>
  )
}

export default AboutHero;