import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 p-4 bg-gray-900 text-white">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/" className="block p-2 hover:bg-gray-700 rounded">
              Home
            </Link>
          </li>
          <li>
            <Link href="/messages" className="block p-2 hover:bg-gray-700 rounded">
              Messages
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
