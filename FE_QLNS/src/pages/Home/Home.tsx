import HomeContactSection from "./HomeContactSection";
import HomeHeader from "./HomeHeader";
import HomeIntroduceSection from "./HomeIntroduceSection";
import HomeRecruitmentSection from "./HomeRecruitmentSection";
import HomeTechnologySection from "./HomeTechnologySection";

type Props = {};

function Home({}: Props) {
  return (
    <div id="home">
      <HomeHeader />
      <HomeIntroduceSection />
      <HomeRecruitmentSection />
      <HomeTechnologySection />
      <HomeContactSection />
    </div>
  );
}

export default Home;
