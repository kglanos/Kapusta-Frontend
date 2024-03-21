import styled from 'styled-components';

export const StyledHomePage = styled.div`
  margin-top: 100px;
`;

export const ReportsAndBalanceContainer = styled.div`
    // @media screen and (min-width: 768px) {
    //   display: flex;
    //   align-items: baseline;
    //   justify-content: space-between;
    //   margin-bottom: 60px;
    // }
    // @media screen and (min-width: 1280px) {
    //   position: relative;
    //   margin-bottom: 8px;
    // }

    @media screen and (min-width: 769px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      padding: 20px;
    }
    @media screen and (min-width: 1280px) {
      max-width: 1098px;
    }
  }
`;

export const MobileDatePickerWrapper = styled.div`
  .datePickerMobWrap {
    width: 90px;
    margin: 0 auto 70px;
  }
`;
