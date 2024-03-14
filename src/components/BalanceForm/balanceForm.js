// import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { userPutBallance } from '../../redux/asyncthunc';
// import ModalStartBalance from '../ModalStartBalance/ModalStartBalance';

// import s from './balanceForm.module.scss';

// const BalanceForm = () => {
//   const dispatch = useDispatch();
//   const ballanceQuery = useSelector(state => state.auth.balance);
//   const rebalancing = useSelector(state => state.auth.rebalancing);
//   const [ballance, setBallance] = useState('');
//   useEffect(() => {
//     if (rebalancing) {
//       return setBallance(ballanceQuery);
//     }
//   }, [ballanceQuery]);
//   const handleChange = e => {
//     if (!rebalancing) {
//       if (!Number.isNaN(e.target.value)) {
//         return setBallance(parseFloat(e.target.value));
//       }
//     }
//   };

//   const handleClick = e => {
//     e.preventDefault();
//     if (!rebalancing & (ballance !== '')) {
//       dispatch(userPutBallance(ballance));
//     }
//   };
//   return (
//     <form className={s.form}>
//       <label htmlFor="balance" className={s.label}>
//         Balance:
//       </label>
//       <input
//         type="number"
//         id="balance"
//         placeholder="00.00 UAH"
//         value={ballance}
//         className={s.input}
//         onChange={handleChange}
//       />

//       <button className={s.btn} type="button" onClick={handleClick}>
//         Confirm
//       </button>
//       {ballance === '' && <ModalStartBalance />}
//     </form>
//   );
// };

// export default BalanceForm;
