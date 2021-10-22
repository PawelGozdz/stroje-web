import BasicLayout from '../layouts/BasicLayout';
import Hero from '../components/MainPage/Hero';
import Services from '../components/MainPage/Services';
import HeroSlider from '../components/MainPage/Hero/HeroSlider'
import HomeHeroContent from '../components/MainPage/Hero/HomeHeroContent';
import EmptyBar from '../components/EmptyBar';

export default function Home() {

  return (
    <BasicLayout>
      <Hero >
        <HeroSlider />
        <HomeHeroContent />
      </Hero>

      <EmptyBar />

      <Services />
    </BasicLayout>
  )
}


