import AudioBooks from "../../components/AudioBooks";
import AudioBooksHeader from "../../components/AudioBooksHeader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const AudioBooksPage = () => {
  return (
    <div>
      <Navbar />
      <AudioBooksHeader />
      <AudioBooks />
      <Footer />
    </div>
  );
};
export default AudioBooksPage;
