import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block text-center justify-center py-2 pl-3 pr-4 font-semibold text-[#fbfafa] sm:text-md rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
