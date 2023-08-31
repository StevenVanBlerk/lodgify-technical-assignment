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
          <AccordionItem
            header={
              <>
                <span aria-hidden='true'>
                  <img src='/icons/booking-features.svg'></img>
                </span>
                {group.name}
              </>
            }
            key={group.name}
          >
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
