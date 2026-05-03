import Image from "next/image";
import FeaturedProducts from './_component/FeaturedProducts/FeaturedProducts';
import Slider from "./_component/Slider/Slider";
import imgSlider from "../assets/images/imgi_111_home-slider-1.d79601a8.png"
import imgSlider2 from "../assets/images/imgi_111_home-slider-1.d79601a.png"
import imgSlider3 from "../assets/images/imgi_111_home-slider-1.d79601.png"
import { lazy, Suspense } from "react"
import { SyncLoader } from "react-spinners";
import FeaturesSection from "./_component/FeaturesSection/FeaturesSection";
import PromoSection from "./_component/PromoSection/PromoSection";
import NewsletterSection from "./_component/NewsletterSection/NewsletterSection";
// import HomeCategories from "./_component/HomeCategotries/HomeCategories";

const LazyHomeCategoryComponent = lazy( () => import("./_component/HomeCategotries/HomeCategories") )

export default function Home() { 
  return<>

    <Slider heightClass="h-100" listOfImages={[
    {
      image: imgSlider.src,
      title: "Fresh Products Delivered to your Door",
      button1: {
        text: "Shop Now",
        link: "/shop",
      },
      button2: {
        text: "New Deals",
        link: "/about",
      },
    },
    {
      image: imgSlider2.src,
      title: "Premium Quality Guaranteed",
      button1: {
        text: "Shop Now",
        link: "/shop",
      },
      button2: {
        text: "Learn More",
        link: "/offers",
      },
    },
    {
      image: imgSlider3.src,
      title: "Fast & Free Delivery",
      button1: {
        text: "Order Now",
        link: "/products",
      },
      button2: {
        text: "Delivery Info",
        link: "/offers",
      },
    },
  ]} slidesPerView={3} />

  <FeaturesSection />

    <Suspense fallback={
      <div className="h-75 text-white text-4xl font-bold flex justify-center items-center"> 
        <SyncLoader color="#15803D"  size={25}/>
      </div>
    }>
      <LazyHomeCategoryComponent/>
    </Suspense>

    <PromoSection/>

    <FeaturedProducts/>
    <NewsletterSection/>
  </> 
}
