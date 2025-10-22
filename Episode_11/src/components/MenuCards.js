import ItemCards from "./ItemCards";

const MenuCard = ({ info, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="p-4 border border-gray-200 rounded-2xl w-9/12 bg-white shadow-lg">
      {/* Category Header */}
      <div
        className="flex justify-between cursor-pointer items-center"
        onClick={handleClick}
      >
        <span className="text-xl font-bold">
          {info?.card?.card?.title}
        </span>
        <span
          className={`text-lg transition-transform duration-200 ${
            showItems ? "rotate-180" : ""
          }`}
        >
          🔽
        </span>
      </div>

      {/* Collapsible content */}
      {showItems && <ItemCards info={info} />}
    </div>
  );
};

export default MenuCard;
