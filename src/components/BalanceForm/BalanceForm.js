import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalBalance from '../../components/ModalStartBalance/ModalStartBalance';
import { Confirm } from 'components/ModalLogOutAndConfirm/ModalLogOutAndConfirm';
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
  const [modalOpen, setModalOpen] = useState(false);
  const currentBalance = useSelector(selectBalance);

  const [value, setValue] = useState(currentBalance ?? 0);
  const [promptClose, setPromptClose] = useState(true);
  const form = useRef();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setValue(currentBalance.toFixed(2));
  // }, [currentBalance]);
  useEffect(() => {
    if (currentBalance !== undefined && currentBalance !== null) {
      setValue(currentBalance.toFixed(2));
    }
  }, [currentBalance]);

  const toggleWindow = () => {
    setPromptClose(prev => !prev);
  };
  const [number, setNumber] = useState('');

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
    // setValue(e.target.value);
    const { name, value } = e.target;
    switch (name) {
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handleClick = () => {
    dispatch(selectBalance({ newBalance: Number(number.replace(/\s+/g, '')) }));
    form.current.reset();
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
            <Button
              type="submit"
              onClick={handleModalOpen}
              disabled={currentBalance}
            >
              CONFIRM
            </Button>
          }
          {modalOpen && (
            <Confirm
              closeModal={handleModalClose}
              dispatch={handleClick}
              balance={selectBalance}
            >
              Are you sure?
            </Confirm>
          )}
        </Form>
      </WrapperForm>
    </>
  );
};

export default BalanceForm;
