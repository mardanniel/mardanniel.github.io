import Layout from '@components/layout';
import Metadata from '@components/metadata';
import About from '@components/sections/about';
import Contact from '@components/sections/contact';
import Experience from '@components/sections/experience';
import Footer from '@components/sections/footer';
import Intro from '@components/sections/intro';

export default function Index() {
  return (
    <>
      <Metadata />
      <Layout>
        <Intro />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </Layout>
    </>
  );
}
