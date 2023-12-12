import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { LuDownload } from "react-icons/lu";
import { FaRegFileLines } from "react-icons/fa6";

const Card = ({ data,reference }) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={0.2} className="flex-shrink-0 relative text-white px-5 py-10 w-60 h-72 rounded-[40px] bg-zinc-900/90 overflow-hidden">
      <FaRegFileLines />
      <p className=" text-sm mt-5 leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 mb-2">
          <h5>{data.filesize}</h5>
          <span className="w-6 h-6 rounded-full bg-zinc-600 flex items-center justify-center">
            {data.close ? (
              <RxCross2 />
            ) : (
              <LuDownload size={".8em"} color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`${
              data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-500"
            } tag w-full py-3 flex justify-center items-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTittle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
