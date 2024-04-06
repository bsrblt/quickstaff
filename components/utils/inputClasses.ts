const getInputClasses = (authCtx: any) => {
  const baseInputClass =
    "block w-full sm:h-11 h-10 px-3 sm:mt-2 text-gray-700 placeholder-gray-400 border dark:placeholder-gray-600 dark:text-gray-300 dark:focus:border-color2 dark:outline-none focus:ring-color2 focus:outline-none focus:ring-1 transition-colors duration-200 ease-in-out";
  const baseCvInputClass =
    "block w-full sm:h-11 h-10 px-3 sm:mt-2 text-color2  bg-color1/10 focus:bg-white  placeholder-gray-400 border dark:placeholder-gray-600 dark:text-gray-300 dark:focus:border-color2 dark:outline-none focus:ring-color2 focus:outline-none focus:ring-1 transition-colors duration-200 ease-in-out fontpop-5";
  const validInputClass = `${baseInputClass} bg-white border-gray-400 rounded-lg`;
  const validCvMailInputClass = `${baseCvInputClass} bg-color1/10 border-gray-400 rounded-lg`;
  const invalidInputClass = `${baseInputClass} bg-red-100 border-red-400 rounded-lg`;
  const invalidCvMailInputClass = `${baseCvInputClass} bg-red-100 border-red-400 rounded-lg`;
  const validRInputClass = `${baseInputClass} bg-white border-gray-400 rounded-t-lg`;
  const invalidRInputClass = `${baseInputClass} bg-red-100 border-red-400 rounded-t-lg`;
  const dateInputClass =
    "block w-full h-[2.7rem] px-4 py-2 mt-2 font-semibold landscape:mt-0 text-gray-700 placeholder-gray-400 border rounded-lg dark:placeholder-gray-600 dark:text-gray-300 dark:focus:border-color2 dark:outline-none focus:ring-color2 focus:outline-none focus:ring-1 transition-colors duration-200 ease-in-out cursor-pointer";
  const selectorClass =
    "block w-[100%] h-[2.7rem] px-4 py-2 mt-2 font-semibold landscape:mt-0 text-gray-700 placeholder-gray-400 border rounded-lg dark:placeholder-gray-600 dark:text-gray-300 dark:focus:border-color2 dark:outline-none focus:ring-color2 focus:outline-none focus:ring-1 transition-colors duration-200 ease-in-out cursor-pointer";

  return {
    firstNameInputClass:
      authCtx &&
      (!authCtx.firstNameTouched ||
        (authCtx.firstNameTouched && authCtx?.firstNameValid))
        ? validInputClass
        : invalidInputClass,

    lastNameInputClass:
      authCtx &&
      (!authCtx.lastNameTouched ||
        (authCtx.lastNameTouched && authCtx?.lastNameValid))
        ? validInputClass
        : invalidInputClass,

    pwInputClass:
      authCtx && (!authCtx.pwTouched || (authCtx.pwTouched && authCtx?.pwValid))
        ? validInputClass
        : invalidInputClass,

    mailInputClass:
      authCtx &&
      (!authCtx.mailTouched || (authCtx.mailTouched && authCtx?.mailValid))
        ? validInputClass
        : invalidInputClass,

    cvMailInputClass:
      authCtx &&
      (!authCtx.mailTouched || (authCtx.mailTouched && authCtx?.mailValid))
        ? validCvMailInputClass
        : invalidCvMailInputClass,

    phoneNumberInputClass:
      authCtx &&
      (!authCtx.phoneNumberTouched ||
        (authCtx.phoneNumberTouched && authCtx?.phoneNumberValid))
        ? validInputClass
        : invalidInputClass,

    registerInputClass:
      authCtx &&
      (!authCtx.mailTouched || (authCtx.mailTouched && authCtx?.mailValid))
        ? validRInputClass
        : invalidRInputClass,
    regularInputClass:
      authCtx &&
      (!authCtx.inputTouched || (authCtx.inputTouched && authCtx?.inputValid))
        ? validRInputClass
        : invalidRInputClass,

    baseInputClass,
    validInputClass,
    dateInputClass,
    selectorClass,
  };
};

export default getInputClasses;
