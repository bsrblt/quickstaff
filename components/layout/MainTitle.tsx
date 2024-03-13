interface MainTitleProps {
  textBig: React.ReactNode;
  textSmall: React.ReactNode;
}

const MainTitle: React.FC<MainTitleProps> = ({ textBig, textSmall }) => {
  return (
    <div className="flex flex-col mt-[10rem] landscape:mt-[8rem] mb-[1rem] sm:mt-[10rem] sm:mb-[8rem] landscape:mb-[1rem] items-start h-1/5 justify-center gap-1">
      {textBig}
      {textSmall}
    </div>
  );
};

export default MainTitle;
