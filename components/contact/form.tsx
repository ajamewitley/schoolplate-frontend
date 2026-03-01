'use client';

import { TabItem, Tabs, TabsRef } from 'flowbite-react';
import RestaurantForm from './restaurantForm';
import SponsorForm from './sponsorForm';
import StudentForm from './studentForm';
import { RefObject } from 'react';

const Form = ({ tabsRef }: { tabsRef: RefObject<TabsRef | null> }) => {
  return (
    <section id="support" className="py-16 lg:py-20">
      <div className="max-w-xl mx-auto px-2">
        <h2 className="text-3xl font-bold text-center mb-6">Support</h2>

        <Tabs
          id="form"
          aria-label="Support form"
          variant="underline"
          ref={tabsRef}
          className="flex justify-around"
        >
          <TabItem active title="Student Help">
            <p className="text-center text-gray-500 mb-4 mt-2">
              Ask any question about feeding, subscription or daily meals.
            </p>
            <StudentForm />
          </TabItem>
          <TabItem title="Restaurant Info">
            <p className="text-center text-gray-500 mb-4 mt-2">
              Ask about how the feeding partnership works before joining.
            </p>
            <RestaurantForm />
          </TabItem>
          <TabItem title="Sponsor Info">
            <p className="text-center text-gray-500 mb-4 mt-2">
              Learn how you or your organization can support students through feeding.
            </p>
            <SponsorForm />
          </TabItem>
        </Tabs>
      </div>
    </section>
  );
};

export default Form;
