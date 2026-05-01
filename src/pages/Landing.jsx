import { FeaturedProducts, Hero } from "../components";
import axios from "axios";

export const loader = async () => {
    const response = await axios("https://strapi-store-server.onrender.com/api/products?featured=true");
    const products = response.data.data;
    return {products};
}

const Landing = () => {
    return <>
        <Hero/>
        <FeaturedProducts/>
    </>
}

export default Landing;