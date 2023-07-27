import Article from "./Article";

function Wardrobe() {
  let wardrobe = [
    { type: "shirt", color: "red", size: "Medium" },
    { type: "shirt", color: "blue", size: "Medium" },
    { type: "pants", color: "blue", size: "Medium" },
    { type: "accessory", color: "sapphire", size: "" },
    { type: "accessory", color: "lilac", size: "" },
  ];

  return (
    <div id="wardrobe">
      <div id="wardrobe-1">
        {wardrobe.map((item) => (
          <Article
            type={item.type}
            color={item.color}
            key={item.type + item.color + item.size}
          />
        ))}
      </div>

      <div id="wardrobe-2">
        {wardrobe
          .filter((item) => item.color === "blue")
          .map((item) => (
            <Article
              type={item.type}
              color={item.color}
              key={item.type + item.color + item.size}
            />
          ))}
      </div>
    </div>
  );
}

export default Wardrobe;
