import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
import { FaUsers, FaHome } from "react-icons/fa";

function Menu() {
  return (
    <ul  className="d-flex flex-row-reverse px-10 py-5 bg-gray " > 
      <li className="px-5"> 
        <Link href="/users"> <FaUsers className="d-inline" /> Users</Link>
      </li>      
      <li className="px-5"> 
        <Link href="/"><FaHome className="d-inline" /> Home</Link>
      </li>
    </ul>
  )
}

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body >
        <Menu></Menu>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
