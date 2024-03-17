import cabbageCoupleImage from '../../images/desktop/cabbageCoupleDesktop.png';
import { StyledContainer, StyledImage } from './CabbageCouple.styled';

export const CabbageCouple = () => {
  return (
    <StyledContainer>
      <StyledImage src={cabbageCoupleImage} alt="Cabbages" />
    </StyledContainer>
  );
};
