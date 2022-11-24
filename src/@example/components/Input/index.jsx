import { Container, Label } from './styles';

export const Input = (props) => {
  return (
    <Container>
      <Label>{props.label}</Label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
      />
    </Container>
  );
}

