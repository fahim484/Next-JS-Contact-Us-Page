import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

// type IProps = InputHTMLAttributes<HTMLInputElement>;
type IInputProps = InputHTMLAttributes<HTMLInputElement>;
type ITextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const inputClass =
  "w-full rounded-[5px] bg-[#FFFFFF0D] border border-[#FFFFFF33]  py-3 px-3.5 text-[15px] leading-[18.15px] tracking-[-1%] text-[#FFFFFF99] focus:outline-none focus:border-secondary";

export const Input: FC<IInputProps> = (props) => {
  const { type, placeholder, ...others } = props;
  return (
    <input
      {...others}
      type={type || "text"}
      placeholder={placeholder}
      className={inputClass}
    />
  );
};

export const Textarea: FC<ITextareaProps> = (props) => {
  const { placeholder, ...others } = props;
  return (
    <textarea
    {...others}
      placeholder={placeholder}
      className={`${inputClass} min-h-[109px]`}
    />
  );
};
