import { useState } from "react";
import TableForm from "./TableForm";
import Table from "./Table";

const initialDB = [
  {
    id: 1,
    name: "beater",
    type: "beta tester",
    desc: "estuvieron antes que nosotros, son individuos de gran experiencia y muy experimentados, se recomienda tener cuidado",
  },
  {
    id: 2,
    name: "hacker",
    type: "viruz",
    desc: "adaptan su entorno para sobrevivir, pueden ingresar al sistema y cambiar directrices a su favor",
  },
  {
    id: 3,
    name: "undefined",
    type: "undefined",
    desc: "no hay registros del individuo, ... puede ser muy peligroso",
  },
  {
    id: 4,
    name: "cheater",
    type: "code",
    desc: "se adaptan al entorno para sobrevivir, tienen todos los trucos para chetarse",
  },
  {
    id: 0,
    name: "player",
    type: "common",
    desc: "individuo standar, no posee gran nivel pero tiene un gran potencial oculto",
  },
];

function Tarea1() {
    const [db, setDb] = useState(initialDB);

  const [toEdit, setToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now()
    setDb([...db, data])
  };

  const updateData = (data) => {
    let newData = db.map(el => el.id === data.id ? data : el);
    setDb(newData)
  };

  const deleteData = (id) => {
    // comfirm flag
    let isDelete = window.confirm(`??estas seguro de eliminar el id ${id}.`)

    if(isDelete) {
      let newData = db.filter(el => el.id !== id)
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <>
      <h4>CRUD Fake API</h4>
      <br />
      {/* FORM */}
      <TableForm
        createData={createData}
        updateData={updateData}
        toEdit={toEdit}
        setToEdit={setToEdit}
      />
      <br />
      {/* TABLE */}
      <Table data ={db}
        setToEdit={setToEdit}
       deleteData={deleteData}
       />
    </>
  );
}

export default Tarea1;
