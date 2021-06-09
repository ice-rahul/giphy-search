/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const withQuery = (Component) => ({ ...props }) => (
  <QueryClientProvider client={queryClient}>
    <Component {...props} />
  </QueryClientProvider>
);

export default withQuery;
