import styled from 'styled-components';
import styles from './styles.module.css';

const Checkbox = ({ isChecked = false, onChange }) => {
  return (
    <label className={styles.container}>
      One
      <input type='checkbox' checked={isChecked} onChange={onChange} />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default Checkbox;
