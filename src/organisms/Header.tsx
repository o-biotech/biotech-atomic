import { JSX } from "preact";

export function Header(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <header
      {...props}
      className="bg-blue-500 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
    >
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <a href="/" className="text-white font-bold text-xl">Logo</a>
        </div>
        <div className="sm:hidden">
          <button
            type="button"
            className="text-white hover:text-gray-500 focus:text-gray-500 focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                className="hidden"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 18h16v-2H4v2ZM4 13h16v-2H4v2ZM4 6v2h16V6H4Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav className="px-2 pt-2 pb-4 sm:flex sm:p-0">
        <a
          href="/"
          className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:ml-2"
        >
          Home
        </a>
        <a
          href="/about"
          className="block px-2 py-1 mt-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
        >
          About
        </a>
        <a
          href="/contact"
          className="block px-2 py-1 mt-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
