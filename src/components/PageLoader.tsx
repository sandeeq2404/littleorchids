const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        <img
          src="/images/logo/littleorchids.webp"
          alt="Little Orchids"
          className="h-20 w-auto"
        />

        {/* Three Dot Animation */}
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
          <span className="w-3 h-3 bg-red-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
          <span className="w-3 h-3 bg-red-500 rounded-full animate-bounce" />
        </div>

        <p className="text-sm font-medium text-gray-600"></p>
      </div>
    </div>
  );
};

export default PageLoader;
