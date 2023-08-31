import Head from 'next/head';
import styles from '@/styles/Home.module.css';

import { Card } from '@/components';
import { ToDoList } from '@/composites';

export default function Home() {
  return (
    <>
      <Head>
        <title>Assignment - Steven van Blerk</title>
      </Head>
      <main>
        <Card>
          <ToDoList heading='Lodgify Grouped Tasks' />
        </Card>
      </main>
    </>
  );
}

// consider jest
// consider prop types
// consider storybook
// consider animations
// consider changing how styled components are implemented (see ProgressBar console warnings)
