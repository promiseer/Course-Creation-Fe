import Footer from "../../components/shared/Footer.jsx";
import Header from "../../components/shared/Header.jsx";
import SubscribeSection from "../../components/website/SubscribeSection.jsx";
import { Hero } from "../Podcast/_components/Hero.jsx";
import { PodcastEpisodes } from "../Podcast/_components/PodcastEpisodes.jsx";

function Podcast() {
  return (
    <div>
      <Header />
      <Hero />
      <PodcastEpisodes />
      <SubscribeSection />
      <Footer />
    </div>
  );
}

export default Podcast;
