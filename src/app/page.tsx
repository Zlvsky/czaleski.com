import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Container from '@/components/layout/Container'
import PageWrap from '@/components/layout/PageWrap'
import Hero from '@/components/main-page/Hero'
import Skills from '@/components/main-page/Skills'

export default function Home() {
  return (
    <PageWrap>
      <Header />
      <Container id="main">
        <Hero />
        <Skills />
      </Container>
      <Footer />
    </PageWrap>
  )
}
