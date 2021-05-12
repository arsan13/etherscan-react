import { useState, useEffect } from "react";
import Web3 from "web3";

const Blocks = () => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    fetchBlocks();
  }, []);

  const fetchBlocks = async () => {
    const web3 = new Web3("http://localhost:7545");
    let blockNumber = await web3.eth.getBlockNumber();

    for (let i = blockNumber; i >= 0; i--) {
      let block = await web3.eth.getBlock(i);
      console.log(block);

      setBlocks((prev) => [
        ...prev,
        {
          number: block.number,
          hash: block.hash,
          gasUsed: block.gasUsed,
          gasLimit: block.gasLimit,
        },
      ]);
    }
  };

  return (
    <div className="container">
      <h1 className="display-4">Blocks</h1>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Block Number</th>
            <th scope="col">Hash</th>
            <th scope="col">Gas Used</th>
            <th scope="col">Gas Limit</th>
          </tr>
        </thead>
        <tbody>
          {blocks.map((block, index) => (
            <tr key={index}>
              <td>{block.number}</td>
              <td>{block.hash}</td>
              <td>{block.gasUsed}</td>
              <td>{block.gasLimit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Blocks;
