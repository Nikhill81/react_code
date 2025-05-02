import styles from "./ButtonContainer.module.css"

const Buttonscontainer = () => {
    const ButtonNames = ['C', '1', '2', '3' , '4', '-', '5', '6', '*', '7', '/', '=', '9', '0', '.'];


    return (
    <div className={styles.buttonscontainer}>
        {ButtonNames.map(ButtonNames => <button className={styles.button}>{ButtonNames}</button>)}
  </div>
    );
}

export default Buttonscontainer