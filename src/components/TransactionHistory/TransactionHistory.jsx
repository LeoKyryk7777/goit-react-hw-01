import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.th}> Тип </th>
          <th className={css.th}> Сума </th>
          <th className={css.th}> Валюта </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr className={css.tr} key={item.id}>
            <td className={css.td}>{item.type}</td>
            <td className={css.td}>{item.amount}</td>
            <td className={css.td}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
