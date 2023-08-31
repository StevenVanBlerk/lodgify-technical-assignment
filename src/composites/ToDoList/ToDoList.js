import { useState } from 'react';
import {
  ProgressBar,
  Accordion,
  Checkbox,
  AccordionItem,
} from '@/components/index';
import styles from './styles.module.css';

const groups = [
  {
    name: 'Group 1', //name of the group in the accordion
    tasks: [
      //the lists of the checkboxes
      {
        description: 'Task 1 - 1', //the label of the checkbox
        value: 23, // the amount of value will increase the progress if checked
        checked: false, //if it's checked by default
      },
    ],
  },
  {
    name: 'Group 2', //name of the group in the accordion
    tasks: [
      //the lists of the checkboxes
      {
        description: 'Task 2 - 1', //the label of the checkbox
        value: 23, // the amount of value will increase the progress if checked
        checked: false, //if it's checked by default
      },
    ],
  },
  {
    name: 'Group 3', //name of the group in the accordion
    tasks: [
      //the lists of the checkboxes
      {
        description: 'Task 3 - 1', //the label of the checkbox
        value: 23, // the amount of value will increase the progress if checked
        checked: false, //if it's checked by default
      },
    ],
  },
];

const ToDoList = ({ heading }) => {
  //fetch tasks here

  // calculate percentageValue here
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>{heading}</h2>
        <ProgressBar percentageValue={75} />
      </div>
      <Accordion>
        {groups.map((group) => (
          <AccordionItem headerText={group.name} key={group.name}>
            {group.tasks.map((task) => {
              console.log('key', `${group.name}-${task.description}`);
              return (
                <Checkbox
                  key={`${group.name}-${task.description}`}
                  label={task.description}
                  checked={isChecked}
                  onChange={(value) => {
                    console.log('value', value);
                    setIsChecked(value);
                  }}
                />
              );
            })}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ToDoList;
