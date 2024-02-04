import Link from 'next/link'
import Image from 'next/image'

const Category = ({id, categoryName, path, image}) => {
    return ( 
        <div className="CategoryCard">
            <Link href={path}>
                <button className='CategoryButton' style={{backgroundImage: `url(${image})` }}>
                    <Image src={image} alt={categoryName} width={200} height={80} />
                    <div className="CategoryCardDetails">
                        <h1>{categoryName}</h1>
                    </div>
                </button>
            </Link>
        </div>
     );
}
 
export default Category;