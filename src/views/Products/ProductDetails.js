import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const { id } = useParams();
    useEffect(() => {

        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const apiCall = async () => {
          await axios
            .get(`http://localhost:5000/api/product/getProduct/:${id}`, config)
            .then((res) => {
              console.log(res.data.product)
            });
        };
        apiCall();
      }, []);
  return (
    <div>
      product details
    </div>
  )
}

export default ProductDetails
