import cabbageCoupleImage from '../../images/desktop/kapusta2.png';
import { StyledContainer, StyledImage } from './CabbageCouple.styled';

export const CabbageCouple = () => {
  return (
    <StyledContainer>
      <StyledImage src={cabbageCoupleImage} alt="Cabbages" />
    </StyledContainer>
  );
};
