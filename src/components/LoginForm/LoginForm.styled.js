import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 53px auto 105px auto;
  width: 280px;
  padding: 40px 20px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  box-shadow: 0px 10px 60px 0px rgba(170, 178, 197, 0.2);

  @media screen and (min-width: 768px) {
    margin: 80px auto 155px auto;  
    padding: 56px 83px;
    width: 426px;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 173px;
    margin: 0;
    left: 763px;
    right: 91px;
  }
`;

export const FormAdvice = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  width: 222px;
  text-align: center;
  letter-spacing: 0.04em;
  line-height: 1.4;
  color: #52555f;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: auto;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 29px;
  }
`;

export const FormAdviceSecond = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  width: 238px;
  text-align: left;
  letter-spacing: 0.04em;
  line-height: 1.4;
  color: #52555f;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 29px;
  }
`;

export const GoogleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto; 
  margin-right: auto; 
  column-gap: 9.5px;
  border: none;
  padding: 10px 19px;
  border-radius: 26px;
  cursor: pointer;
  margin-bottom: 32px;
  box-shadow: 1px 2px 3px 0px rgba(170, 178, 197, 0.2);
`;

export const GoogleText = styled.span`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 1.17;
`;

export const FormForm = styled.form`
  row-gap: 8px;
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.04em;
  margin-bottom: 12px;
  color: rgba(0, 0, 0, 1);

  @media screen and (min-width: 768px) {
    color: rgba(0, 0, 0, 1);
    font-size: 12px;
    letter-spacing: 0.04em;
  }
`;

export const FormInput = styled.input`
  padding: 17px 0 17px 20px;
  font-size: 14px;
  letter-spacing: 0.04em;
  text-align: left;
  min-width: 240px;
  border-radius: 30px;
  border: none;
  margin-bottom: 20px;
  background-color: #f6f7fb;
  color: rgba(166, 171, 185, 1);

  @media screen and (min-width: 768px) {
    padding: 17px 0 17px 20px;
    min-width: 259px;
    margin-bottom: 32px;
  }
`;

export const FormButtons = styled.div`
  display: flex;
  column-gap: 4px;

  @media screen and (min-width: 768px) {
    column-gap: 15px;
  }
`;

export const FormButton = styled.button`
  display: flex; 
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  color: #52555f;
  letter-spacing: 0.02em;
  align-items: center;
  border: none;
  border-radius: 16px;
  padding: 12px 31px;
  background-color: #f5f6fb;
  box-shadow: 1px 3px 5px 0px rgba(82, 85, 95, 0.15);
  width: 50%; 

  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #ff751d;
    box-shadow: rgba(255, 107, 8, 0.35) 1px 3px 5px 0px;
  }

  @media screen and (min-width: 768px) {
    padding: 12px 34px;
  }
`;