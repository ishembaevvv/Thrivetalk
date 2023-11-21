import { Content } from "./components/ContentBlock/Content";
import { Block2 } from "./components/Block2/Block2";
import { Block3 } from "./components/Block3/Block3";
import { Block4 } from "./components/Block4/Block4";
import { Items } from "./components/Items/Items";
import { Block5 } from "./components/Block5/Block5";
import { Block6 } from "./components/Block6/Block6";
import Footer from "./components/Footer/Footer";
import { EndFooter } from "./components/Footer/End/End";
import DataItem from "./components/Items2/DataItem";
import { DataBlocks } from "./components/ItemTexts/DataBlocks";

function App() {
  return (
    <div className="App">
      <Content></Content>
      <Block2></Block2>
      <Block3></Block3>
      <Block4></Block4>
      <Items></Items>
      <DataItem></DataItem>
      <DataBlocks></DataBlocks>
      <Block5></Block5>
      <Block6></Block6>
      <Footer></Footer>
      <EndFooter></EndFooter>
    </div>
  );
}

export default App;
