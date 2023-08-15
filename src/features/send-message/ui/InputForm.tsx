import { FC, useState } from "react";
import { Input } from "../../../shared/ui/Input/Input";
import { SendButton } from "./SendButton/SendButton";

export interface InputFormProps {
  onSendMessage?: (message: string) => void;
}

export const InputForm: FC<InputFormProps> = ({ onSendMessage }) => {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSendMessage?.(value);
        setValue('')
      }}
    >
      <Input
        type="text"
        placeholder="Start typing here..."
        contentRight={<SendButton type="submit" />}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};
