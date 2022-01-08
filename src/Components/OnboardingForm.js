import React from 'react';
import Label from './FormUI/Label';
import Input from './FormUI/Input';

const OnboardingForm = () => {
  return (
    <form>
      <Label name="Workspace Name">
        <Input
          type="text"
          onChange={console.log}
          placeholder="steve jobs"
          className="w-full"
        />
      </Label>
    </form>
  );
};

export default OnboardingForm;
