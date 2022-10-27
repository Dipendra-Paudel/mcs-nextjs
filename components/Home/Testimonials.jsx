const reasons = [
  {
    image: "/images/home/customer.webp",
    customerName: "Dipendra Paudel",
    position: "Frontend Developer",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores vero molestias. Magnam rem quod ratione ipsam cumque animi nostrum?",
  },
  {
    image: "/images/home/customer.webp",
    customerName: "Dipendra Paudel",
    position: "Frontend Developer",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores vero molestias. Magnam rem quod ratione ipsam cumque animi nostrum?",
  },
  {
    image: "/images/home/customer.webp",
    customerName: "Dipendra Paudel",
    position: "Frontend Developer",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores vero molestias. Magnam rem quod ratione ipsam cumque animi nostrum?",
  },
  {
    image: "/images/home/customer.webp",
    customerName: "Dipendra Paudel",
    position: "Frontend Developer",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores vero molestias. Magnam rem quod ratione ipsam cumque animi nostrum?",
  },
];

const Testimonials = () => {
  return (
    <div className="px-6 pb-12 md:px-8 md:pb-16 lg:px-16 lg:pb-20">
      <div className="common-style-2 text-center space-y-2">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
          What Clients Say
        </h3>
        <div className="max-w-lg mx-auto text-sm md:text-base text-gray-700">
          Customer feedback is vital in helping us to get it right.
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 pt-6 gap-10 md:gap-8 lg:gap-10">
          {reasons.map((reason, index) => {
            const { image, customerName, position, review } = reason;
            return (
              <div key={index} className="text-sm">
                <div className="inline-block h-20 w-20 mx-auto rounded-full overflow-hidden">
                  <img src={image} alt={customerName} className="h-full" />
                </div>
                <div className="text-gray-700">{review}</div>
                <div className="pt-2 font-medium text-gray-700">
                  {customerName}
                </div>
                <div className="text-gray-500">{position}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
