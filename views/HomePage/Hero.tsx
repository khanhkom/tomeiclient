import styled from 'styled-components';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';
import NextImage from 'next/image';

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <HeroWrapper>
      <Contents>
        <Heading>Nước</Heading>
        <Description>HỖ TRỢ MÔI TRƯỜNG TRÁI ĐẤT</Description>
        <CustomOverTitle>Hãy để chúng tôi mang đến cho bạn tất cả các hệ thống xử lý nước và các ứng dụng EIA tại Việt Nam</CustomOverTitle>
        <CustomButtonGroup>
          <ImageWrapper>
            <NextImage src={'/home/smallHero1.png'} width={128} height={128} alt={'small-tomei-suiko'} />
          </ImageWrapper>
          <ImageWrapper>
            <NextImage src={'/home/smallHero1.png'} width={128} height={128} alt={'small-tomei-suiko'} />
          </ImageWrapper>
          <NextImage src={'/home/smallHero1.png'} width={128} height={128} alt={'small-tomei-suiko'} />
        </CustomButtonGroup>
      </Contents>
    </HeroWrapper>
  );
}
const ImageWrapper = styled.div`
  position: relative;
  border-radius: 0.6rem;
  overflow: hidden;
  &::before {
    float: left;
    padding-top: 5rem;
    content: '';
  }
`;
const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled.div`
  margin-top: 4rem;
  --autofit-grid-item-size: 10rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(var(--autofit-grid-item-size), 1fr));
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;
  color: #0f5e9c;
  font-weight: 700;
  margin-bottom: 3rem;
  font-family: 'Nunito', sans-serif;
  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;
  color: #0f5e9c;
  font-weight: 700;
  font-family: 'Nunito', sans-serif;
  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.03em;
  margin-top: 2rem;
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  color: #0f5e9c;
  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
