import '../index.css'

// const user = {
//     name : 'Sandesh',
//     img : 'https://res.cloudinary.com/dldrjl92a/image/upload/v1726334077/4568147_lhieht.webp',
//     imgSize : 250
// }

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 }, 
];

export default function Demo(){

    const listItems = products.map(product =>
        <li
            key = {product.id}
            style = {{
                color : product.isFruit ? 'magenta' : 'darkgreen'
            }}>
                {product.title}
        </li>
        );
    return (
        <>
            {/* <div className='flex justify-center '>
            <img src="favicon.ico" className='avatar ' alt="Image" />
            </div> */}

           {/* <div className='flex justify-center'>

             <h1>{user.name}</h1>
             <img src={user.img} alt={'photo of' + user.name} className='' style={{width : user.imgSize, height : user.imgSize}}/>
           </div> */}

           <ul>{listItems}</ul>
        </>
    );
}