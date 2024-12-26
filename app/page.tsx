import Header from '../components/header'
import Hero from '../components/hero'
import Services from '../components/services'
import Works from '../components/works'
import Achievements from '../components/achievements'
import Testimonials from '../components/testimonials'
import Contact from '../components/contact'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10" />
      <div className="relative z-10">
        <Header />
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="works">
            <Works />
          </section>
          <section id="about">
            <Achievements />
            <Testimonials />
          </section>
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

