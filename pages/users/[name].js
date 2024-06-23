import { useRouter } from "next/router"
import Users from "../api/users"

function User(){
    const router = useRouter();
    const {name} = router.query;
    const user = Users.find(u => u.name === name)
    return (
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 `}
      >
        {user && (
          <ul className={``}>
            <img alt="No image Available" style={{height:100, width: 100, border: "1px solid black"}}></img>
            <li className={`my-2`}>Id - {user.id}</li>
            <li className={`my-2`}>Name - {user.name}</li>
            <li className={`my-2`}>Contact - {user.mobile}</li>
          </ul>
        )}
      </main>
    );
}

export default User