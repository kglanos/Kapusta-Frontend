import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userPutBallanse } from 'components/ModalStartBalanse/modalStartBalanse';

import s from './balancceform.module.scss';

const BalanceForm = () => {
  const dispatch = useDispatch();
  const ballanceQuery = useSelector(state => state.auth.balance);
  const rebalancing = useSelector(state => state.auth.rebalancing);
  const [ballance, setBallance] = useState('');
  useEffect(() => {
    if (rebalancing) {
      return setBallance(ballanceQuery);
    }
  }, [ballanceQuery]);
  const handleChange = e => {
    if (!rebalancing) {
      if (!Number.isNaN(e.target.value)) {
        return setBallance(parseFloat(e.target.value));
      }
    }
  };

  const handleClick = e => {
    e.preventDefault();
    if (!rebalancing & (ballance !== '')) {
      dispatch(userPutBallanse(ballance));
    }
  };
  return (
    <form className={s.form}>
      <label htmlFor="balance" className={s.label}>
        Balance:
      </label>
      <input
        type="number"
        id="balance"
        placeholder="00.00 UAH"
        value={ballance}
        className={s.input}
        onChange={handleChange}
      />

      <button className={s.btn} type="button" onClick={handleclick}>
        Confirm
      </button>
      {ballance === '' && <ModalStartBalanse />}
    </form>
  );
};

export default BalanceForm;
