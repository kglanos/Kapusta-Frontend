import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
`;
export const UserArea = styled.div`
  display: flex;
  align-items: center;
`;
export const Avatar = styled.span`
  padding: 9px 12px;
  font-size: 12px;
  font-weight: 700;
  color: rgba(82, 85, 95, 1);
  letter-spacing: 0.04em;
  text-align: center;
  background-color: rgba(245, 246, 250, 1);
  border-radius: 50px;
`;
export const Name = styled.span`
  padding: 9px 20px 9px 12px;
  color: rgba(82, 85, 95, 1);
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.04em;
`;
export const LogoutButton = styled.button`
  font-size: 12px;
  font-weight: 400;
  color: rgba(82, 85, 95, 1);
  letter-spacing: 0.04em;
  border: none;
  background: none;
  text-decoration: underline;
  cursor: pointer;
  border-left: 1px solid rgba(224, 229, 235, 1);
  padding: 11px 20px;
`;
