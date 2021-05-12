import { useState, useEffect } from "react";
import Web3 from "web3";

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    const web3 = new Web3("http://localhost:7545");
    let values = await web3.eth.getAccounts(); // get accounts

    for (let i in values) {
      let bal = await web3.eth.getBalance(values[i]); // get balance of each acccount
      bal = Web3.utils.fromWei(bal, "ether"); // convert wei to ether

      let count = await web3.eth.getTransactionCount(values[i]); // get transaction counts

      // push each account in the list
      setAccounts((prev) => [
        ...prev,
        {
          id: i,
          address: values[i],
          balance: bal,
          txnCount: count,
        },
      ]);
    }
  };

  return (
    <div className="container">
      <h1 className="display-4">Accounts</h1>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Address</th>
            <th scope="col">Balance</th>
            <th scope="col">Txn Count</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{account.address}</td>
              <td>{account.balance} ETH</td>
              <td>{account.txnCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Accounts;
