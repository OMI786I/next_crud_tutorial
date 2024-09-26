import Image from "next/image";
import Table from "./component/Table";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>CRUD operations with next js mongoose</h1>
      <Link href={"/create"}>
        {" "}
        <button className="btn btn-success">Add</button>
      </Link>

      <Table />
    </>
  );
}
