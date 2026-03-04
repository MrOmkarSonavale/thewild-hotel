// eslint-disable-next-line no-unused-vars
import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
// eslint-disable-next-line no-unused-vars
import { getCabins } from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import { useState } from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Button from "../ui/Button";

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
      </Row>
      <Row>
        <CabinTable />

        <Button onClick={() => setShowForm(showForm => !showForm)}>Add New Cabin</Button>

        {
          showForm && <CreateCabinForm />
        }

      </Row>
    </>
  );
}

export default Cabins;
