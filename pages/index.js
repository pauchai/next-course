import Link from "next/link";

const index = () => {
  return (
    <div>
        <div>
            <Link href="/">
                <a >Main</a>
            </Link>
            <Link href="/users">
                <a >Users</a>
            </Link>
        </div>
        <h1>Main page</h1>
    </div>
  )
};

export default index;

<a href="">Main</a>