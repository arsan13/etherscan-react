import { useState } from "react";
import Web3 from "web3";
import { StorageABI } from "../contracts/Storage";

const DApp = () => {
  const [val, setVal] = useState(0);
  const [getVal, setGetVal] = useState(false);
  const [getNum, setGetNum] = useState(0);

  const web3 = new Web3("http://localhost:7545");
  web3.eth.defaultAccount = web3.eth.accounts[0];

  const contractAddress = "0xE373744F88de16f115EE2d1C56f8f1ced0d1570f";
  const storage = new web3.eth.Contract(StorageABI, contractAddress); // contract object

  const setData = async (e) => {
    e.preventDefault();

    const account = "0x571bfAaa930BaA9EF854a8f2f6a1d979B5105821";
    const response = await storage.methods.store(val).send({ from: account });
    console.log(response);
    setVal(0);
  };

  const getData = async (e) => {
    e.preventDefault();

    setGetVal(!getVal);
    let data = await storage.methods.retrieve().call();
    setGetNum(data);
  };

  const handleClear = () => {
    setVal(0);
    setGetNum(0);
    setGetVal(false);
  };

  return (
    <div className="container">
      <h1 className="display-4">DApp</h1>
      <hr />
      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Enter data"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button
          className="btn btn-outline-primary"
          type="button"
          id="button1"
          onClick={setData}
        >
          Store
        </button>
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button2"
          onClick={getData}
        >
          Retrieve
        </button>
        <button
          className="btn btn-outline-danger"
          type="button"
          id="button3"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
      {getVal && <p>Value = {getNum}</p>}
    </div>
  );
};

export default DApp;
