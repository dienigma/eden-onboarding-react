import React, { useState } from 'react';
import Label from './FormUI/Label';
import Input from './FormUI/Input';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import LargeBtn from './LargeBtn';

const OnboardingForm = (props) => {
  const [step, setStep] = useState(1);

  const methods = useForm({
    fullName: '',
    displayName: '',
    workspaceName: '',
    workspaceURL: '',
  });

  const onSubmit = (_data) => {
    if (step === 4) return;
    setStep(step + 1);
    console.log(step);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {step === 1 && <StepOne />}
        {step === 2 && <StepTwo />}
        {step === 3 && <StepThree />}
        <LargeBtn
          type="submit"
          text="Create Workspace"
          className="w-full mt-4"
        />
      </form>
    </FormProvider>
  );
};

const StepOne = () => {
  const { register, formState } = useFormContext();

  return (
    <>
      <h3 className="font-bold text-[24px] text-center">
        Welcome! First things first...
      </h3>
      <p className="text-light-gray text-[12px] text-center">
        You can always change them later
      </p>
      <Label name="Full Name" className="mb-4 mt-4">
        <Input
          type="text"
          {...register('fullName', { required: true })}
          placeholder="steve jobs"
          className="w-full"
          error={!!formState.errors.fullName}
        />
      </Label>
      <Label name="Display Name">
        <Input
          type="text"
          {...register('displayName', { required: true })}
          placeholder="steve"
          className="w-full"
          error={!!formState.errors.displayName}
        />
      </Label>
    </>
  );
};

const StepTwo = () => {
  const { register, formState } = useFormContext();
  return (
    <>
      <h3 className="font-bold text-[24px] text-center">
        Let's set up a home for all your work
      </h3>
      <p className="text-light-gray text-[12px] text-center">
        You can always create another workspace later.
      </p>
      <Label name="Workspace Name" className="mb-4 mt-4">
        <Input
          type="text"
          {...register('workspaceName', { required: true })}
          placeholder="Eden"
          className="w-full"
          error={!!formState.errors.workspaceName}
        />
      </Label>
      <Label name="workspaceURL" isOptional={true}>
        <Input
          type="url"
          {...register('workspaceURL')}
          placeholder="steve"
          className="w-full"
          error={!!formState.errors.workspaceURL}
        />
      </Label>
    </>
  );
};

const StepThree = () => {
  const { register, setValue } = useFormContext();
  const [active, setActive] = useState(null);
  const mouseOverClass =
    'hover:border-accent focus:border-accent active:border-accent checked:border-accent';

  return (
    <>
      <h3 className="font-bold text-[24px] text-center">
        How are you planning to use Eden?
      </h3>
      <p className="text-light-gray text-[12px] text-center">
        We'll streamline your setup experience accordingly.
      </p>
      <div className="flex items-center gap-x-2 justify-center my-4 cursor-pointer">
        <div
          onClick={() => {
            setActive(1);
            setValue('purpose', 'self');
          }}
          className={`border shadow-lg rounded  flex items-center justify-center h-[150px] w-[150px] ${mouseOverClass}`}
        >
          Card 1
        </div>
        <div
          onClick={() => {
            setActive(2);
            setValue('purpose', 'team');
          }}
          className={`border shadow-lg rounded  flex items-center justify-center h-[150px] w-[150px] ${mouseOverClass}`}
        >
          Card 2
        </div>
      </div>
      <input type="hidden" {...register('purpose', { required: true })} />
    </>
  );
};

export default OnboardingForm;
