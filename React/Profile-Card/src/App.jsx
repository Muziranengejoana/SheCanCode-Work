import "./App.css";
import Prfile from "./commponente/prfile";
import Lesi from"./assets/leslie-Alexander.jpg"
import Michael from"./assets/Michael-Foster.jpg"
import Dries from"./assets/Dries-Vincent.jpg"
import Lindsay from"./assets/Lindsay-Walton.jpg"
import Courtney from"./assets/Courtney-Henry.jpg"
import Tom from"./assets/tom-cook.jpg"

function App() {
  return (
    <>
     <Prfile image={Lesi} name="Leslie Alexandre" email="leslie.alexandre@example.com" post="Co-founder / CEO" time="last seen 3h ago"/>
     <Prfile image={Michael} name="Michael Foster" email="michael.faster@example.com" post="Co-Founder / CTO" time="last seen 3h ago"/>
     <Prfile image={Dries} name="Dries Vincent" email="dries.vicent@example.com" post="Business Relations" time="online"/>
     <Prfile image={Lindsay} name="Dries Vincent" email="dries.vicent@example.com" post="Front-end Developer" time="last seen 3h ago"/>
     <Prfile image={Courtney} name="Dries Vincent" email="dries.vicent@example.com" post="Designer" time="last seen 3h ago"/>
     <Prfile image={Tom} name="Dries Vincent" email="tom.cook@example.com" post="Director of product" time="online"/>
    </>
  );
}

export default App;
