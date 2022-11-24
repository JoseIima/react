import {
  Button,
  Page,
  PageTitle,
  Space
} from "../components/styles";

export const Page1 = () => {
  return (
    <Page>
      <PageTitle>Page 1</PageTitle>

      <Space size={50} />

      <Button>Botão 1</Button>
      <Space />
      <Button color="blue">Botão 2</Button>

    </Page>
  );
}

