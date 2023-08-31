import styled from 'styled-components';
import styles from './styles.module.css';

// https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/

const Checkbox = ({ isChecked = false, onChange, label }) => {
  return (
    <label className={styles.container}>
      <span className={styles.checkmarkWrapper}>
        <input
          className={styles.input}
          type='checkbox'
          checked={isChecked}
          onChange={onChange}
        />
        <span className={styles.checkmark}></span>
      </span>
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
