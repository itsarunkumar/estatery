export default function Nav() {
  return (
    <nav className="w-full flex justify-between gap-4 items-center h-16 bg-white shadow px-4">
      <div className="flex justify-center items-center gap-10">
        <div>
          <h4 className="uppercase text-purple-700 cursor-pointer">Estatery</h4>
        </div>

        <ul className="flex justify-evenly items-center gap-3">
          <li className="bg-purple-300 text-purple-700 px-6 py-2 rounded-md">
            Rent
          </li>
          <li>Buy</li>
          <li>Sell</li>
          <li>Manage property</li>
          <li>Resources</li>
        </ul>
      </div>

      <div className="gap-4 flex items-center">
        <button className="text-purple-700 px-6 py-2 rounded-md border-2 border-purple-600">
          Login
        </button>
        <button className="text-white bg-purple-700 px-6 py-2 rounded-md border-2 border-purple-600">
          Signup
        </button>
      </div>
    </nav>
  );
}
