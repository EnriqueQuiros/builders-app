import { QueryClient, QueryClientProvider } from "react-query";

import Companies from "./components/Companies";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 60000,
    },
  },
});

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Companies />
      </QueryClientProvider>
    </div>
  );
}

export default App;
