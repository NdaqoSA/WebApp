import { useEffect, useRef, useState } from "react";
import {
  InputContainer,
  InputText,
  InputTextLabel,
} from "../layouts/input/input";

const Input = () => {
  const [disabled, setDisabled] = useState(false);
  const [value, setValue] = useState("");
  const inputContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputContainerRef.current &&
        !inputContainerRef.current.contains(event.target as Node) &&
        !value
      ) {
        setDisabled(false);
      }
      if (
        inputContainerRef.current &&
        !inputContainerRef.current.contains(event.target as Node) &&
        value
      ) {
        inputRef.current?.blur();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
        ref={inputRef}
        active={disabled}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </InputContainer>
  );
};

export default Input;
