"use client";
import React from "react";

import { ProvidersProps as Props } from "./Providers.types";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/config/queryClient.config";

const Providers = (props: Props) => {
  const { children } = props;
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;
