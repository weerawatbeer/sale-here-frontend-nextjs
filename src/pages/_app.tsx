import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Prompt } from 'next/font/google';
import Layout from '@/components/layout';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/stores';
import '@/styles/main.scss';

const prompt = Prompt({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-prompt',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={prompt.variable}>
      <Head>
        <title>Sale here frontend interview</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <ReduxProvider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ReduxProvider>
    </div>
  );
}
