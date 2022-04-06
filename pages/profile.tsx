import { Auth } from '@supabase/ui';
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router';
import React from 'react';
import ProfileBody from '../components/Profile/ProfileBody';


const ProfilePage: NextPage = () => {
    const { user } = Auth.useUser();
    const router = useRouter();

    React.useEffect(() => {
        if (user=== null) {
            router.replace("/auth");
        }
    }, [user]);
    
    return (
        <>
            <Head>
                <title>
                    Profile | PgmDictionary
                </title>
            </Head>
            <ProfileBody
                userId={user!.id}
            />
        </>
    )
}

export default ProfilePage