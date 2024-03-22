import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserBalance } from '../../redux/Transactions/apiTransactions';
import ModalBalance from '../../components/ModalStartBalance/ModalStartBalance';
import { Confirm } from 'components/ModalLogOutAndConfirm/ModalLogOutAndConfirm';
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

  const dispatch = useDispatch();
  const balanceQuery = useSelector(state => state.auth.balance);
  const rebalancing = useSelector(state => state.auth.rebalancing);
  const [balance, setBalance] = useState('');

  const handleModalOpen = e => {
    e.preventDefault();
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (rebalancing) {
      return setBalance(balanceQuery);
    }
  }, [balanceQuery, rebalancing]);

  const handleChange = e => {
    if (!rebalancing) {
      if (!Number.isNaN(e.target.value)) {
        return setBalance(parseFloat(e.target.value));
      }
    }
  };

  const handleClick = e => {
    e.preventDefault();
    if (!rebalancing & (balance !== '')) {
      dispatch(updateUserBalance(balance));
    }
  };
  return (
    <>
      <WrapperForm>
        <Title htmlFor="balance">Balance:</Title>
        <Form>
          <InputContainer>
            <Input
              type="number"
              id="balance"
              placeholder="00.00"
              value={balance}
              onChange={handleChange}
            />
            <Label>USD</Label>
          </InputContainer>
          <Button type="submit" onClick={handleModalOpen}>
            CONFIRM
          </Button>
          {balance === '' && <ModalBalance />}
          {modalOpen && (
            <Confirm closeModal={handleModalClose} dispatch={handleClick}>
              Are you sure?
            </Confirm>
          )}
        </Form>
      </WrapperForm>
    </>
  );
};

export default BalanceForm;
