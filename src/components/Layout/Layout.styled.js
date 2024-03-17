import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 100vw;
  overflow-x: auto;
  margin: 0 auto;
  padding: 0;
`;

export const Header = styled.header`
  position: fixed;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 0 13px 16px;
  margin-bottom: 16px;
  background-color: #ffffff;
  width: 100vw;

  > nav {
    display: flex;
  }
`;
export const LogoSVG = styled.svg`
  width: 90px;
  height: 31px;
`;
export const Link = styled(NavLink)`
  display: flex;
  align-items: center;

  transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
    color 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
    background-color 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
    box-shadow 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
  &:hover {
    transform: scale(1.05);
  }
`;
