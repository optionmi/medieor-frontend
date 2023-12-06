// Categories
const categories = [
  {
    name: "Trading for Money",
    posts: 20,
  },
  {
    name: "Vault Keys Giveaway",
    posts: 10,
  },
  {
    name: "Looking for players",
    posts: 36,
  },
  {
    name: "Video and Audio Drivers",
    posts: 11,
  },
  {
    name: "2K Official Forums",
    posts: 5,
  },
];
export default function Categories() {
  return (
    <>
      <h1 className="mb-10 text-xl ">Categories</h1>
      <ul className="flex flex-col gap-2">
        {categories.map((cat) => (
          <li key={cat.name} className="flex justify-between">
            <a href="">{cat.name}</a>{" "}
            <span className="bg-[#d0d4d7] px-2 py-1 font-bold text-white rounded-xl">
              {cat.posts}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
