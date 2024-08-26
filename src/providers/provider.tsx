import { TanstackQueryProvider } from './tanstack-query-provider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return <TanstackQueryProvider>{children}</TanstackQueryProvider>;
};
