import { Layout } from "antd";
import AppHeader from "../component/header";

const { Header, Footer, Content } = Layout;
function AppLayout({ children }) {
  return (
    <Layout>
      <Header
        style={{
          margin: 0,
          padding: 0,
          width: "auto",
          height: "auto",
          backgroundColor: `white`,
        }}
      >
        <AppHeader />
      </Header>
      <Content
        style={{
          margin: 0,
          padding: 0,
          width: "100%",
          height: "auto",
          backgroundColor: `#ffffff`,
        }}
        className=""
      >
        {children}
      </Content>

      <Footer
        style={{
          margin: 0,
          padding: 0,
          width: "auto",
          height: "auto",
          backgroundColor: "white",
        }}
      ></Footer>
    </Layout>
  );
}

export default AppLayout;
