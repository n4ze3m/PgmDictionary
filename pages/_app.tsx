import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import Layout from '../components/Common/Layout'
import { SupabaseProvider } from '../lib/supabase'
import { UrqlProvider } from '../lib/urql'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SupabaseProvider>
      <UrqlProvider>
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
      </UrqlProvider>
    </SupabaseProvider>
  )
}

export default MyApp
