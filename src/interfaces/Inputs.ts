interface SharedProps {
	labelClass?: string;
	spanName: string;
	inputClass?: string;
	errorText?: string;
}

export interface InputTextProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">,
		SharedProps {}

export interface InputTextAreaProps
	extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "className">,
		SharedProps {}