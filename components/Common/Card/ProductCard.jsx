import Link from "next/link";

const ProductCard = ({
  _id,
  images,
  productName,
  price,
  currentPrice,
  initialPrice,
}) => {
  const imageSrc = `${process.env.BASEURL}${images ? images[0] : ""}`;

  return (
    <div>
      <Link href={`/products/${_id}`}>
        <div className="border cursor-pointer">
          <div>
            <div className="relative h-32">
              <img
                src={imageSrc}
                loading="lazy"
                alt={productName}
                className="w-full h-full"
              />
            </div>
            <div className="p-2">
              <div className="text-sm">{productName}</div>
              <div className="flex space-x-2 text-primary font-medium text-lg">
                {currentPrice && initialPrice ? (
                  <>
                    <div>Rs. {currentPrice}</div>
                    <del className="text-gray-500 text-xs">
                      Rs. {initialPrice}
                    </del>
                  </>
                ) : (
                  <div>Rs. {price}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
