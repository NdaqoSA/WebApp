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
  return (
    <Form pi={60}>
      <FormTextContainer>
        <Text size={14} align="center">
          Utilise ton adresse e-mail pour te connecter.
        </Text>
      </FormTextContainer>
      <FormInputContainer>
        <Input />
        <InputPassword />
        <InputLoginButton active>Se connecter</InputLoginButton>
      </FormInputContainer>
    </Form>
  );
};

export default FormLogin;
