export const FormTitle = ({ text }) => {
  return <h3 className="font-bold text-[24px] text-center">{text}</h3>;
};

export const FormSubtitle = ({ text }) => {
  return <p className="text-light-gray text-[12px] text-center">{text}</p>;
};

export const SelectionCard = ({
  onClick,
  currentActive,
  title,
  subTitle,
  activeKey,
  icon,
}) => {
  const mouseOverClass =
    'hover:border-accent focus:border-accent active:border-accent checked:border-accent';

  return (
    <div
      onClick={onClick}
      className={`border ${
        activeKey === currentActive && 'border-accent'
      } shadow-lg rounded  flex flex-col justify-center h-[150px] w-[150px] ${mouseOverClass} p-4 gap-y-2`}
    >
      {icon}
      <p className="font-bold text-[12px]">{title}</p>
      <p className="text-light-gray text-[12px] text-left">{subTitle}</p>
    </div>
  );
};
