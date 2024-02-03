import Link from 'next/link'
import Image from 'next/image'

const Category = ({categoryName, path, image}) => {
    return ( 
        <Link href={path} className="CategoryCard">
            <Image src={image} alt={categoryName} width={200} height={80} />
                <div className="CategoryCardDetails">
                    <h1>{categoryName}</h1>
            </div>
        </Link>
     );
}
 
export default Category;