import { FaStar } from "react-icons/fa";

export default function Rating({ productRating }) {
  return (
    <>
      <div className="flex gap-1 items-center">
        <FaStar color="#f59e0b" />
        <span>{productRating}</span>
      </div>
    </>
  )
}
