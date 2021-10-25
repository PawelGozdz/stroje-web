import BasicLayout from '../layouts/BasicLayout';
import Hero from '../components/MainPage/Hero';
import Services from '../components/MainPage/Services';
import HeroSlider from '../components/MainPage/Hero/HeroSlider'
import HomeHeroContent from '../components/MainPage/Hero/HomeHeroContent';
import EmptyBar from '../components/EmptyBar';
import FloatingMenu from '../components/FloatingMenu';

export default function Home() {

  return (
    <BasicLayout>
      <FloatingMenu />
      <Hero >
        <HeroSlider />
        <HomeHeroContent />
      </Hero>

      <EmptyBar />

      <Services />

      <EmptyBar />
    </BasicLayout>
  )
}


