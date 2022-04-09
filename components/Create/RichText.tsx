import dynamic from 'next/dynamic';

export default dynamic(() => import('@mantine/rte'), {
  ssr: false,
  loading: () => null,
});