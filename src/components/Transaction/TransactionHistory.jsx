import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <div className={s.container}>
    <table className={s.transactionHistory}>
      <thead className={s.headerTable}>
        <tr className={s.listTabel}>
          <th className={s.itemTabel}>Type</th>
          <th className={s.itemTabel}>Amount</th>
          <th className={s.itemTabel}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.bodyTabel}>
        {items.map(item => (
          <tr className={s.listTabel} key={item.id}>
            <td className={s.itemTabel}>{item.type}</td>
            <td className={s.itemTabel}>{item.amount}</td>
            <td className={s.itemTabel}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

TransactionHistory.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
