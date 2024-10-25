
export default function Image({ productImage, productTitle }) {
  return (
    <>
      <div className="rounded-lg border border-blue-200 overflow-hidden">
        <img className="w-full h-72 object-contain" src={productImage} alt={productTitle} loading="lazy" />
      </div>
    </>
  )
}
