import {
  StyledContainer,
  StyledHeading,
  StyledParagraph,
  StyledDollar,
} from './MainLogo.styled';

export const MainLogo = () => {
  return (
    <StyledContainer>
      <StyledHeading>
        Kapu<StyledDollar>$</StyledDollar>ta
      </StyledHeading>
      <StyledParagraph>SMART FINANCE</StyledParagraph>
    </StyledContainer>
  );
};
