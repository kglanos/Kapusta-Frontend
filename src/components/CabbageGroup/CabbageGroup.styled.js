import styled from 'styled-components';

import cabbageGroupMobile from '../../images/mobile/cabbageGroupMobile.png';
import cabbageGroupTablet from '../../images/tablet/cabbageGroupTablet.png';

export const StyledContainer = styled.div``;

export const StyledImage = styled.image`
  position: absolute;
  top: 104px;
  right: 0;
  width: 49px;
  height: 89px;
  background-image: url(${cabbageGroupMobile});
  background-repeat: no-repeat;
  border: none;

  @media screen and (min-width: 768px) {
    top: 84px;
    right: 0;
    background-image: url(${cabbageGroupTablet});
    background-repeat: repeat;
    width: 100%;
    height: 232px;
  }
`;
