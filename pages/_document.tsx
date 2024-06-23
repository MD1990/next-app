import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

function Menu() {
  return (
    <ul style={{display: "flex", backgroundColor : "purple", padding: 20}}> 
      <li style={{color: "white", cursor: "pointer"}}> 
        <Link href="/">Home</Link>
      </li>
      <li style={{color: "white", cursor: "pointer", paddingLeft: 20 }}> 
        <Link href="/users">Users</Link>
      </li>
    </ul>
  )
}

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Menu></Menu>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
