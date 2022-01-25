import Link from "next/link";
import A from "../components/A";

const index = () => {
  return (
    <div>
        <div className="navbar">
            <A href="/" text="Main"></A>
            <A href="/users" text="Users"></A>
            
        </div>
        <h1>Main page</h1>
        <style jsx>
            {`
                .navbar {
                    background: orange;
                    padding: 15px;
                }
               
            `}
        </style>
    </div>
  )
};

export default index;

<a href="">Main</a>