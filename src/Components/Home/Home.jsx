import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import SuccessState from "./SuccessState/SuccessState.jsx";
import ErrorState from "./ErrorState/ErrorState.jsx";

export default function Home() {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');


  async function getProducts() {
    try {
      let { data } = await axios.get("https://fakestoreapi.com/products");
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError('Something went wrong');
    }
  }


  useEffect(() => {
    getProducts()
  }, [])



  return (
    <>
      {
        error ?
          <ErrorState error={error} /> :
          <SuccessState data={data} isLoading={isLoading} />
      }
    </>
  )
}
