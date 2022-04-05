import { Auth } from '@supabase/ui';
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router';
import React from 'react';
import MagicBody from '../components/Magic/MagicBody'

const MagicLink: NextPage = () => {
    const { user } = Auth.useUser();
    const router = useRouter();

    React.useEffect(() => {
        if (user !== null) {
            router.replace("/");
        }
    }, []);

    if (user) {
        router.replace("/");
    }
    return (
        <>
            <Head>
                <title>
                    Auth | PgmDicitonary
                </title>
            </Head>
            <MagicBody />
        </>
    )
}

export default MagicLink