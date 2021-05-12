import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Accounts from "./Accounts";
import Blocks from "./Blocks";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path={["/", "/accounts"]} exact component={Accounts} />
        <Route path="/blocks" component={Blocks} />
      </div>
    </Router>
  );
}

export default App;
