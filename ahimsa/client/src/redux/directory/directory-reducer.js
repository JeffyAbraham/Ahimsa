

const INITIAL_STATE = {

    productSection: [
        {
          id: 1,
          title: "hats",
          image:
            "https://www.planetorganic.com/images/categories/small_AUTO_VeganBeauty.jpg",
          sectionLink: "hats",
        },
    
        {
          id: 2,
          title: "jackets",
          image:
            "https://www.planetorganic.com/images/categories/small_AUTO_VeganHealth.jpg",
          sectionLink: "jackets",
        },
        {
          id: 3,
          title: "mens",
          image:
            "https://www.planetorganic.com/images/categories/small_AUTO_VeganGroceries.jpg",
          sectionLink: "mens",
        },
        {
          id: 4,
          title: "womens",
          image:
            "https://www.planetorganic.com/images/categories/small_VEGAN_OFFERS.jpg",
          size: "large",
          sectionLink: "womens",
        },
        {
          id: 5,
          title: "sneakers",
          image:
            "https://www.planetorganic.com/images/categories/small_VEGAN_OFFERS.jpg",
          size: "large",
          sectionLink: "sneakers",
        },
    ]
  };

  const dirctoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "DISPLAY_DIRECTORY":
        return {
        state
        }
  
      
  
      default:
        return state;
    }
  };

  export default dirctoryReducer;
  

