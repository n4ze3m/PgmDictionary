import type { NextPage } from 'next'
import Head from 'next/head'
import CreateBody from '../components/Create/CreateBody'


const CreatePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    Create | PgmDictionary
                </title>
            </Head>
            <CreateBody />
        </>
    )
}

export default CreatePage