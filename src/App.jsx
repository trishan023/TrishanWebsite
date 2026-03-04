import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-text-brown">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
