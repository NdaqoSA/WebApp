import { useEffect, useRef, useState } from "react";
import {
  InputContainer,
  InputIcon,
  InputTextLabel,
  InputTextPassword,
} from "../layouts/input/input";

interface Props {
  getValue: Function;
}

const InputPassword = ({ getValue }: Props) => {
  const [disabled, setDisabled] = useState(false);
  const [value, setValue] = useState("");
  const [hidden, setHidden] = useState(false);
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getValue(value);
  }, [value]);

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

  return (
    <InputContainer
      ref={inputContainerRef}
      onClick={() => setDisabled(true)}
      active={disabled}
    >
      <InputIcon active={disabled} onClick={() => setHidden(!hidden)} />
      <InputTextLabel active={disabled}>
        Mot de passe
        <span> *</span>
      </InputTextLabel>
      <InputTextPassword
        type={!hidden ? "password" : "text"}
        ref={inputRef}
        active={disabled}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </InputContainer>
  );
};

export default InputPassword;
