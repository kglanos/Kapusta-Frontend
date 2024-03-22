import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavMobile = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  gap: 4px;
  background-color: #ffffff;
`;
export const StyledNavDesktop = styled.div`
  display: flex;
`;
export const Link = styled(NavLink)`
  display: block;
  width: 158px;
  padding: 20px 0;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  color: #000000;
  font-weight: 700;
  background-color: #f5f6fb;

  @media screen and (min-width: 768px) {
    width: 138px;
    background-color: #fafbfd;
    border-radius: 18px 18px 0 0;
  }
  &:hover,
  &:focus {
    color: #ff751d;
    background-color: #fefefe;
  }
  &.active {
    color: #ffffff;
    background-color: #ff751d;
    @media screen and (min-width: 768px) {
      color: #ff751d;
      background-color: #fefefe;
    }
  }
`;