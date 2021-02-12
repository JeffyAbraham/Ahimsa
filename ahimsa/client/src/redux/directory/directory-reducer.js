const INITIAL_STATE = {
  productSection: [
    {
      id: 1,
      title: "hats",
      image:
        " https://images.ctfassets.net/5de70he6op10/6jZ55m4laSQ27tvuIAb205/a881f1e6487322d9da1a8e59314ea31a/011121_HPG_LS_1.jpg",
      sectionLink: "hats",
      width: "900px",
      height: "441px",
      subMenu: [[{ id: "1", title: "black hat", sectionLink: "blackhats" },{ id: "2", title: "black hat", sectionLink: "blackhats" }],[{ id: "3", title: "black hat", sectionLink: "blackhats" },{ id: "4", title: "black hat", sectionLink: "blackhats" }]],
    },

    {
      id: 2,
      title: "jackets",
      image:
        "https://i1.wp.com/artmyideas.com/wp-content/uploads/2018/12/50-Beautiful-Bedroom-Wall-Art-Ideas-And-Decorations-16.jpg?w=1200&ssl=1",
      width: "290px",
      height: "370px",
      sectionLink: "jackets",
      subMenu: [[{ id: "1", title: "black hat", sectionLink: "blackhats" },{ id: "2", title: "black hat", sectionLink: "blackhats" }],[{ id: "3", title: "black hat", sectionLink: "blackhats" },{ id: "4", title: "black hat", sectionLink: "blackhats" }]],
    },
    {
      id: 3,
      title: "mens",
      image:
        "https://images.ctfassets.net/5de70he6op10/kS1y4K6FtUt74xkNBefwW/c870b8242cb2e203c4a1bf70d585793f/011121_HPG_LS_4.jpg?w=2882&q=80&fm=webp",
      width: "650px",
      height: "500px",
      sectionLink: "mens",
      subMenu: [[{ id: "1", title: "black hat", sectionLink: "blackhats" },{ id: "2", title: "black hat", sectionLink: "blackhats" }],[{ id: "3", title: "black hat", sectionLink: "blackhats" },{ id: "4", title: "black hat", sectionLink: "blackhats" }]],
    },
    {
      id: 4,
      title: "womens",
      image:
        "https://images.ctfassets.net/5de70he6op10/kS1y4K6FtUt74xkNBefwW/c870b8242cb2e203c4a1bf70d585793f/011121_HPG_LS_4.jpg?w=2882&q=80&fm=webp",
      width: "900px",
      height: "441px",
      sectionLink: "womens",
      subMenu: [[{ id: "1", title: "black hat", sectionLink: "blackhats" },{ id: "2", title: "black hat", sectionLink: "blackhats" }],[{ id: "3", title: "black hat", sectionLink: "blackhats" },{ id: "4", title: "black hat", sectionLink: "blackhats" }]],
    },
    {
      id: 5,
      title: "sneakers",
      image:
        "https://www.planetorganic.com/images/categories/small_VEGAN_OFFERS.jpg",
      size: "large",
      sectionLink: "sneakers",
      subMenu: [[{ id: "1", title: "black hat", sectionLink: "blackhats" },{ id: "2", title: "black hat", sectionLink: "blackhats" }],[{ id: "3", title: "black hat", sectionLink: "blackhats" },{ id: "4", title: "black hat", sectionLink: "blackhats" }]],
    },
  ],
};

const dirctoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DISPLAY_DIRECTORY":
      return {
        state,
      };

    default:
      return state;
  }
};

export default dirctoryReducer;
