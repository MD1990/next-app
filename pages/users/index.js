import Link from "next/link"
import Users from "../api/users"

export default function Home() {
  return (
    <main className={`flex  flex-col items-center justify-between p-10`}>
      {Users.map((user) => (
        <Link href={"users/" + user.name} className={`p-4`}>
          {user.name}
        </Link>
      ))}
    </main>
  );
}