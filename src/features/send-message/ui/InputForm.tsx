import { FC } from "react";
import { Input } from "../../../shared/ui/Input/Input";

export interface InputFormProps {
  onSendMessage?: (message: string) => void;
}

export const InputForm: FC<InputFormProps> = () => {
  return <Input type="text" placeholder="Start typing here..." />
};
