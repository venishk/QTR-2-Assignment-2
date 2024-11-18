import Link from "next/link";
import { Items } from "./navitems";
const Navbar  = () =>  {
    return (
        <div className="relative flex left-[10%] top-[40px] "> 


        <div className="relative flex item-center text-white font-bold gap-[60px]">
            <h1 className="font-bold text-white text-2xl"> Global Software House </h1>
            {Items.map((item)=> (
                <Link href={item.Link} key={item.id} className="hover:text-slate-400">
                    {item.title}
                </Link>
                      ))}
                     </div>
                     <div className="relative left-[30%] flex gap-[20px]">
                        <button className="text-white font-bold p-2 rounded-sm hover:text-blue-500
                        transition duration-200 hover:underline hover:border-blue-500"> log In </button>
                        <button className="bg-blue-500 text-white font-extrabold p-2 rounded-sm 
                        hover:bg-blue-200"> JOIN US </button>

                     </div>

              </div>
    )


}
export default Navbar