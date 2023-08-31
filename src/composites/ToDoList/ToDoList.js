import { useState, useEffect } from 'react';
import {
  ProgressBar,
  Accordion,
  Checkbox,
  AccordionItem,
} from '@/components/index';
import styles from './styles.module.css';
import { calculateCompletionPercentage, formatGroups } from './helpers';

const ToDoList = () => {
  const [rawGroupsData, setRawGroupsData] = useState([]);

  const [groupsState, setGroupsState] = useState([]);
  const [completionPercentage, setCompletionPercentage] = useState(0);

  // add comment here
  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress'
    )
      .then((response) => response.json())
      .then((data) => {
        setRawGroupsData(data);

        setGroupsState(formatGroups(data));
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  //add comment here
  useEffect(() => {
    setCompletionPercentage(
      calculateCompletionPercentage({
        formattedGroups: groupsState,
        groups: rawGroupsData,
      })
    );
  }, [groupsState]);

  const handleCheck = (groupName, taskDescription) => {
    const isChecked = groupsState[groupName][taskDescription];
    setGroupsState((prevState) => {
      const prevStateCopy = JSON.parse(JSON.stringify(prevState));
      prevStateCopy[groupName][taskDescription] = !isChecked;
      return prevStateCopy;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>Lodgify Grouped Tasks</h2>
        <ProgressBar percentageValue={completionPercentage} />
      </div>
      <Accordion>
        {rawGroupsData.map((group) => {
          const isGroupComplete =
            Object.values(groupsState[group.name]).filter(
              (isTaskComplete) => !isTaskComplete
            ).length === 0;

          return (
            <AccordionItem
              header={
                <span className={styles.itemHeader}>
                  <span aria-hidden='true'>
                    <img src='/icons/booking-features.svg'></img>
                  </span>
                  {group.name}
                </span>
              }
              key={group.name}
            >
              <div className={styles.checkboxGroup}>
                {group.tasks.map((task) => {
                  return (
                    <Checkbox
                      key={`${group.name}-${task.description}`}
                      label={task.description}
                      isChecked={groupsState[group.name][task.description]}
                      onChange={() => {
                        handleCheck(group.name, task.description);
                      }}
                    />
                  );
                })}
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default ToDoList;

// TO-DO: extract parts of this into child components
