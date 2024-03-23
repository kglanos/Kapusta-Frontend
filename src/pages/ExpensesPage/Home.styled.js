import styled from 'styled-components';

export const StyledHomePage = styled.div`
  margin-top: 14px;

  @media screen and (min-width: 768px) {
    margin-top: 96px;
  }
`;

export const ReportsAndBalanceContainer = styled.div`

    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      margin-bottom: 60px;
      margin-right: 32px;
  
    }
    @media screen and (min-width: 1280px) {
      max-width: 1098px;
      margin-bottom: 8px;
            margin-right: 91px;

    }
  }
`;

export const MobileDatePickerWrapper = styled.div`
  .datePickerMobWrap {
    width: 90px;
    margin: 0 auto 70px;
  }
`;
