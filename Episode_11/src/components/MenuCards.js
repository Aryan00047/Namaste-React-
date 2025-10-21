const MenuCard = ({ info }) => {
  return (
    <div className="p-4 border border-gray-200 rounded-2xl shadow-md w-72 hover:shadow-lg transition-shadow duration-200 bg-white">
      <img
        className="w-full h-48 object-cover rounded-xl mb-3"
        src={`/images/${info.imageId}`}
        alt={info.name}
      />
      <h2 className="text-lg font-semibold mb-1">{info.name}</h2>
      <p className="text-sm text-gray-600 mb-2">{info.description}</p>
      <div className="flex justify-between text-sm font-medium">
        <span>💸 ₹{info.price / 100 || info.defaultPrice / 100}</span>
        <span>⭐ {info.avgRating}</span>
      </div>
    </div>
  );
};


export default MenuCard;