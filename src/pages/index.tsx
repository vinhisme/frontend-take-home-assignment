import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';

import { TodoList } from '@/client/components/TodoList'
import { CreateTodoForm } from '@/client/components/CreateTodoForm'
/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [activeTab, setActiveTab] = React.useState('all');


  const handleTabChange = (value: string) => {
    setActiveTab(value);

  };

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <Tabs.Root
          className="flex flex-col"
          value={activeTab}
          defaultValue="all"
          onValueChange={handleTabChange}
        >
          <Tabs.List className="pt-10 space-x-3">
            <Tabs.Trigger
              className="bg-white border border-gray-500 leading-none hover:text-white data-[state=active]:text-white data-[state=active]:bg-gray-700 data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:bg-gray-700 data-[state=active]:focus:shadow-black font-bold py-4 px-6 rounded-full  cursor-default"
              value="all"
            >
              All
            </Tabs.Trigger>
            <Tabs.Trigger
              className="bg-white border border-gray-500 leading-none hover:text-white data-[state=active]:text-white data-[state=active]:bg-gray-700 data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:bg-gray-700 data-[state=active]:focus:shadow-black font-bold py-4 px-6 rounded-full  cursor-default"
              value="pending"
            >
              Pending
            </Tabs.Trigger>
            <Tabs.Trigger
              className="bg-white border border-gray-500 leading-none hover:text-white data-[state=active]:text-white data-[state=active]:bg-gray-700 data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:bg-gray-700 data-[state=active]:focus:shadow-black font-bold py-4 px-6 rounded-full  cursor-default"
              value="completed"
            >
              Completed
            </Tabs.Trigger>

          </Tabs.List>
          <Tabs.Content className="pt-10" value="all">
            <TodoList />
          </Tabs.Content>
          <Tabs.Content className="pt-10" value="pending">
            <TodoList />
          </Tabs.Content>
          <Tabs.Content className="pt-10" value="completed">
            <TodoList />
          </Tabs.Content>
        </Tabs.Root>


        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
