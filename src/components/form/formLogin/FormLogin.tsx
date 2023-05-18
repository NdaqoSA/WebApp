import Input from "../../input/Input";
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
        <Input />
        <InputLoginButton active>Se connecter</InputLoginButton>
      </FormInputContainer>
    </Form>
  );
};

export default FormLogin;
