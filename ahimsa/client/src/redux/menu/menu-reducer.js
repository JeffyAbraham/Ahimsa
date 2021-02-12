const INITIAL_STATE = {
  menuSection: [
    {
      Id: 1,
      Title: "Clothing",
      Link: "/Clothing",
      Items: [
        { id: 1, Title: "Jackets", Link: "/Jacket" },
        { id: 2, Title: "Shoes", Link: "/Shoes" },
        { id: 3, Title: "Dress", Link: "/Dress" },
        { id: 4, Title: "Makeup", Link: "/Makeup" },
      ],
    },
    {
      Id: 2,
      Title: "Shoes & Accessories",
      Link: "/Shoes & Accessories",
      Items: [
        { id: 1, Title: "Supplement", Link: "/Supplements" },
        { id: 2, Title: "Nootropics", Link: "/Nootropics" },
      ],
    },
    {
      Id: 3,
      Title: "Beauty & Wellness",
      Link: "/Beauty & Wellness",
      Items: [
        { id: 1, Title: "Supplement", Link: "/Supplements" },
        { id: 2, Title: "Nootropics", Link: "/Nootropics" },
      ],
    },
    {
      Id:4,
      Title: "Gifts",
      Link: "/Gifts",
      Items: [
        { id: 1, Title: "Supplement", Link: "/Supplements" },
        { id: 2, Title: "Nootropics", Link: "/Nootropics" },
      ],
    },
    {
      Id:4,
      Title: "Home & Furniture",
      Link: "/  Home & Furniture",
      Items: [
        { id: 1, Title: "Supplement", Link: "/Supplements" },
        { id: 2, Title: "Nootropics", Link: "/Nootropics" },
      ],
    },
  
    
  ],

};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DISPLAY_DIRECTORY":
      return {
        state,
      };

    default:
      return state;
  }
};

export default menuReducer;
