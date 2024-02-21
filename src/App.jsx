import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import AppRouter from "./routes/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Router>
        <AppRouter />
      </Router>
    </ChakraProvider>
  );
}

export default App;
