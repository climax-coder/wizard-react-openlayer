import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Navbar/Header";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Router>
        <Header />
        <AppRouter />
      </Router>
    </ChakraProvider>
  );
}

export default App;
