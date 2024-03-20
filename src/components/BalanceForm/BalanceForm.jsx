import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalBalance from '../../components/ModalStartBalance/ModalStartBalance';
import selectBalance from '../../redux/Balance/selectBalance';
import setUserBalance from '../../redux/Balance/operations';
import {
  Form,
  Title,
  Input,
  Button,
  Label,
  InputContainer,
  WrapperForm,
} from './BalanceForm.styled';

const BalanceForm = () => {
  const currentBalance = useSelector(selectBalance);
  const dispatch = useDispatch();

  const [value, setValue] = useState(currentBalance || '');
  const [promptClose, setPromptClose] = useState(true);

  useEffect(() => {
    if (currentBalance !== undefined) {
      setValue(currentBalance.toFixed(2));
    }
  }, [currentBalance]);

  const toggleWindow = () => {
    setPromptClose(prev => !prev);
  };

  const onSubmit = e => {
    e.preventDefault();
    const data = e.target.elements.balance.value;
    const balance = parseFloat(data);

    if (!isNaN(balance)) {
      const savedBalance = {
        newBalance: balance,
      };
      dispatch(setUserBalance(savedBalance));
      if (currentBalance !== undefined) {
        setPromptClose(prev => !prev);
      }
    } else {
      console.error('Invalid balance input');
    }
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <WrapperForm>
      <Title>Balance:</Title>
      <Form onSubmit={onSubmit}>
        <InputContainer>
          <Input
            type="number"
            step="0.01"
            name="balance"
            value={value}
            onChange={onChange}
          />
          <Label>UAH</Label>
        </InputContainer>
        {promptClose && currentBalance <= 0 && (
          <ModalBalance onClose={toggleWindow} />
        )}
        <Button type="submit" disabled={currentBalance !== undefined}>
          CONFIRM
        </Button>
      </Form>
    </WrapperForm>
  );
};

export default BalanceForm;
