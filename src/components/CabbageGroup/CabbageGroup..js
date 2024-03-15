import cabbageGroupImage from '../../images/desktop/kapusta.png';
import { StyledContainer, StyledImage } from './CabbageGroup.styled';

export const CabbageGroup = () => {
  return (
    <StyledContainer>
      <StyledImage src={cabbageGroupImage} alt="Cabbages" />
    </StyledContainer>
  );
};
