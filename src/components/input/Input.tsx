import { useEffect, useRef, useState } from "react";
import {
  InputContainer,
  InputText,
  InputTextLabel,
} from "../layouts/input/input";

interface Props {
  getValue: Function;
}

const Input = ({ getValue }: Props) => {
  const [disabled, setDisabled] = useState(false);
  const [value, setValue] = useState("");
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const current = inputContainerRef.current;
      if (current && !current.contains(event.target as Node)) {
        if (value) {
          inputRef.current?.blur();
          return;
        }

        return setDisabled(false);
      }

      if (current && current.contains(event.target as Node)) {
        return inputRef.current?.focus();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [value]);

  useEffect(() => {
    getValue(value);
  }, [value]);

  return (
    <InputContainer
      ref={inputContainerRef}
      onClick={() => setDisabled(true)}
      active={disabled}
    >
      <InputTextLabel active={disabled}>
        Adresse e-mail / Identifiant
        <span> *</span>
      </InputTextLabel>
      <InputText
        type="text"
        ref={inputRef}
        active={disabled}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </InputContainer>
  );
};

export default Input;
