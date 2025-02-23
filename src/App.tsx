import TransactionList from "./components/TransactionsList";
import "./App.css";

function App() {

  const transactions = [
    {
      id: "1",
      amount: 10,
      category: "Food",
      timestamp: new Date()
    },
    {
      id: "2",
      amount: 12,
      category: "Car",
      timestamp: new Date()
    },
    {
      id: "3",
      amount: 14,
      category: "Home",
      timestamp: new Date()
    }
  ]

  return (
    <>
      <div>
        <TransactionList transactions={transactions} />
      </div>
    </>
  );
}

export default App;
