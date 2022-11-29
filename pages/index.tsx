import Layout from '@components/layout';
import Metadata from '@components/metadata';
import Navigation from '@components/navigation';
import About from '@components/sections/about';
import Contact from '@components/sections/contact';
import Experience from '@components/sections/experience';
import Intro from '@components/sections/intro';
import Work from '@components/sections/work';

export default function Index() {
  return (
    <>
      <Metadata />
      <Layout>
        <Navigation />
        <Intro />
        <About />
        <Experience />
        <Work />
        <Contact />
      </Layout>
    </>
  );
}
