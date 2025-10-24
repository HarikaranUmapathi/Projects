import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

function Hello() {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div className="mx-8 my-5">
      <div className="flex w-full justify-between items-center">
        <nav>
          <h1 className="text-blue-500 text-3xl">Logo</h1>
        </nav>
        <button onClick={handleChange} className="md:hidden text-2xl ">
          <IoMdMenu />
        </button>
        <div className={`${ menu ? "flex" : "hidden"} flex-col   gap-2 mb-4 md:flex md:flex-row md:gap-6 text-xl md:mr-6`}>
          <Link to="/" className="text-purple-500 text-xl">Home</Link>
          <Link to="/about us" className="text-purple-500 text-xl mb-0 pb-0">About us</Link>
          <Link to="/blog" className="text-purple-500 text-xl">Blog</Link>
        </div>
      </div>
    </div>
  );
}

export default Hello;