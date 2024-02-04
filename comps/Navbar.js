import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" alt="site logo" width={200} height={80} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/suggestionForm">Suggest Content</Link>
      <Link href="/favorites">My Favorites</Link>
    </nav>
  );
}
 
export default Navbar;