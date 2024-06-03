import Layout from '../components/Layout';
import MainH1 from '../components/MainH1';
import Input from '../components/Input'

const Home = () => {
    return (
        <Layout>
            <MainH1 title="Leosh" />
            <p className='font-montserrat text-center text-xl mt-2'>Acorta tus URLs</p>
            <Input />
        </Layout>
    );
}

export default Home;
