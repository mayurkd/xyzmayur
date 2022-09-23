
import './App.css';

import Multiple from './Component/Multiple';

function App() {
  const styles = {
    center: {
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
  return (
    <div className={styles.center}>
       <Multiple />
    </div>
  );
}

export default App;
