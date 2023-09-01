import styles from './styles.module.css';
import styled from 'styled-components';
// TO-DO: check W3A accessibility guideline https://www.w3.org/WAI/ARIA/apg/patterns/meter/

const PercentageBar = styled.div`
  width: ${({ width }) => width};
`;

const ProgressBar = ({ id, percentageValue }) => {
  return (
    <div className={styles.outerBar}>
      <PercentageBar
        id={id}
        className={styles.innerBar}
        width={`${percentageValue}%`}
        role='meter'
        aria-valuenow={percentageValue}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {percentageValue}%
      </PercentageBar>
    </div>
  );
};

export default ProgressBar;
