import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  text-align: center;
  margin-top: 135px;
  font-size: 35px;
  color: red;

  @media screen and (min-width: 768px) {
    margin-top: 220px;
    font-size: 45px;
  }
`;
