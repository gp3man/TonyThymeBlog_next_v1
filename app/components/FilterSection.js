"use client";

import { useState } from "react";
import DownCaret from "./DownCaret";
import UpCaret from "./UpCaret";

const Filter = () => {
  const [meal, setMeal] = useState(false);
  const [dietary, setDietary] = useState(false);
  const [method, setMethod] = useState(false);
  const [protein, setProtein] = useState(false);
  const mealList = [
    "Appetizers",
    "Breakfast",
    "Condiments",
    "Desserts",
    "Drinks & Smoothies",
    "Lunch & Dinner",
    "Salads & Sides",
    "Snacks",
    "Soups & Chilis",
  ];

  const dietaryList = [
    "Dairy-Free",
    "Egg-Free",
    "Gluten-free",
    "Grain-Free",
    "Nut-free",
    "Paleo",
    "Vegan",
    "Vegetarian",
    "Whole30",
  ];

  const methodList = [
    "Air Fryer",
    "Blender",
    "Grill",
    "Instant Pot",
    "Meal Prep Recipes",
    "No-Bake",
    "Oven",
    "Slow Cooker",
    "Smoker",
    "Stovetop",
  ];

  const proteinList = [
    "Beef",
    "Chicken",
    "Eggs",
    "Fish & Seafood",
    "Meatless",
    "Pork",
    "Turkey",
  ];

  return (
    <div className="bg-stone-900 rounded-lg p-1 w-80%">
      Filter By:
      <div className="flex-row md:flex justify-around space-y-1 m-2 p-2">
        <div className="flex flex-col">
          <button
            id="dropdownCheckboxButton"
            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            type="button"
            onClick={() => {
              setMeal(!meal);
            }}
          >
            Meal {meal ? <UpCaret /> : <DownCaret />}
          </button>
          {meal && (
            <div
              id="mealCheckbox"
              className="z-10 w-80% md:w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200">
                {mealList?.map((field) => (
                  <li>
                    <div className="flex items-center">
                      <input
                        id="checkbox-item-1"
                        type="checkbox"
                        value={field}
                        className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="checkbox-item-1"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {field}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <button
            id="dropdownCheckboxButton"
            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            type="button"
            onClick={() => {
              setDietary(!dietary);
            }}
          >
            Dietary {dietary ? <UpCaret /> : <DownCaret />}
          </button>
          {dietary && (
            <div
              id="mealCheckbox"
              className="z-10  w-80% md:w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200">
                {dietaryList.map((field) => (
                  <li>
                    <div className="flex items-center">
                      <input
                        id="checkbox-item-1"
                        type="checkbox"
                        value={field}
                        className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="checkbox-item-1"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {field}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <button
            id="dropdownCheckboxButton"
            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            type="button"
            onClick={() => {
              setMethod(!method);
            }}
          >
            Method {method ? <UpCaret /> : <DownCaret />}
          </button>
          {method && (
            <div
              id="mealCheckbox"
              className="z-10  w-80% md:w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200">
                {methodList.map((field) => (
                  <li>
                    <div className="flex items-center">
                      <input
                        id="checkbox-item-1"
                        type="checkbox"
                        value={field}
                        className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="checkbox-item-1"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {field}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <button
            id="dropdownCheckboxButton"
            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            type="button"
            onClick={() => {
              setProtein(!protein);
            }}
          >
            Protein {protein ? <UpCaret /> : <DownCaret />}
          </button>
          {protein && (
            <div
              id="mealCheckbox"
              className="z-10  w-80% md:w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200">
                {proteinList.map((field) => (
                  <li>
                    <div className="flex items-center">
                      <input
                        id="checkbox-item-1"
                        type="checkbox"
                        value={field}
                        className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      />
                      <label
                        htmlFor="checkbox-item-1"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {field}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
