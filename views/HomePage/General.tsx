import NextImage from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import Collapse from 'components/Collapse';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import ThreeLayersCircle from 'components/ThreeLayersCircle';
import { media } from 'utils/media';
import { motion } from 'framer-motion';

const TABS = [
  {
    title: 'Thông tin nổi bật 1',
    description: '<p>Tập đoàn hàng đầu và tiên phong trong lĩnh vực xử lý nước / nước thải tại Nhật Bản từ năm 1946</p>',
    imageUrl: '/home/General1.png',
    baseColor: '249,82,120',
    secondColor: '221,9,57',
  },
  {
    title: 'Thông tin nổi bật 2',
    description: '<p>Tập đoàn hàng đầu và tiên phong trong lĩnh vực xử lý nước / nước thải tại Nhật Bản từ năm 1946</p>',
    imageUrl: '/home/General1.png',
    baseColor: '57,148,224',
    secondColor: '99,172,232',
  },
  {
    title: 'Thông tin nổi bật 3',
    description: '<p>Tập đoàn hàng đầu và tiên phong trong lĩnh vực xử lý nước / nước thải tại Nhật Bản từ năm 1946</p>',
    imageUrl: '/home/General2.png',
    baseColor: '88,193,132',
    secondColor: '124,207,158',
  },
];

export default function General() {
  const [currentTab, setCurrentTab] = useState(TABS[0]);

  const imagesMarkup = (
    <ImageContainer>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <NextImage src={TABS[0].imageUrl} alt={TABS[0].title} layout="fixed" height={700} width={300} objectFit="fill" />
      </motion.div>
      <RightImage>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <NextImage src={TABS[1].imageUrl} alt={TABS[1].title} layout="fixed" height={370} width={300} objectFit="fill" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          style={{ marginTop: '10px' }}
        >
          <NextImage src={TABS[2].imageUrl} alt={TABS[2].title} layout="fixed" height={200} width={300} objectFit="fill" />
        </motion.div>
      </RightImage>
    </ImageContainer>
  );

  const tabsMarkup = TABS.map((singleTab, idx) => {
    // const isActive = singleTab.title === currentTab.title;
    const isActive = true;

    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1, translateX: 0 },
          hidden: { opacity: 1, scale: 1, translateX: -100 },
        }}
        style={{ marginTop: '10px' }}
        key={idx}
      >
        <Tab isActive={isActive} key={idx}>
          <TabTitleContainer>
            <CircleContainer>
              <ThreeLayersCircle baseColor={isActive ? 'transparent' : singleTab.baseColor} secondColor={singleTab.secondColor} />
            </CircleContainer>
            <h4>{singleTab.title}</h4>
          </TabTitleContainer>
          <Collapse isOpen={isActive} duration={300}>
            <TabContent>
              <div dangerouslySetInnerHTML={{ __html: singleTab.description }}></div>
            </TabContent>
          </Collapse>
        </Tab>
      </motion.div>
    );
  });

  function handleTabClick(idx: number) {
    setCurrentTab(TABS[idx]);
  }

  return (
    <GeneralWrapper>
      <GalleryWrapper>
        <TabsContainer>
          <OverTitle>TỔNG QUAN</OverTitle>
          <SectionTitle>Giới thiệu tổng quát về Tomei suiko</SectionTitle>
          <Description>
            <b>Tomei suiko</b> đang phát triển mạng lưới toàn cầu ở nước ngoài để công nghệ hàng đầu thế giới của họ có thể được sử dụng ở
            nhiều quốc gia và khu vực hơn.
          </Description>
          {tabsMarkup}
        </TabsContainer>
        {imagesMarkup}
      </GalleryWrapper>
    </GeneralWrapper>
  );
}

const GeneralWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const GalleryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8rem;

  ${media('<=desktop')} {
    flex-direction: column;
  }
`;
const OverTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #0f5e9c;

  font-family: 'Nunito', sans-serif;
  ${media('<=tablet')} {
    font-size: 1rem;
  }
`;
const Description = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #808080;

  font-family: 'Nunito', sans-serif;
  ${media('<=tablet')} {
    font-size: 1rem;
  }
`;

const RightImage = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const TabsContainer = styled.div`
  flex: 2;
  margin-right: 4rem;

  & > *:not(:first-child) {
    margin-top: 2rem;
  }

  ${media('<=desktop')} {
    margin-right: 0;
    margin-bottom: 4rem;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: row;
  ${media('<=desktop')} {
    width: '100%';
  }
`;

const Tab = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-lg);
  opacity: ${(p) => (p.isActive ? 1 : 0.6)};
  cursor: pointer;
  border-radius: 2rem;
  transition: opacity 0.2s;

  font-size: 1.6rem;
  font-weight: bold;

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const TabTitleContainer = styled.div`
  display: flex;
  align-items: center;

  h4 {
    flex: 1;
  }
`;

const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  padding-left: calc(5rem + 1.5rem);

  ${media('<=tablet')} {
    padding-left: calc(4rem + 1.25rem);
  }

  p {
    font-weight: normal;
  }
`;

const CircleContainer = styled.div`
  flex: 0 calc(5rem + 1.5rem);

  ${media('<=tablet')} {
    flex: 0 calc(4rem + 1.25rem);
  }
`;
