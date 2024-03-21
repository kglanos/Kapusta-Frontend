import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalBalance from '../../components/ModalStartBalance/ModalStartBalance';
import { selectBalance } from '../../redux/selectors';
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

  const [value, setValue] = useState(currentBalance ?? 0);
  const [promptClose, setPromptClose] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setValue(currentBalance.toFixed(2));
  }, [currentBalance]);

  const toggleWindow = () => {
    setPromptClose(prev => !prev);
  };

  const onSubmit = e => {
    e.preventDefault();
    const data = e.target.elements.balance.value;
    const balance = Number(data);

    const sevedBalance = {
      newBalance: balance,
    };
    dispatch(setUserBalance(sevedBalance));
    if (currentBalance) {
      setPromptClose(prev => !prev);
    }
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <WrapperForm>
        <Title>Balance:</Title>
        <Form onSubmit={onSubmit}>
          <InputContainer>
            <Input
              type="number"
              readOnly={currentBalance}
              name="balance"
              pattern="[0-9, .UAH]*"
              value={value}
              onChange={onChange}
            />
            <Label>UAH</Label>
          </InputContainer>
          {promptClose && currentBalance <= 0 && (
            <ModalBalance onClose={toggleWindow} />
          )}
          {
            <Button type="submit" disabled={currentBalance}>
              CONFIRM
            </Button>
          }
        </Form>
      </WrapperForm>
    </>
  );
};

export default BalanceForm;
