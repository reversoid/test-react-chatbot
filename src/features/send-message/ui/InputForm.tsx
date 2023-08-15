import { FC } from "react";

export interface InputFormProps {
  onSendMessage?: (message: string) => void;
}

export const InputForm: FC<InputFormProps> = () => {
  return <div>InputForm</div>;
};
