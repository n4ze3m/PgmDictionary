import React from "react";
import { createClient, Provider } from "urql";
import { useSupabaseClient } from "./supabase";

export function UrqlProvider(props: { children: React.ReactNode }) {
  const supabaseClient = useSupabaseClient();

  function getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, Content-Type',
    };
    const authorization = supabaseClient.auth.session()?.access_token;

    if (authorization) {
      headers["Authorization"] = `Bearer ${authorization}`;
    }

    return headers;
  }

  const [client] = React.useState(function createUrqlClient() {
    return createClient({
      url: `${process.env.NEXT_PUBLIC_SUPABASE_URL!}/graphql/v1`,
      fetchOptions: function createFetchOptions() {
        return { headers: getHeaders() };
      },
    });
  });
  return <Provider value={client}>{props.children}</Provider>;
}