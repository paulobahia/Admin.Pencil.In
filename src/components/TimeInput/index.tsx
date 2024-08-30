import { ChangeEvent } from "react";
import { Input } from "../ui/input";

interface TimeInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const TimeInput: React.FC<TimeInputProps> = ({ value, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/[^0-9]/g, ''); // Remove caracteres não numéricos

    let formattedValue = inputValue;

    if (inputValue.length > 2) {
      formattedValue = `${inputValue.slice(0, 2)}:${inputValue.slice(2, 4)}`;
    }

    const [hours, minutes] = formattedValue.split(':').map(Number);

    if (hours >= 24) {
      formattedValue = `23:${formattedValue.slice(3, 5)}`;
    } else if (minutes >= 60) {
      formattedValue = `${formattedValue.slice(0, 2)}:59`;
    }

    onChange(formattedValue);
  };

  return (
    <Input
      type="text"
      value={value}
      onChange={handleChange}
      maxLength={5}
      placeholder="00:00"
    />
  );
}