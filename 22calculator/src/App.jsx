import styles from "./App.module.css"
import Buttonscontainer from "./components/ButtonContainer"
import Display from "./components/Display"

function App() {

  return <div className={styles.calculator}>
    <Display />
    <Buttonscontainer />
  </div>
}

export default App


