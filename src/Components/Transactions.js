import { useState, useEffect } from "react";
import axios from "axios";
import Transaction from "./Transaction";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
    .get(`${process.env.REACT_APP_API_URL}/transactions`)
    .then((res) => {
      setTransactions(res.data);
      console.log(res.data)
    });
}, []);

  return (
    <div >
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Bank Account</th>
              <th>View Transaction</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((trans, index) => {
              return <Transaction key={index} trans={trans} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;