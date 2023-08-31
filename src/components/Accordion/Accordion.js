import React from 'react';
import styles from './styles.module.css';

const Accordion = ({ children }) => {
  return (
    <div className={styles.container}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isFirstItem: index === 0,
          isLastItem: index === children.length - 1,
        })
      )}
    </div>
  );
};

export default Accordion;
