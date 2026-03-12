const Winner = ({ name, school, year, imgUrl }) => (
    <div className="p-4 border rounded-lg shadow-md text-center">
      <img className="w-24 h-24 rounded-full mx-auto" src={imgUrl} alt={name} />
      <h5 className="mt-4 font-semibold">{name}</h5>
      <p className="text-gray-500">{school}</p>
      {year && <p className="text-gray-400 text-sm">{year}</p>}
    </div>
  );
  
  export default Winner;
  