const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="text-xl font-bold">Demo App</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
