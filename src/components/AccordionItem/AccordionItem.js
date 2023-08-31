import { useState } from 'react';
import styled from 'styled-components';
import styles from './styles.module.css';

const Wrapper = styled.div`
  border-top: ${({ $isFirstItem }) =>
    $isFirstItem ? '1px solid var(--color-greyscale-300)' : 'none'};

  border-radius: ${({ $isFirstItem, $isLastItem }) => {
    const topRadius = $isFirstItem
      ? 'var(--border-radius-small) var(--border-radius-small)'
      : '0px 0px';

    const bottomRadius = $isLastItem
      ? 'var(--border-radius-small) var(--border-radius-small)'
      : '0px 0px';

    return `${topRadius} ${bottomRadius}`;
  }};
`;

const Chevron = styled.img`
  transform: ${({ $isExpanded }) =>
    $isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.2s ease;
`;

const Panel = styled.div`
  display: ${({ $isExpanded }) => ($isExpanded ? 'block' : 'none')};
  overflow: ${({ $isExpanded }) => ($isExpanded ? 'initial' : 'hidden')};
`;
const AccordionItem = ({ header, isFirstItem, isLastItem, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Wrapper
      className={styles.wrapper}
      $isExpanded={isExpanded}
      $isFirstItem={isFirstItem}
      $isLastItem={isLastItem}
    >
      <button
        type='button'
        className={styles.header}
        onClick={() => {
          console.log('clicked', { isExpanded });
          setIsExpanded((prevState) => !prevState);
        }}
      >
        <span>{header}</span>
        <span className={styles.chevronWrapper}>
          {isExpanded ? 'Hide' : 'Show'}
          <Chevron src='/icons/chevron-down.svg' $isExpanded={isExpanded} />
        </span>
      </button>
      <Panel className={styles.panel} $isExpanded={isExpanded}>
        {children}
      </Panel>
    </Wrapper>
  );
};

export default AccordionItem;
