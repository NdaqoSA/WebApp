import { useEffect, useState } from "react";
import Input from "../../input/Input";
import InputPassword from "../../input/InputPassword";
import {
  Form,
  FormInputContainer,
  FormTextContainer,
  InputLoginButton,
} from "../../layouts/input/input";
import { Text } from "../../typo/Typo";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validateInput = () => {
    console.log(password, " ", email);
    if (password && email) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  useEffect(() => {
    validateInput();
  }, [password, email]);
  return (
    <Form pi={60}>
      <FormTextContainer>
        <Text size={14} align="center">
          Utilise ton adresse e-mail pour te connecter.
        </Text>
      </FormTextContainer>
      <FormInputContainer>
        <Input getValue={setEmail} />
        <InputPassword getValue={setPassword} />
        <InputLoginButton active={isValid}>Se connecter</InputLoginButton>
      </FormInputContainer>
    </Form>
  );
};

export default FormLogin;
