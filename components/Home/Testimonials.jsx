import TestimonialSlider from "../Slider/Testimonial/TestimonialSlider";

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
        <div className="pt-6">
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
