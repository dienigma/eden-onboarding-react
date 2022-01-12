const steps = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const BreadCrumb = ({ currentStep }) => {
  const currentClass = 'bg-white border border-light-gray text-light-gray';
  const doneClass = 'bg-accent text-white';
  return (
    <div
      aria-label="Progress"
      className="flex items-center justify-center mt-4 mb-16 cursor-default"
    >
      <ol role="list" className="flex items-center">
        {steps.map((step, stepIdx) => {
          const isDone =
            (currentStep === 1 && parseInt(step.name) === currentStep) ||
            currentStep > parseInt(step.name);
          return (
            <li
              key={step.name}
              className={classNames(
                stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '',
                'relative'
              )}
            >
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div
                  className={`${
                    currentStep === 4 || isDone
                      ? 'bg-accent-light'
                      : 'bg-lighter-gray'
                  } h-0.5 w-full`}
                />
              </div>
              <span
                className={`relative w-8 h-8 flex items-center justify-center rounded-full ${
                  currentStep === 4 || isDone ? doneClass : currentClass
                }`}
              >
                <span>{step.name}</span>
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default BreadCrumb;
