import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Accounts from "./Accounts";
import Blocks from "./Blocks";
import DApp from "./DApp";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path={["/", "/accounts"]} exact component={Accounts} />
        <Route path="/blocks" component={Blocks} />
        <Route path="/dapp" component={DApp} />
      </div>
    </Router>
  );
}

export default App;
