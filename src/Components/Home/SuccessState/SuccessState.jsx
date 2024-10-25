import Card from "../Card/Card.jsx";
import Loading from "../Loading/Loading.jsx";

export default function SuccessState({ data, isLoading }) {
  return (
    <>
      <section className="py-5">
        <div className="container mx-auto">
          {isLoading ? <Loading /> :
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {data?.map((product) =>
                <Card key={product.id} product={product} />
              )}
            </div>}
        </div>
      </section>
    </>
  )
}
