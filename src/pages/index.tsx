import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

const App = dynamic(() => import("../components/admin/App"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

export default Home;
