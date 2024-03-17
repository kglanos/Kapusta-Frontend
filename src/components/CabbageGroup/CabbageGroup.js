import cabbageGroupImage from '../../images/desktop/cabbageGroupDesktop.png';
import { StyledContainer, StyledImage } from './CabbageGroup.styled';

export const CabbageGroup = () => {
  return (
    <StyledContainer>
      <StyledImage src={cabbageGroupImage} alt="Cabbages" />
    </StyledContainer>
  );
};

// import React from 'react';
// // import cabbageGroupImage from '../../images/desktop/cabbageGroupDesktop.png';
// import cabbageGroupMobile from '../../images/mobile/cabbageGroupMobile.png';
// import cabbageGroupTablet from '../../images/tablet/cabbageGroupTablet.png';
// import cabbageGroupDesktop from '../../images/desktop/cabbageGroupDesktop.png';
// import { StyledContainer, StyledImage } from './CabbageGroup.styled';
// import { useScreenSize } from '../../hooks/useScreenSize';

// const CabbageGroup = () => {
//   const { mobileScreen, tabletScreen, desktopScreen } = useScreenSize();

//   let cabbageGroupImage;
//   if (mobileScreen) {
//     cabbageGroupImage = cabbageGroupMobile;
//   } else if (tabletScreen) {
//     cabbageGroupImage = cabbageGroupTablet;
//   } else {
//     cabbageGroupImage = cabbageGroupDesktop;
//   }

//   return (
//     <StyledContainer screensize={{ mobileScreen, tabletScreen, desktopScreen }}>
//       <StyledImage src={cabbageGroupImage} alt="Cabbages" />
//     </StyledContainer>
//   );
// };

// export default CabbageGroup;
