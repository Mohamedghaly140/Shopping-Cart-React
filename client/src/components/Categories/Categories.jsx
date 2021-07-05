import React, { Component } from "react";
import CategoryItem from "../UI/CategoryItem/CategoryItem";
import classes from "./Categories.module.scss";

import categoriesData from "../../services/all-categories.json";

class Categories extends Component {
  render() {
    return (
      <div className={classes.categories__container}>
        {categoriesData.map(category => (
          <div
            key={category.id}
            className={`${category.hidden ? classes.category__hidden : ""} ${
              classes.category__container
            }`}
          >
            {category.items.map(item => (
              <CategoryItem
                key={item.id}
                lg={item.lg}
                sm={item.sm}
                title={item.title}
                imageUrl={item.imageUrl}
                description={item.description}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;

/* 
{
    "id": 4,
    "hidden": true,
    "items": [
      {
        "id": 1,
        "title": "Cosmetics",
        "description": "Beautiful. Colorful. You.",
        "imageUrl": "/images/categories/cosmetics@2x.png",
        "lg": false,
        "sm": true
      },
      {
        "id": 2,
        "title": "Electronics",
        "description": "Find latest electronic devices.",
        "imageUrl": "/images/categories/electronics@2x.png",
        "lg": true,
        "sm": false
      },
      {
        "id": 3,
        "title": "Cosmetics",
        "description": "Beautiful. Colorful. You.",
        "imageUrl": "/images/categories/cosmetics@2x.png",
        "lg": false,
        "sm": true
      },
      {
        "id": 4,
        "title": "Electronics",
        "description": "Find latest electronic devices.",
        "imageUrl": "/images/categories/electronics@2x.png",
        "lg": true,
        "sm": false
      },
      {
        "id": 5,
        "title": "Cosmetics",
        "description": "Beautiful. Colorful. You.",
        "imageUrl": "/images/categories/cosmetics@2x.png",
        "lg": false,
        "sm": true
      },
      {
        "id": 6,
        "title": "Electronics",
        "description": "Find latest electronic devices.",
        "imageUrl": "/images/categories/electronics@2x.png",
        "lg": true,
        "sm": false
      }
    ]
  }
*/
