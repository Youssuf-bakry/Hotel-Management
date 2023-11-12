import CabinTable from "../features/cabins/CabinTable";
import Headings from "../ui/Headings";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Headings as="h1">All cabins</Headings>
        <p>Fiter / sort</p>
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
