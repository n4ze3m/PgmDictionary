import { GetServerSideProps, InferGetServerSidePropsType, NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import DefineBody from '../../components/Define/DefineBody'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    return {
        props: {
            data: {
                slug: query.slug as string
            }
        }
    }
}

const Home: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Head>
                <title> PgmDictionary </title>
            </Head>
            <DefineBody
                slug={data.slug}
            />
        </>
    )
}

export default Home
