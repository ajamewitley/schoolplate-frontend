'use client';

import { FloatingLabel, HelperText } from 'flowbite-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';

const SponsorForm = () => {
  return (
    <form className="space-y-4">
      <FloatingLabel
        variant="outlined"
        type="text"
        label="Personal Name Or Organization Name"
        required
      />
      <Select name="interest" required>
        <SelectTrigger>
          <SelectValue placeholder="Area of interest" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem key="feeding" value="feeding">
            Monthly feeding support
          </SelectItem>
          <SelectItem key="support" value="support">
            Support specific students
          </SelectItem>
          <SelectItem key="partnership" value="partnership">
            SchoolPlate partnership
          </SelectItem>
          <SelectItem key="impact" value="impact">
            Impact reporting
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
        ></textarea>
        <label
          htmlFor="message"
          className="absolute px-2 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 transform duration-300 -translate-y-6 scale-75 top-4 z-10 origin-left start-1 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          Optional message
        </label>
      </div>
      <FloatingLabel id="email" variant="outlined" type="email" label="Email Address" />
      <div>
        <FloatingLabel
          id="number"
          variant="outlined"
          type="tel"
          label="WhatsApp"
          maxLength={9}
          minLength={9}
          inputMode="numeric"
          pattern="[0-9]*"
        />
        <HelperText className="mt-0">If you prefer Whatsapp reply</HelperText>
      </div>
      <Button variant="default" type="submit" className="w-full cursor-pointer">
        Request Information
      </Button>
    </form>
  );
};

export default SponsorForm;
