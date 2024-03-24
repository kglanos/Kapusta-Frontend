import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { updateUserBalance } from '../../redux/Transactions/apiTransactions';
import { updateBalance } from '../../redux/Auth/operations';
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

  const [balance, setBalance] = useState('');

  const handleModalOpen = e => {
    e.preventDefault();
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    return setBalance(balanceQuery);
  }, [balanceQuery]);

  const handleChange = e => {
    if (!Number.isNaN(e.target.value)) {
      return setBalance(parseFloat(e.target.value));
    }
  };

  const handleClick = e => {
    // e.preventDefault();
    if (balance !== '') {
      dispatch(updateBalance(balance));
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
          {balance === 0 && <ModalBalance />}
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

// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// // import { updateBalance } from '../../redux/Transactions/operations';
// import { updateBalance } from '../../redux/Auth/operations';
// import ModalBalance from '../../components/ModalStartBalance/ModalStartBalance';
// import { Confirm } from '../../components/ModalLogOutAndConfirm/ModalLogOutAndConfirm';
// import { selectBalance } from '../../redux/selectors';
// import { useRef } from 'react';
// import {
//   Form,
//   Title,
//   Input,
//   Button,
//   Label,
//   InputContainer,
//   WrapperForm,
// } from './BalanceForm.styled';

// const BalanceForm = () => {
//   const stateBalance = useSelector(selectBalance);
//   const dispatch = useDispatch();
//   const [modalOpen, setModalOpen] = useState(false);
//   let balance;
//   const form = useRef();

//   const handleSubmit = evt => {
//     evt.preventDefault();
//     balance = evt.target.balance.value;
//   };

//   const handleClick = () => {
//     dispatch(updateBalance(balance));

//     // form.current.reset();
//   };

//   const handleModalOpen = () => {
//     setModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setModalOpen(false);
//   };

//   return (
//     <>
//       <WrapperForm onSubmit={handleSubmit} ref={form}>
//         <Title htmlFor="balance">Balance:</Title>
//         <Form>
//           <InputContainer>
//             <Input
//               type="number"
//               id="balance"
//               name="balance"
//               value={balance}
//               placeholder={`${stateBalance}.00`}
//               required
//             />
//             <Label>USD</Label>
//           </InputContainer>
//           <Button type="submit" onClick={handleModalOpen}>
//             CONFIRM
//           </Button>
//           {balance === '' && <ModalBalance />}
//           {modalOpen && (
//             <Confirm
//               changeBalance="true"
//               closeModal={handleModalClose}
//               dispatch={handleClick}
//               balance={balance}
//             >
//               Are you sure?
//             </Confirm>
//           )}
//         </Form>
//       </WrapperForm>
//     </>
//   );
// };

// export default BalanceForm;
