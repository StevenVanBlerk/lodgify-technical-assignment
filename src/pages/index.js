import Head from 'next/head';

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
          <ToDoList />
        </Card>
      </main>
    </>
  );
}

// consider jest
// consider storybook
