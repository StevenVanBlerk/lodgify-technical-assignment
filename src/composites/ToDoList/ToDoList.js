import { useState, useEffect } from 'react';
import {
  ProgressBar,
  Accordion,
  Checkbox,
  AccordionItem,
} from '@/components/index';
import styles from './styles.module.css';
import { calculateCompletionPercentage, formatGroups } from './helpers';

const groups = [
  {
    name: 'General Info',
    tasks: [
      {
        description: 'Add name and surname',
        value: 10,
        checked: true,
      },
      {
        description: 'Add email',
        value: 15,
        checked: false,
      },
      {
        description: 'Add linkedin profile',
        value: 8,
        checked: false,
      },
      {
        description: 'Provide websites page url',
        value: 5,
        checked: true,
      },
    ],
  },
  {
    name: 'Accomiplishments',
    tasks: [
      {
        description: 'Wrote a small poem about the birthday',
        value: 23,
        checked: false,
      },
      {
        description: 'Jump three times with one leg',
        value: 32,
        checked: true,
      },
      {
        description: 'Avoid the annoying neighbor',
        value: 2,
        checked: false,
      },
      {
        description: 'Say hello to a random person',
        value: 21,
        checked: false,
      },
      {
        description: 'Fill the description in at least 3 places',
        value: 12,
        checked: true,
      },
    ],
  },
  {
    name: 'Personal retrospective',
    tasks: [
      {
        description: 'Remember a dream',
        value: 15,
        checked: true,
      },
      {
        description: 'Have a crush',
        value: 7,
        checked: true,
      },
    ],
  },
  {
    name: 'Things before leaving',
    tasks: [
      {
        description: 'Say what you feel to all the people you know',
        value: 42,
        checked: false,
      },
      {
        description: 'Get a pet',
        value: 23,
        checked: false,
      },
      {
        description: 'Buy a fashion shirt',
        value: 12,
        checked: false,
      },
    ],
  },
];

const ToDoList = () => {
  //fetch tasks here

  const groupsInitialState = formatGroups(groups);

  const [groupsState, setGroupsState] = useState(groupsInitialState);
  const [completionPercentage, setCompletionPercentage] = useState(
    calculateCompletionPercentage({ formattedGroups: groupsState, groups })
  );

  //add comment here
  useEffect(() => {
    setCompletionPercentage(
      calculateCompletionPercentage({
        formattedGroups: groupsState,
        groups,
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
        {groups.map((group) => {
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
                      label={task.description + ' - ' + task.value}
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
