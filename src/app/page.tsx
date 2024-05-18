import BigWrap from '@/components/layout/containers/BigWrap'
import Container from '@/components/layout/containers/Container'
import PageWrap from '@/components/layout/containers/PageWrap'
import SmallWrap from '@/components/layout/containers/SmallWrap'
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import Contact from '@/components/main-page/Contact'
import Experience from '@/components/main-page/Experience'
import Hero from '@/components/main-page/Hero'
import Projects from '@/components/main-page/Projects'
import Skills from '@/components/main-page/Skills'

export default function Home() {
  return (
    <PageWrap>
      <Header />
      <Container>
        <SmallWrap id="main">
          <Hero />
          <Contact />
          <Skills />
          <Experience />
        </SmallWrap>
        <BigWrap id="work">
          <Projects />
        </BigWrap>
      </Container>
      <Footer />
    </PageWrap>
  )
}
