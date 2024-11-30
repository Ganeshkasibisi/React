const ShimmerMenu = () => {
    return (
      <div className="p-6">
        {/* Shimmer for Restaurant Name */}
        <div className="w-1/3 h-8 bg-gray-00 rounded-md animate-pulse mx-auto mb-4"></div>
  
        {/* Shimmer for Description */}
        <div className="w-1/2 h-6 bg-gray-200 rounded-md animate-pulse mx-auto mb-6"></div>
  
        {/* Shimmer for Categories */}
        <div className="space-y-4">
          {Array(7)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="w-6/12 mx-auto h-16 bg-gray-200 rounded-lg animate-pulse"
              ></div>
            ))}
        </div>
      </div>
    );
  };
  
  export default ShimmerMenu;
  