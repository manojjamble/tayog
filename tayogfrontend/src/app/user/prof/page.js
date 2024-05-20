import Footer from "../../../components/Footer";
import LoggedNavbar from "../../../components/LoggedNavbar";
import Home from "./Home";

export default function Prof() {
  return (
    <div className="bg-white">
      <LoggedNavbar />
      <Home />
      <Footer />
    </div>
  );
}
