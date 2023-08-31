import React from 'react';
import styles from './styles.module.css';

// Adheres to WAI accessibility guidelines https://www.w3.org/WAI/ARIA/apg/patterns/accordion/
/** TO-DO:
 * arrow key navigation
 * home/end key navigation
 * outline when navigating
 */
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
