import React from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Client from "./Client";
import "./index.css";
import { Detail } from "./components/Detail";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Client />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
