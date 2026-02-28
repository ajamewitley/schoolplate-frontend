'use client';

import { FloatingLabel } from 'flowbite-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';

const StudentForm = () => {
  return (
    <form action="GET" className="space-y-4">
      <FloatingLabel variant="outlined" label="Full Name" type="text" required />
      <FloatingLabel variant="outlined" label="University" type="text" required />
      <Select name="interest" required>
        <SelectTrigger>
          <SelectValue placeholder="What do you need help with?" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem key="subscription" value="subscription">
            Subscription plans
          </SelectItem>
          <SelectItem key="meal" value="meal">
            Missed meal
          </SelectItem>
          <SelectItem key="payment" value="payment">
            Payment issue
          </SelectItem>
          <SelectItem key="problem" value="problem">
            Restaurant problem
          </SelectItem>
          <SelectItem key="question" value="question">
            General question
          </SelectItem>
        </SelectContent>
      </Select>
      <div className="relative">
        <textarea
          name="message"
          id="message"
          rows={3}
          className="block peer p-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 placeholder-transparent"
          placeholder=" "
          required
        ></textarea>
        <label
          htmlFor="message"
          className="absolute px-2 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 transform duration-300 -translate-y-6 scale-75 top-4 z-10 origin-[0] start-1 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Your question
        </label>
      </div>
      <FloatingLabel variant="outlined" label="Phone or WhatsApp" required />
      <Button
        variant="default"
        type="submit"
        onClick={(e) => e.preventDefault()}
        className="w-full cursor-pointer"
      >
        Send Message
      </Button>
    </form>
  );
};

export default StudentForm;
