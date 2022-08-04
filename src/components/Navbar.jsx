
import {AiOutlineSearch} from "react-icons/ai";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {CgProfile} from "react-icons/cg";



export default function Navbar(){

    const Nav= [
        {
          title:"Home 1",
          link: "#",
        },
        {
          title: "Home 2",
          link: "#",
        },
        {
          title:"Home 3",
          link: "#",
        },
        {
            title:"Home 4",
            link: "#",
          },
        
      ];
    const icons= [
        {
          title:<AiOutlineSearch className="text-3xl"/>,
          link: "#",
        },
        {
          title: <AiOutlineShoppingCart   className="text-3xl"/>,
          link: "#",
        },
        {
          title: <CgProfile  className="text-3xl" />,
          link: "#",
        },
        
      ];
    return(
        <>
    
       <div className="relative">
        <img src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000" alt="header-slider"/>
        
        <div className="flex justify-between px-5  absolute
         top-1 ">
        <div className="text-4xl font-bold  ">
            Burberry
        </div>

        <ul className="  underline flex px-5 space-x-12  ">
              {Nav.map((link) => (
                <a href={link.link}>
                  <li
                    key={link.title}
                    className="text-base p-1 cursor-pointer"
                  >
                    {link.title}{" "}
                  </li>
                </a>
              ))}
            </ul>
       
         <ul className="  justify-between flex ">
              {icons.map((link) => (
                <a href={link.link}>
                  <li
                    key={link.title}
                    className="text-base p-1 cursor-pointer"
                  >
                    {link.title}{" "}
                  </li>
                </a>
              ))}
            </ul>
        </div>
        </div>
    
        </>
    )
}