import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./routes";

import styled from "@emotion/styled";
import "@fontsource/fira-sans";

const AppContainer = styled.div`
  font-family: "Fira Sans";
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <AppContainer>
        <RouterProvider router={Router} />
      </AppContainer>
    </ChakraProvider>
  </React.StrictMode>
);
