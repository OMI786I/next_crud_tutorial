import Image from "next/image";
import Table from "./component/Table";

export default function Home() {
  return (
    <>
      <h1>CRUD operations with next js mongoose</h1>
      <button className="btn btn-success">Add</button>
      <Table />
    </>
  );
}
