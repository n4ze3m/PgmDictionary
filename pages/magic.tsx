import type { NextPage } from 'next'
import Head from 'next/head'
import MagicBody from '../components/Magic/MagicBody'

const MagicLink: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    Magic Link | PgmDicitonary
                </title>
            </Head>
            <MagicBody />
        </>
    )
}

export default MagicLink