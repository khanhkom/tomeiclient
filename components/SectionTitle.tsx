import styled from 'styled-components';
import { media } from 'utils/media';

const SectionTitle = styled.div`
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  font-family: 'Nunito', sans-serif;

  ${media('<=tablet')} {
    font-size: 4.6rem;
  }
`;

export default SectionTitle;
