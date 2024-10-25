
export default function ErrorState({ error }) {
  return (
    <>
      <div className="flex justify-center items-center p-10">
        <div className="p-10 bg-red-300 rounded-lg">
          <p className="text-3xl">{error}</p>
        </div>
      </div>
    </>
  )
}
