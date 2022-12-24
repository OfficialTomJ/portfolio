import MasterclassLanding from "../Layouts/MasterclassLanding";
import MasterclassInterviews from "../Layouts/MasterclassInterviews"
import MasterclassHistory from "../Layouts/MasterclassHistory"
import MasterclassBasicInfo from "../Layouts/MasterclassBasicInfo";
import MasterclassIncluded from "../Layouts/MasterclassIncluded";
import MasterclassProduct from "../Layouts/MasterclassProduct";
import MasterclassDiscord from "../Layouts/MasterclassDiscord";
import Footer from "../Layouts/footer";

function Masterclass() {
  return (
    <div className="bg-zinc-800">
    <MasterclassLanding></MasterclassLanding>
    <MasterclassInterviews></MasterclassInterviews>
    <MasterclassHistory></MasterclassHistory>
    <MasterclassBasicInfo></MasterclassBasicInfo>
    <MasterclassIncluded></MasterclassIncluded>
    <MasterclassProduct></MasterclassProduct>
    <MasterclassDiscord></MasterclassDiscord>
    <Footer></Footer>
    </div>
  );
}

export default Masterclass;