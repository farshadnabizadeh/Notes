import { AlertIcon, DropDown } from '@/assets/test/svg/svg'

<HoverHint
	icon={<AlertIcon />}
	hint={General.RegistrationHelp}
	placement="top"
/>


interface HoverHintProps {
    icon: React.ReactNode;              // e.g. <AlertIcon />
    hint: React.ReactNode;              // text or JSX for the hint
    className?: string;                 // wrapper class
    placement?: Placement;              // default: 'top'
    hintClassName?: string;             // override hint box styles
}