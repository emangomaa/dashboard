

import Sidebar from "./scenes/global/sidebar/sidebar.js";
import Topbar from "./scenes/global/topbar/topbar.js";
import Navbar from "./scenes/global/navbar/navbar.js";
import Workspaces from './scenes/workspaces/workspaces.js'
const App = () => {
  return (
    <div className="app">
      <Topbar />
      <div className="row my-2">
        <div className="col-xs-6 col-md-3">
          <Sidebar />
        </div>
        <div className="col-xs-6 col-md-9" style={{ backgroundColor: "rgb(241, 217, 250)" }}>
          <Navbar />
          <Workspaces />
        </div>
      </div>
    </div>
  );
}

export default App;
