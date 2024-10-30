import Footer from "../../components/shared/Footer.jsx";
import SubscribeSection from "../../components/website/SubscribeSection.jsx";
import { Hero, PodcastEpisodes } from "../Podcast/_components/index.js";

function Podcast() {
  return (
    <div>
      <Hero />
      <PodcastEpisodes />
      <SubscribeSection />
      <Footer />
    </div>
  );
}

export default Podcast;
