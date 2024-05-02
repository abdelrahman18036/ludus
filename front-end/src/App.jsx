import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppRoutes from './routes/RoutingHandler';
import CustomCursor from './Components/Cursor/CustomCursor';

export const queryClient = new QueryClient();
function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
        <Router>
          <CustomCursor />
          <AppRoutes />
        </Router>
    </QueryClientProvider>
  );
}

export default App;
