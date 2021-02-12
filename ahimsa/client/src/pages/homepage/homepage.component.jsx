import React from "react";
import "./homepage.style.css";

const HomePage = (props) => {
  return (
    <div className="homepage-display-grid">
      <div className="homepage-display-flex-2">
        <div className="homepage-display-items">
          <img
            src=" https://images.ctfassets.net/5de70he6op10/6jZ55m4laSQ27tvuIAb205/a881f1e6487322d9da1a8e59314ea31a/011121_HPG_LS_1.jpg"
            width="900"
            height="676"
            alt=""
          />
        </div>

        <div className="homepage-display-split">
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beautiful-festive-hand-made-candles-and-a-wooden-royalty-free-image-1601566745.jpg?crop=0.590xw:0.883xh;0.173xw,0.0611xh&resize=980:*"
            width="350"
            alt=""
          />
          <img
            src="https://images.ctfassets.net/5de70he6op10/5RIH0GLYLekbg81fxnAS5C/d7afefdfb6718277a58359272ee5fae2/RR_kitchen___dining.jpg?w=800&q=80&fm=webp"
            width="350"
            alt=""
          />
        </div>

        <div className="homepage-display-items">
          <img
            src=" https://images.ctfassets.net/5de70he6op10/kS1y4K6FtUt74xkNBefwW/c870b8242cb2e203c4a1bf70d585793f/011121_HPG_LS_4.jpg?w=2882&q=80&fm=webp"
            width="900"
            height="441"
            alt=""
          />
        </div>
      </div>

      <div className="homepage-display-flex">
        <img
          src="https://images.ctfassets.net/5de70he6op10/59S7xjBh9RjuXW0lHywbz7/3641e9ab31b0dfd20002c7220acbac14/RR_beauty.jpg?w=800&q=80&fm=webp"
          width="350"
          alt=""
        />
        <img
          src="https://images.ctfassets.net/5de70he6op10/3MIQw1QOCCgeCDA3LKfyld/13f6f23530fb68596b74d07c4d191aa9/RR_shoes.jpg?w=800&q=80&fm=webp"
          width="350"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomePage;
