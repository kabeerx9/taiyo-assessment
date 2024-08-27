import { Provider } from 'react-redux';
import { TanstackQueryProvider } from './tanstack-query-provider';
import { store } from '../store/store';

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<Provider store={store}>
			<TanstackQueryProvider>{children}</TanstackQueryProvider>
		</Provider>
	);
};
