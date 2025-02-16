const Skeleton = () => {
  return (
    <div className="animate-pulse p-6 mb-6 border-b border-gray-300 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3">
      <div>
        <div className="h-64 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mb-1"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>
      <div>
        <div className="h-64 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mb-1"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>
      <div>
        <div className="h-64 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mb-1"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>
      <div>
        <div className="h-64 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mb-1"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>
    </div>
  );
};

export default Skeleton;
