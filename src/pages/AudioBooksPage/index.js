import AudioBooks from "../../components/AudioBooks";
import AudioBooksHeader from "../../components/AudioBooks/AudioBooksHeader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const AudioBooksPage = () => {
  return (
    <div>
      <AudioBooksHeader />
      <AudioBooks />
      <Footer />
    </div>
  );
};
export default AudioBooksPage;
