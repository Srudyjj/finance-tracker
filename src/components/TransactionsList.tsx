import { Transaction } from "../types";

const TransactionList = ({ transactions }: { transactions: Transaction[] }) => {
  if (!transactions || transactions.length === 0) {
    return <p>No transactions found.</p>;
  }

  return (
    <ul className="divide-y divide-gray-200">
      {transactions.map((tx) => (
        <li
          key={tx.id}
          className="flex items-center justify-between py-4 px-4 hover:bg-gray-50 transition-colors"
        >
          <div className="flex flex-col">
            <span className="text-sm text-gray-600">
              {new Date(tx.timestamp).toLocaleDateString()}
            </span>
            <span className="font-medium text-gray-800">{tx.category}</span>
          </div>
          <div>
            <span className="font-semibold text-blue-600">
              ${tx.amount.toFixed(2)}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
