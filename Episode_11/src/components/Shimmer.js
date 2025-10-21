const Shimmer = () => {
  return (
    <div className="flex flex-col items-center pr-12 pl-12 animate-pulse">
        <div className="flex flex-wrap w-full p-12">
        {/* Search Box */}
        <div className="flex items-center space-x-2">
          <div className="h-8 w-64 bg-gray-300 rounded"></div>
          <div className="h-8 w-20 bg-gray-300 rounded"></div>
        </div>

        {/* Filter Button */}
        <div className="h-8 w-40 m-1 bg-gray-300 rounded"></div>
      </div>
        <div className="flex flex-wrap justify-center">
      {Array(12)
        .fill("")
        .map((_, i) => (
          <div
            key={i}
            className="m-4 p-4 w-[250px] h-[350px] rounded-xl shadow-md bg-gray-100 flex flex-col justify-between"
          >
            {/* Image Placeholder */}
            <div className="w-full h-40 bg-gray-300 rounded-lg"></div>

            {/* Text Placeholder */}
            <div>
              <div className="h-5 bg-gray-300 rounded w-3/4 mt-4 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mt-3 mx-auto"></div>

              <div className="flex justify-between items-center mt-4">
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                <div className="h-4 bg-gray-300 rounded w-1/5"></div>
              </div>

              <div className="h-4 bg-gray-300 rounded w-1/3 mt-3"></div>
            </div>
            
          </div>
        ))}
         </div>
    </div>
  );
};

export default Shimmer;
