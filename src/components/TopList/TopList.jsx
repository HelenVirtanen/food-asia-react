import React from "react";
import Potato from "../../assets/potato.png";
import Salade from "../../assets/salade.png";
import VegSalade from "../../assets/veg-salade.png";
import Meat from "../../assets/meat.png";

const FoodData = [
  {
    image: Salade,
    rating: "⭐⭐⭐⭐⭐",
    price: "$9.99",
    name: "Salade",
    description:
      "A refreshing mix of crisp greens, juicy tomatoes, and a zesty vinaigrette.",
  },
  {
    image: Potato,
    rating: "⭐⭐⭐⭐⭐",
    price: "$5.99",
    name: "Potato with Sauce",
    description:
      "Golden roasted potatoes paired with a creamy, savory sauce for the perfect comfort meal.",
  },
  {
    image: VegSalade,
    rating: "⭐⭐⭐⭐⭐",
    price: "$7.99",
    name: "Vegan Salade",
    description:
      "A vibrant medley of fresh veggies tossed in a tangy vegan dressing.",
  },
  {
    image: Meat,
    rating: "⭐⭐⭐⭐⭐",
    price: "$15.99",
    name: "Meat with Tomatoes",
    description:
      "Tender, juicy meat cooked to perfection and served with a rich, flavorful glaze.",
  },
];

const TopList = () => {
  return (
    <div className="container py-14">
      {/* header section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Top List</h1>
        <p>Our top list</p>
      </div>
      {/* card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {FoodData.map((item, index) => (
          <div
            key={index}
            className="bg-white/50 p-5 sm:p-3 rounded-3xl hover:scale-110 transition duration-300"
          >
            <img
              src={item.image}
              alt=""
              className="w-60 sm:w-40 sm:h-40 mx-auto object-cover rounded-full img-shadow"
            />
            <div className="fspace-y-2">
              <p className="text-red-500">{item.rating}</p>
              <p className="text-lg font-semibold">{item.name}</p>
              <p>{item.description}</p>
              <p className="text-lg font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopList;
