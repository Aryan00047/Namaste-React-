export const mockMenu = {
  "statusCode": 0,
  "data": {
    "restaurantId": "987654",
    "restaurantName": "The Desi Bowl Factory",
    "cuisines": ["North Indian", "Chinese", "Healthy Bowls"],
    "avgRating": 4.3,
    "totalRatings": 3241,
    "deliveryTime": 28,
    "costForTwo": 40000,
    "groupedCard": {
      "cardGroupMap": {
        "REGULAR": {
          "cards": [
            {
              "card": {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                  "vegOnlyDetails": {
                    "imageId": "AutoVegOnly_qkjowj",
                    "title": "Showing only vegetarian options.",
                    "description": "Tap on the VEG ONLY button to see all options"
                  },
                  "offersFilter": { "attributes": { "displayText": "Offers" } },
                  "topRatedFilter": { "attributes": { "displayText": "Ratings 4.0+" } },
                  "vegFilter": { "attributes": { "displayText": "VEG" } },
                  "nonvegFilter": { "attributes": { "displayText": "NONVEG" } }
                }
              }
            },

            {
              "card": {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel",
                  "title": "Top Picks",
                  "carousel": [
                    {
                      "type": "TopCarousel",
                      "bannerId": "101",
                      "creativeId": "TopPicks/veg-manchurian.png",
                      "title": "Veg Manchurian Bowl with Fried Rice",
                      "dish": {
                        "info": {
                          "id": "170220385",
                          "name": "Veg Manchurian Bowl with Fried Rice",
                          "category": "Chinese Bowls",
                          "description": "Crispy veggie fritters tossed in Manchurian sauce. Served with fried rice.",
                          "imageId": "veg_manchurian.png",
                          "inStock": 1,
                          "isVeg": 1,
                          "defaultPrice": 26900,
                          "avgRating": 4.8,
                          "totalRatings": 1253,
                          "ribbon": {
                            "text": "Bestseller",
                            "textColor": "#ffffff",
                            "topBackgroundColor": "#d53d4c"
                          },
                          "variantsV2": {
                            "variantGroups": [
                              {
                                "groupId": "59048418",
                                "name": "Choose Size",
                                "variations": [
                                  { "name": "Lite (450ml)", "price": 269, "id": "183263067", "default": 1 },
                                  { "name": "Regular (650ml)", "price": 309, "id": "183263068" }
                                ]
                              }
                            ]
                          },
                          "addons": [
                            {
                              "groupId": "217517017",
                              "groupName": "Add Veg Starters - Mini",
                              "choices": [
                                { "id": "135484405", "name": "Hunan Paneer Dry - Mini", "price": 12900, "isVeg": 1, "avgRating": 4.3 },
                                { "id": "135484408", "name": "Paneer Manchurian Dry - Mini", "price": 12900, "isVeg": 1, "avgRating": 4.1 }
                              ]
                            },
                            {
                              "groupId": "217517018",
                              "groupName": "Add Drinks",
                              "choices": [
                                { "id": "115435427", "name": "Lemon Ice Tea", "price": 9900, "isVeg": 1, "avgRating": 4.6 },
                                { "id": "115435428", "name": "Peach Ice Tea", "price": 9900, "isVeg": 1, "avgRating": 4.2 }
                              ]
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "TopCarousel",
                      "bannerId": "102",
                      "creativeId": "TopPicks/rajma-chawal.png",
                      "title": "Rajma Chawal Bowl",
                      "dish": {
                        "info": {
                          "id": "72172906",
                          "name": "Rajma Chawal Bowl",
                          "category": "Indian Bowls",
                          "description": "Slow-cooked rajma in a rich tomato gravy served with jeera rice.",
                          "imageId": "rajma_chawal.png",
                          "isVeg": 1,
                          "defaultPrice": 30900,
                          "avgRating": 4.4,
                          "totalRatings": 864,
                          "variantsV2": {
                            "variantGroups": [
                              {
                                "groupId": "40731963",
                                "name": "Select Rice",
                                "variations": [
                                  { "name": "Jeera Rice", "price": 309, "id": "130366654", "default": 1 },
                                  { "name": "Mutter Pulao", "price": 329, "id": "130366655" }
                                ]
                              }
                            ]
                          },
                          "addons": [
                            {
                              "groupId": "143232646",
                              "groupName": "Add Drinks",
                              "choices": [
                                { "id": "115435471", "name": "7 Up Pet Bottle", "price": 5700, "isVeg": 1, "avgRating": 3.9 },
                                { "id": "115435473", "name": "Masala Shikanji", "price": 9900, "isVeg": 1, "avgRating": 4.5 }
                              ]
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            },

            {
              "card": {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                  "title": "Indian Bowls",
                  "itemCards": [
                    {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                        "info": {
                          "id": "1001",
                          "name": "Paneer Butter Masala Bowl",
                          "category": "Indian Bowls",
                          "description": "Creamy paneer in tomato gravy served with jeera rice.",
                          "imageId": "paneer_butter.png",
                          "inStock": 1,
                          "isVeg": 1,
                          "price": 29900,
                          "avgRating": 4.7,
                          "totalRatings": 1421,
                          "addons": [
                            {
                              "groupId": "ADD1",
                              "groupName": "Add Dessert",
                              "choices": [
                                { "id": "D1", "name": "Gulab Jamun (2 pcs)", "price": 7900, "isVeg": 1, "avgRating": 4.3 },
                                { "id": "D2", "name": "Rasmalai", "price": 8900, "isVeg": 1, "avgRating": 4.5 }
                              ]
                            }
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                        "info": {
                          "id": "1002",
                          "name": "Dal Makhani Bowl",
                          "category": "Indian Bowls",
                          "description": "Black lentils slow-cooked overnight in rich buttery gravy.",
                          "imageId": "dal_makhani.png",
                          "inStock": 1,
                          "isVeg": 1,
                          "price": 27900,
                          "avgRating": 3.8,
                          "totalRatings": 782
                        }
                      }
                    },
                    {
                      "card": {
                        "info": {
                          "id": "1003",
                          "name": "Mix Veg Curry Bowl",
                          "category": "Indian Bowls",
                          "description": "Seasonal vegetables cooked in Indian spices.",
                          "imageId": "mix_veg.png",
                          "isVeg": 1,
                          "price": 25900,
                          "avgRating": 2.3,
                          "totalRatings": 215
                        }
                      }
                    }
                  ]
                }
              }
            },

            {
              "card": {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                  "title": "Chinese Starters",
                  "itemCards": [
                    {
                      "card": {
                        "info": {
                          "id": "2001",
                          "name": "Veg Spring Rolls (6 pcs)",
                          "category": "Chinese Starters",
                          "description": "Crispy rolls stuffed with seasoned veggies.",
                          "imageId": "spring_rolls.png",
                          "price": 19900,
                          "isVeg": 1,
                          "avgRating": 4.6,
                          "totalRatings": 934,
                          "ribbon": { "text": "Top Rated" }
                        }
                      }
                    },
                    {
                      "card": {
                        "info": {
                          "id": "2002",
                          "name": "Chilli Paneer Dry",
                          "category": "Chinese Starters",
                          "description": "Soft paneer cubes tossed with onion, capsicum and chili sauce.",
                          "imageId": "chilli_paneer.webp",
                          "price": 23900,
                          "isVeg": 1,
                          "avgRating": 4.4,
                          "totalRatings": 1123
                        }
                      }
                    },
                    {
                      "card": {
                        "info": {
                          "id": "2003",
                          "name": "Crispy Corn Pepper Salt",
                          "category": "Chinese Starters",
                          "description": "Fried golden corn tossed in pepper & salt.",
                          "imageId": "crispy_corn.webp",
                          "price": 18900,
                          "isVeg": 1,
                          "avgRating": 3.1,
                          "totalRatings": 334
                        }
                      }
                    }
                  ]
                }
              }
            },

            {
              "card": {
                "card": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                  "title": "Desserts & Drinks",
                  "itemCards": [
                    {
                      "card": {
                        "info": {
                          "id": "3001",
                          "name": "Chocolate Mousse",
                          "category": "Desserts",
                          "description": "Rich, creamy chocolate mousse topped with whipped cream.",
                          "imageId": "choco_mousse.png",
                          "price": 12900,
                          "isVeg": 1,
                          "avgRating": 4.9,
                          "totalRatings": 567
                        }
                      }
                    },
                    {
                      "card": {
                        "info": {
                          "id": "3002",
                          "name": "Coolberg Peach Drink",
                          "category": "Drinks",
                          "description": "Non-alcoholic malt beverage with refreshing peach flavor.",
                          "imageId": "coolberg_peach.png",
                          "price": 11875,
                          "isVeg": 1,
                          "avgRating": 3.7,
                          "totalRatings": 198
                        }
                      }
                    },
                    {
                      "card": {
                        "info": {
                          "id": "3003",
                          "name": "Mango Lassi",
                          "category": "Drinks",
                          "description": "Sweet mango yogurt smoothie with a desi twist.",
                          "imageId": "mango_lassi.png",
                          "price": 9900,
                          "isVeg": 1,
                          "avgRating": 2.6,
                          "totalRatings": 89
                        }
                      }
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    }
  }
};
