import Link from "next/link";
import { Key } from "react";
import { FaUser, FaComment } from "react-icons/fa";

export default function Home(props: { posts: any[] }) {
  return (
    <main className={`flex  flex-col items-center justify-between p-8`}>
      {/* <h1 className={`p-3`}>Posts</h1> */}
      <ul className="mx-auto " style={{ width: "70%" }}>
        {props.posts &&
          props.posts.map(
            (
              post: {
                id: string;
                userId: string;
                title: string;
                body: string;
              },
              index: Key | null | undefined
            ) => (
              <li key={index} className="rounded px-10 py-4 my-4 bg-gray">
                <div className="media">
                  <div className="media-body">
                    <div className="my-2">
                      <Link href={"/users/" + post.userId} className="py-1">
                        <FaUser className="d-inline" /> - {post.userId}
                      </Link>
                      <h6>{post.title}</h6>
                    </div>
                    <hr style={{ width: "70%" }} />
                    <div className="my-4">
                      <p className="">{post.body}</p>
                    </div>
                    <hr />
                    <div className="mt-4 text-center">
                      <button>
                        <FaComment className="d-inline" /> Load Comments
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            )
          )}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const URL = `https://jsonplaceholder.typicode.com/posts`;
  const response = await fetch(URL);
  let posts: any[] = await response.json();
  posts = posts.sort(() => 0.5 - Math.random()).slice(0, 20);

  return {
    props: { posts },
  };
}
