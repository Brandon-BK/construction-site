import NavbarBanner from '../components/NavbarBanner'
import Projects from '../components/Projects'
import Map from '../components/Map'
import Contact from '../components/Contact'
import About from '../components/about/About'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <>
      <NavbarBanner />
      <Projects />
      <About />
      <Contact />
      <Map />
      <Footer />
    </>
  )
}
