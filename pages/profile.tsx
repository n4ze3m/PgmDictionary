import { Auth } from '@supabase/ui';
import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react';
import ProfileBody from '../components/Profile/ProfileBody';


const ProfilePage: NextPage = () => {


    return (
        <>
            <Head>
                <title>
                    Profile | PgmDictionary
                </title>
            </Head>
            <ProfileBody
            />
        </>
    )
}

export default ProfilePage