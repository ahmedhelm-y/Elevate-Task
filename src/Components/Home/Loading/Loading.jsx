import { Spinner } from "flowbite-react";

export default function Loading() {
  return (
    <>
      <div className="flex justify-center h-screen items-center">
        <Spinner size="xl" />
      </div>
    </>
  )
}
