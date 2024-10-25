import Button from "./Button/Button.jsx";
import Image from "./Image/Image.jsx";
import Price from "./Price/Price.jsx";
import Rating from "./Rating/Rating.jsx";
import Title from "./Title/Title.jsx";

export default function Card({ product }) {
  return (
    <>
      <div>
        <div className="rounded-lg shadow-lg p-4 border h-full">
          <div className="flex flex-col gap-4 h-full">
            <Image productImage={product.image} productTitle={product.title}/>
            <div className="flex flex-col gap-4 flex-grow">
              <Title productTitle={product.title} />
              <div className="mb-4 flex justify-between">
                <Price productPrice={product.price} />
                <Rating productRating={product.rating.rate} />
              </div>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
