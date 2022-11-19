const LeftArrow = () => {
  return (
    <div className="w-9 h-9 p-2 cursor-pointer rounded-full border border-gray-300 hover:bg-gray-100">
      <img
        src="/icons/slider-arrow.png"
        alt="Right Arrow"
        className="w-full h-full rotate-180"
      />
    </div>
  );
};

export default LeftArrow;
