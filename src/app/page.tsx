import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import BigWrap from '@/components/layout/BigWrap'
import Container from '@/components/layout/Container'
import PageWrap from '@/components/layout/PageWrap'
import SmallWrap from '@/components/layout/SmallWrap'
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
