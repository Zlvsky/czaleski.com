import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Container from '@/components/layout/Container'
import PageWrap from '@/components/layout/PageWrap'
import Contact from '@/components/main-page/Contact'
import Experience from '@/components/main-page/Experience'
import Hero from '@/components/main-page/Hero'
import Projects from '@/components/main-page/Projects'
import Skills from '@/components/main-page/Skills'

export default function Home() {
  return (
    <PageWrap>
      <Header />
      <Container id="main">
        <Hero />
        <Contact />
        <Skills />
        <Experience />
        <Projects />
      </Container>
      <Footer />
    </PageWrap>
  )
}
