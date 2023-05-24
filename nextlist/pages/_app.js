import Layout from '../components/layout';
import {SessionProvider} from "next-auth/react";
import '../styles/globals.css';
import "../styles/index.css";

export default function App({ Component, pageProps,session }) {
  return (
    <SessionProvider session={session}>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
