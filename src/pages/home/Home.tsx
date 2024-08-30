import AllBooks from "./sections/AllBooks";
import Banner from "./sections/Banner";

import testBookBanner from "@assets/TEST_BOOK_IMAGES.png";

const Home = () => {
  console.log(19);
  return (
    <main>
      <Banner
        title="READ AND ADD YOUR INSIGHT"
        subtitle="Find your favorite book and read it here for free"
        imageUrl={testBookBanner}
      />
      <AllBooks />
    </main>
  );
};

export default Home;
