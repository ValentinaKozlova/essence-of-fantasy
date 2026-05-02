import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlatformLinks } from './components/PlatformLinks';
import { SongWriting } from './components/SongWriting';
import { SessionSinger } from './components/SessionSinger';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PlatformLinks />
        <SongWriting />
        <SessionSinger />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
