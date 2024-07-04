import Link from "next/link";
import { FaUser, FaComment } from "react-icons/fa";

export default function Users(props) {
  return (
    <main className={`flex  flex-col items-center justify-between p-10`}>
      <ul>
        {props.users.map((user, index) => (
          <li className="rounded bg-gray users-list">
            <div className="container ">
              <div className="row text-center">
                <div className="col-12 m-2">
                  <Link href={"users/" + user.id}>
                    <FaUser className="d-inline" />
                    <br/>
                     {user.username}
                  </Link>
                </div>
                <hr style={{margin: "0.5em" }}/>
                <div className=" col-12 m-2">
                  <div className=" col-6 d-inline">{user.name}</div> | <div className=" col-6 d-inline">{user.email}</div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const URL = `https://jsonplaceholder.typicode.com/users`;
  const response = await fetch(URL);
  const users = await response.json();

  return {
    props: { users },
  };
}
