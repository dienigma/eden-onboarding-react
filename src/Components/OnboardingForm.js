import React, { useState } from 'react';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { AiFillCheckCircle } from 'react-icons/ai';
import { FaUserAlt, FaUsers } from 'react-icons/fa';
import BreadCrumb from './BreadCrumb';
import Input from './FormUI/Input';
import Label from './FormUI/Label';
import { FormSubtitle, FormTitle, SelectionCard } from './Fragments';
import LargeBtn from './LargeBtn';

const OnboardingForm = (props) => {
  const [step, setStep] = useState(1);

  const methods = useForm({
    fullName: '',
    displayName: '',
    workspaceName: '',
    workspaceURL: '',
  });

  const onSubmit = (data) => {
    if (step === 4) {
      console.log(data);
      return;
    }
    setStep(step + 1);
  };
  return (
    <>
      <BreadCrumb currentStep={step} />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="mx-8">
          {step === 1 && <StepOne />}
          {step === 2 && <StepTwo />}
          {step === 3 && <StepThree />}
          {step === 4 && <StepFour />}
          <LargeBtn
            type="submit"
            text={
              step === 4
                ? `Launch ${methods.watch('workspaceName')}`
                : 'Create Workspace'
            }
            className="w-full mt-4"
          />
        </form>
      </FormProvider>
    </>
  );
};

const StepOne = () => {
  const { register, formState } = useFormContext();
  return (
    <>
      <FormTitle text="Welcome! First things first..." />
      <FormSubtitle text="You can always change them later" />
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
      <FormTitle text="Let's set up a home for all your work" />
      <FormSubtitle text="You can always create another workspace later." />
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
        <div className="flex">
          <span className="border bg-lighter-gray flex items-center justify-center w-1/2 border-light-gray text-[10px] text-light-gray rounded-tl rounded-bl">
            www.eden.com/
          </span>
          <Input
            type="text"
            {...register('workspaceURL')}
            placeholder="Example"
            className="w-full rounded-none rounded-tr rounded-br"
            error={!!formState.errors.workspaceURL}
          />
        </div>
      </Label>
    </>
  );
};

const StepThree = () => {
  const { register, setValue } = useFormContext();
  const [active, setActive] = useState(null);

  return (
    <>
      <FormTitle text="How are you planning to use Eden?" />
      <FormSubtitle text="We'll streamline your setup experience accordingly." />
      <div className="flex items-center gap-x-2 justify-center my-4 cursor-pointer">
        <SelectionCard
          activeKey={1}
          currentActive={active}
          onClick={() => {
            setActive(1);
            setValue('purpose', 'self');
          }}
          icon={<FaUserAlt />}
          title="For myself"
          subTitle="Write better. Think more clearly. Stay organized."
        />
        <SelectionCard
          activeKey={2}
          currentActive={active}
          onClick={() => {
            setActive(2);
            setValue('purpose', 'team');
          }}
          icon={<FaUsers />}
          title="With my team"
          subTitle="Wikis, docs, tasks & projects, all in one place."
        />
      </div>
      <input type="hidden" {...register('purpose', { required: true })} />
    </>
  );
};

const StepFour = () => {
  const { watch } = useFormContext();
  return (
    <div className="flex flex-col justify-center gap-y-4 items-center">
      <AiFillCheckCircle color="#5a4ad1" size={'3em'} />
      <FormTitle text={`Congratulations, ${watch('displayName')}`} />
      <FormSubtitle text="You have completed onboarding, you can start using the Eden!" />
    </div>
  );
};

export default OnboardingForm;
