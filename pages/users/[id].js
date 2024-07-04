import Link from "next/link";
import { FaUser, FaComment } from "react-icons/fa";

export default function User({ user }) {
  return (
    <main className={`flex  flex-col items-center justify-between p-10`}>
  
            <div className="container">
              <div className="row">
                <div className="col-12 m-2">
                  <Link href={"users/" + user.id}>
                    <FaUser className="d-inline" /> {user.username}
                  </Link>
                </div>
                <hr />
                <div className=" col-12 m-2">
                  <div className=" col-6">{user.name}</div>
                  <div className=" col-6">{user.email}</div>
                </div>
              </div>
            </div>
    </main>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const URL = `https://jsonplaceholder.typicode.com/users/${params.id}`;
  const response = await fetch(URL);
  const user = await response.json();

  return {
    props: { user },
  };
}
