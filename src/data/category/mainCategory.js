export const mainCategory = [
  {
    name: "Men",
    categoryId: "men",
    level: 1,
    levelTwoCategory: [
      {
        name: "Topwere",
        categoryId: "men_topwear",
        parentCategoryId: "men",
        level: 2,
        levelThreeCategory: [
          {
            name: "T-Shirts",
            categoryId: "men_t_shirts",
            parentCategoryId: "men_topwear",
            level: 3,
          },
          {
            name: "Casual Shirts",
            categoryId: "men_casual_shirts",
            parentCategoryId: "men_topwear",
            level: 3,
          },
          {
            name: "Formal Shirts",
            categoryId: "men_formal_shirts",
            parentCategoryId: "men_topwear",
            level: 3,
          },
        ],
      },
      {
        name: "Bottomwere",
        categoryId: "men_bottomwear",
        parentCategoryId: "men",
        level: 2,
        levelThreeCategory: [
          {
            name: "Jeans",
            categoryId: "men_jeans",
            parentCategoryId: "men_bottomwear",
            level: 3,
          },
          {
            name: "Casual Trousers",
            categoryId: "men_casual_trousers",
            parentCategoryId: "men_bottomwear",
            level: 3,
          },
          {
            name: "Formal Trousers",
            categoryId: "men_formal_trousers",
            parentCategoryId: "men_bottomwear",
            level: 3,
          },
        ],
      },
    ],
  },
  {
    name: "Women",
    categoryId: "women",
    level: 1,
    levelTwoCategory: [
      {
        name: "Indian & Fusion Wear",
        categoryId: "women_indian_and_fusion_wear",
        parentCategoryId: "women",
        level: 2,
        levelThreeCategory: [
          {
            name: "Kurtas & Suits",
            categoryId: "women_kurtas_suits",
            parentCategoryId: "women_indian_and_fusion_wear",
            level: 3,
          },
          {
            name: "Sarees",
            categoryId: "women_sarees",
            parentCategoryId: "women_indian_and_fusion_wear",
            level: 3,
          },
        ],
      },
      {
        name: "Western Wear",
        categoryId: "women_western_wear",
        parentCategoryId: "women",
        level: 2,
        levelThreeCategory: [
          {
            name: "Dresses",
            categoryId: "women_dresses",
            parentCategoryId: "women_western_wear",
            level: 3,
          },
          {
            name: "Tops & T-Shirts",
            categoryId: "women_tops_tshirts",
            parentCategoryId: "women_western_wear",
            level: 3,
          },
        ],
      },
    ],
  },
  {
    name: "Home & Furniture",
    categoryId: "home_furniture",
    level: 1,
    levelTwoCategory: [
      {
        name: "Home Decor",
        categoryId: "home_decor",
        parentCategoryId: "home_furniture",
        level: 2,
        levelThreeCategory: [
          {
            name: "Wall Decor",
            categoryId: "wall_decor",
            parentCategoryId: "home_decor",
            level: 3,
          },
          {
            name: "Curtains",
            categoryId: "curtains",
            parentCategoryId: "home_decor",
            level: 3,
          },
        ],
      },
      {
        name: "Living Room Furniture",
        categoryId: "living_room_furniture",
        parentCategoryId: "home_furniture",
        level: 2,
        levelThreeCategory: [
          {
            name: "Sofas",
            categoryId: "sofas",
            parentCategoryId: "living_room_furniture",
            level: 3,
          },
          {
            name: "Coffee Tables",
            categoryId: "coffee_tables",
            parentCategoryId: "living_room_furniture",
            level: 3,
          },
        ],
      },
    ],
  },
  {
    name: "Electronics",
    categoryId: "electronics",
    level: 1,
    levelTwoCategory: [
      {
        name: "Mobiles",
        categoryId: "mobiles",
        parentCategoryId: "electronics",
        level: 2,
        levelThreeCategory: [
          {
            name: "Smartphones",
            categoryId: "smartphones",
            parentCategoryId: "mobiles",
            level: 3,
          },
          {
            name: "Feature Phones",
            categoryId: "feature_phones",
            parentCategoryId: "mobiles",
            level: 3,
          },
        ],
      },
      {
        name: "Laptops",
        categoryId: "laptops",
        parentCategoryId: "electronics",
        level: 2,
        levelThreeCategory: [
          {
            name: "Gaming Laptops",
            categoryId: "gaming_laptops",
            parentCategoryId: "laptops",
            level: 3,
          },
          {
            name: "Business Laptops",
            categoryId: "business_laptops",
            parentCategoryId: "laptops",
            level: 3,
          },
        ],
      },
    ],
  },
];
