import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from 'react-query';
import queryClient from './components/reactQueryConfig';
import App from './app';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>  {/* Optionally add a fallback */}
          <App />
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
);
