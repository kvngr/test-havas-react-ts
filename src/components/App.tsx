import { lazy, Suspense } from 'react';
import { ToggleContextProvider } from '../core/context';

const Home = lazy(() => import('../components/pages').then(({ Home }) => ({ default: Home })))

export const App = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
        <ToggleContextProvider>
          <Home />
        </ToggleContextProvider>
    </Suspense>
  );
}
