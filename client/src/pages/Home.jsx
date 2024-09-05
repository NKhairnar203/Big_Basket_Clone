import DefaultSwaper from "../components/DefaultSwaper";
import { Link } from "react-router-dom";
import topstrip1 from "../assets/hp_topstrip_m_250923_01.png";
import topstrip2 from "../assets/hp_topstrip_m_250923_02.png";
import topstrip3 from "../assets/hp_topstrip_m_250923_03.png";
import topstrip4 from "../assets/hp_topstrip_m_250923_04.png";
import topstrip5 from "../assets/hp_topstrip_m_250923_05.png";
import topstrip6 from "../assets/hp_topstrip_m_250923_06.png";
import Basket from "../components/Basket";
import FourCard from "../components/FourCard";
import SixCard from "../components/SixCard";

const Home = () => {
  return (
    <div className="pt-28 max-w-screen-lg m-auto">
      <DefaultSwaper />
      <div className="h-10 w-full my-6">
        <ul className="flex gap-6">
          <li className="h-full">
            <Link>
              <img className="h-full" src={topstrip1} alt="" />
            </Link>
          </li>
          <li className="h-full">
            <Link>
              <img className="h-full" src={topstrip2} alt="" />
            </Link>
          </li>
          <li className="h-full">
            <Link>
              <img className="h-full" src={topstrip3} alt="" />
            </Link>
          </li>
          <li className="h-full">
            <Link>
              <img className="h-full" src={topstrip4} alt="" />
            </Link>
          </li>
          <li className="h-full">
            <Link>
              <img className="h-full" src={topstrip5} alt="" />
            </Link>
          </li>
          <li className="h-full">
            <Link>
              <img className="h-full" src={topstrip6} alt="" />
            </Link>
          </li>
        </ul>
      </div>
      <Basket name="My Smart Basket" />
      <Basket name="Best Sellers" />

      <FourCard name="Top Offers" />
      <FourCard name="Fruits and Vegetables" />

      <SixCard name={"Your Daily Staples"} />
      <SixCard name={"Beverages"} />

      <FourCard name="Snacks Store" />
      <FourCard name="Cleaning & Household" />

      <SixCard name={"Beauty and Hygiene"} />
      <SixCard name={"Home and Kitchen"} />
      <div>
        <h1 className="text-center">Big Slider...</h1>
      </div>

      <div className="passge my-4 mb-6">
        <h2 className="font-bold">bigbasket – online grocery store</h2>
        <p className="text-sm my-2 text-gray-500">
          Did you ever imagine that the freshest of fruits and vegetables,
          top-quality pulses and food grains, dairy products, and hundreds of
          branded items could be handpicked and delivered to your home, all at
          the click of a button? In today's fast-paced world, bigbasket.com,
          India's pioneering online grocery store, continues to bring a
          staggering array of over 40,000 products from more than 1,000 brands
          to the doorsteps of over 10 million satisfied customers. From
          essential household cleaning products to the latest beauty and makeup
          trends, bigbasket remains your one-stop shop for daily needs.
        </p>
        <p className="text-sm my-3 text-gray-500">
          In these times, we've eliminated the stress associated with shopping
          for daily essentials. You can now effortlessly order all your
          household products and groceries online. Plus, the added convenience
          of finding all your requirements at a single source, coupled with
          substantial savings, demonstrates that bigbasket, India's largest
          online supermarket, has transformed the way we shop for groceries.
          Online grocery shopping has become second nature. And when it comes to
          freshness, whether it's fruits and vegetables or dairy and meat, we've
          got you covered! Easily obtain fresh eggs, meat, fish, and more with
          just a few clicks.
        </p>
        <p className="text-sm my-3 text-gray-500">
          We now serve 300+ cities and towns across India and ensure swift
          delivery times, guaranteeing that all your groceries, snacks and
          branded foods reach you on time.
        </p>
        <p className="text-sm my-3 text-gray-500">
          Slotted Delivery: Choose the most convenient delivery slot to receive
          your groceries, ranging from early morning delivery for early birds to
          late-night delivery for those on the night shift. bigbasket caters to
          every schedule.
        </p>
        <p className="text-sm my-3 text-gray-500">
          Instant delivery from bbnow: In response to the ever-increasing demand
          for convenience, bbnow by bigbasket offers lightning-fast grocery
          delivery, ensuring that your essentials are at your doorstep within
          15-30 minutes. Our quick delivery service has revolutionized the way
          you shop for groceries. Choose from 5000+ grocery essentials. bbnow is
          available only in select cities.
        </p>
        <p className="text-sm my-3 text-gray-500">
          Whether it's a last-minute dinner party or you simply need something
          urgently, we've got you covered. This service exemplifies our
          commitment to providing you with not just the widest range of products
          but also the fastest and most efficient shopping experience, making
          bigbasket.com the go-to destination for all your immediate grocery
          needs.
        </p>
      </div>
    </div>
  );
};

export default Home;
