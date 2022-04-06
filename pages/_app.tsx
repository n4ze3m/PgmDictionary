import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import Layout from '../components/Common/Layout'
import { SupabaseProvider } from '../lib/supabase'
import { UrqlProvider } from '../lib/urql'
import { NotificationsProvider } from '@mantine/notifications';

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
          <NotificationsProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </NotificationsProvider>
        </MantineProvider>
      </UrqlProvider>
    </SupabaseProvider>
  )
}

export default MyApp
