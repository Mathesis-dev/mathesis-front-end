import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import styled from "@emotion/styled";
import "@fontsource/fira-sans";
import routes from "./routes/routes";

const AppContainer = styled.div`
  font-family: "Fira Sans";
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <AppContainer>
        <RouterProvider router={routes} />
      </AppContainer>
    </ChakraProvider>
  </React.StrictMode>
);
