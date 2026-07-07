import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const Winner = ({ name, school, grade, imgUrl, imgClassName = "object-cover" }) => (
  <motion.div variants={cardVariants} className="group flex flex-col items-center text-center">
    <div className="w-full aspect-square overflow-hidden bg-slate-100">
      <img
        src={imgUrl}
        alt={name || "Winner"}
        className={`h-full w-full transition-transform duration-300 group-hover:scale-105 ${imgClassName}`}
      />
    </div>
    {name && <h5 className="mt-4  text-slate-900">{name}</h5>}
    {school && <p className=" text-slate-500 mt-1 leading-snug">{school}</p>}
    {grade && (
      <span className="mt-3 inline-block px-3 py-1  font-medium text-pink-600 ">
        {grade}
      </span>
    )}
  </motion.div>
);

export default Winner;
