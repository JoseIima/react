import { Page, PageTitle, Space, Input, Button } from '../components';

export const PageLogin = () => {
  return (
    <Page className="center">

      <div style={{
        minWidth: 400,
        marginTop: 50,
      }}>

        <PageTitle center>Login</PageTitle>

        <Space size={100} />

        <Input
          type="email"
          label="E-mail"
          placeholder="@"
        />

        <Space size={50} />

        <Input
          type="password"
          label="Senha"
          placeholder="*******"
        />

        <Space size={50} />

        <Button>Entrar</Button>
        
      </div>

    </Page>
  );
}

