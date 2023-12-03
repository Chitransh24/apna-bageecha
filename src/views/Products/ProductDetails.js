import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import LandungImage from "../../assets/LandingImage2.jpeg"

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
            .post(`http://localhost:5000/api/product/getProduct/${id}`, config)
            .then((res) => {
              let product = res;
              console.log("Salaar", product)
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
