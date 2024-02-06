import Link from 'next/link'
import Image from 'next/image'
import { IoPersonSharp } from "react-icons/io5";


const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" alt="site logo" width={200} height={80} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/suggestionForm">Suggest Content</Link>
      <Link href="/userProfile"><IoPersonSharp /></Link>
      <Link href="/favorites" style={{ fontSize: '1.12rem', color: '#d41442' }}>&#x2665;</Link>
    </nav>
  );
}
 
export default Navbar;