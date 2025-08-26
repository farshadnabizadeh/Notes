type PersonaCardProps = {
    image: StaticImageData | string;
    title: string;
    signin?: string;
    onClick?: (link: string) => void;  // Updated this line
    link: string;
    icon: React.ReactNode;              // e.g. <AlertIcon />
    hint: React.ReactNode;              // text or JSX for the hint
    className?: string;                 // wrapper class
    placement?: Placement;              // default: 'top'
    hintClassName?: string; 
    e: React.ChangeEvent<HTMLInputElement>
};


<button
    onClick={() => onClick && onClick(link)}
    className="cursor-pointer items-center gap-2 rounded-md w-[100px] h-[32px] flex justify-center py-1.5 text-[13px] font-bold text-[#ffffff] bg-[#D6A727] hover:bg-[#EAC34B] transition"
>
    {signin}
    <span className='rotate-180'><DropDown fill='#ffffff' width='16' height='16' /></span>
</button>


import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type StepStatus = {
  inprogress: boolean;
  pending: boolean;
  done: boolean;
};

export type Step = {
  lable: string;
  iconType: 'Profile' | 'RequestForm' | 'Result';
  inprogress: boolean;
  pending: boolean;
  done: boolean;
};

export type StepperState = {
  steps: Step[];
};

const initialState: StepperState = {
  steps: [
    {
      lable: "ثبت‌نام",
      iconType: 'Profile',
      inprogress: true,
      pending: false,
      done: false,
    },
    {
      lable: "فرم درخواست",
      iconType: 'RequestForm',
      inprogress: false,
      pending: false,
      done: false,
    },
    {
      lable: "نتیجه",
      iconType: 'Result',
      inprogress: false,
      pending: false,
      done: false,
    },
  ],
};

const stepperSlice = createSlice({
  name: "stepper",
  initialState,
  reducers: {
    updateStepStatus: (state, action: PayloadAction<{ 
      index: number; 
      status: 'inprogress' | 'pending' | 'done';
      value: boolean;
    }>) => {
      const { index, status, value } = action.payload;
      if (state.steps[index]) {
        state.steps[index][status] = value;
      }
    },
    resetStepper: (state) => {
      state.steps = initialState.steps;
    },
    setAllSteps: (state, action: PayloadAction<Step[]>) => {
      state.steps = action.payload;
    }
  },
});

export const { updateStepStatus, resetStepper, setAllSteps } = stepperSlice.actions;
export default stepperSlice.reducer;