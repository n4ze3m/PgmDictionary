import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import Layout from '../components/Common/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'dark',
      }}
    >
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  )
}

export default MyApp
