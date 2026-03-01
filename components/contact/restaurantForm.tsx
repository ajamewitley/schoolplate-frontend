'use client';

import { FloatingLabel } from 'flowbite-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';

const RestaurantForm = () => {
  return (
    <form action="GET" className="space-y-4">
      <FloatingLabel variant="outlined" label="Restaurant Name" type="text" required />
      <FloatingLabel variant="outlined" label="Location" type="text" required />
      <Select name="interest" required>
        <SelectTrigger>
          <SelectValue placeholder="What would you like to know?" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem key="payment" value="payment">
            How payments work
          </SelectItem>
          <SelectItem key="pricing" value="pricing">
            Meal pricing structure
          </SelectItem>
          <SelectItem key="volume" value="volume">
            Daily Student volume
          </SelectItem>
          <SelectItem key="partnership" value="partnership">
            General partnership info
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
      <FloatingLabel
        variant="outlined"
        type="tel"
        label="Phone or WhatsApp"
        maxLength={9}
        minLength={9}
        inputMode="numeric"
        pattern="[0-9]*"
        required
      />
      <Button variant="default" type="submit" className="w-full cursor-pointer">
        Send Inquiry
      </Button>
    </form>
  );
};

export default RestaurantForm;
