import { useRouter } from "next/router";
import Sidebar from "./menu/index.page";

const Layout = ({ children }) => {
  const router = useRouter();

  // Verifique se a rota é a página de login
  const isLoginPage = router.pathname === "/login";

  // Se a rota for de login, retorne somente os filhos sem o layout
  if (isLoginPage) {
    return <>{children}</>;
  }

  // Para todas as outras rotas, renderize o componente com o layout
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh", // Ajusta a altura do layout para ocupar toda a tela
        overflow: "hidden", // Evita o scroll no conteúdo
      }}
    >
      <Sidebar />
      <div
        style={{
        //   flex: 1, // Ocupa todo o espaço restante
        //   overflowY: "auto", // Adiciona scroll apenas quando necessário
        //   padding: "16px", // Adiciona espaçamento ao redor do conteúdo
        //   width: "100vw",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
