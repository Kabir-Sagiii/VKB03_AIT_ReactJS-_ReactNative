import React, { useState } from 'react'
import Navbar from '../nav-bar/Navbar'
import Categories from '../categories/Categories'
import Product from '../product/Product'
function Products() {
  const [categories,setCategories] = useState([{
    image:"https://biogharlb.com/cdn/shop/collections/all_products.png?v=1732737232",
    title:"ALL"
  },
    {image:"https://img.freepik.com/premium-photo/illustration-ultra-realistic-4k-image-modern-electronic-device_756405-53536.jpg",
    title:"Electronics"},
    {image:"https://tse4.mm.bing.net/th/id/OIP.LI7ohUTG5GFEsgoMdhhZ9wHaEK?r=0&pid=Api&h=220&P=0",
    title:"Mens"},
    {image:"https://wallpapercave.com/wp/wp6130531.jpg",
    title:"Womens"},
    {image:"https://static.vecteezy.com/system/resources/previews/027/110/333/non_2x/fashion-model-kids-free-photo.jpg",
    title:"Kids"},
    {image:"https://www.thornior.com/content/images/2023/11/Screenshot-2023-11-23-at-17.20.53.png",
    title:"Furniture"},
    {
      image:"https://png.pngtree.com/background/20230612/original/pngtree-various-makeup-products-lie-on-a-table-on-dark-picture-image_3185889.jpg",
      title:"Cosmetics"
    }
  ])

  const [products,setProducts] = useState([
  {
    title: "Essence Mascara Lash Princess",
    image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
    price: 9.99,
    category: "beauty",
    description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    rating: 2.56
  },
  {
    title: "Eyeshadow Palette with Mirror",
    image: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
    price: 19.99,
    category: "beauty",
    description: "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    rating: 2.86
  },
  {
    title: "Powder Canister",
    image: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp",
    price: 14.99,
    category: "beauty",
    description: "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    rating: 4.64
  },
  {
    title: "Red Lipstick",
    image: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp",
    price: 12.99,
    category: "beauty",
    description: "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
    rating: 4.36
  },
  {
    title: "Red Nail Polish",
    image: "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp",
    price: 8.99,
    category: "beauty",
    description: "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
    rating: 4.32
  },
  {
    title: "Calvin Klein CK One",
    image: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp",
    price: 49.99,
    category: "fragrances",
    description: "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    rating: 4.37
  },
  {
    title: "Chanel Coco Noir Eau De",
    image: "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp",
    price: 129.99,
    category: "fragrances",
    description: "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
    rating: 4.26
  },
  {
    title: "Dior J'adore",
    image: "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
    price: 89.99,
    category: "fragrances",
    description: "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
    rating: 3.8
  },
  {
    title: "Dolce Shine Eau de",
    image: "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp",
    price: 69.99,
    category: "fragrances",
    description: "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
    rating: 3.96
  },
  {
    title: "Gucci Bloom Eau de",
    image: "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
    price: 79.99,
    category: "fragrances",
    description: "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
    rating: 2.74
  },
  {
    title: "Annibale Colombo Bed",
    image: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp",
    price: 1899.99,
    category: "furniture",
    description: "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
    rating: 4.77
  },
  {
    title: "Annibale Colombo Sofa",
    image: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp",
    price: 2499.99,
    category: "furniture",
    description: "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
    rating: 3.92
  },
  {
    title: "Bedside Table African Cherry",
    image: "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp",
    price: 299.99,
    category: "furniture",
    description: "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
    rating: 2.87
  },
  {
    title: "Knoll Saarinen Executive Conference Chair",
    image: "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/1.webp",
    price: 499.99,
    category: "furniture",
    description: "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
    rating: 4.88
  },
  {
    title: "Wooden Bathroom Sink With Mirror",
    image: "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/1.webp",
    price: 799.99,
    category: "furniture",
    description: "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
    rating: 3.59
  },
  {
    title: "Apple",
    image: "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp",
    price: 1.99,
    category: "groceries",
    description: "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
    rating: 4.19
  },
  {
    title: "Beef Steak",
    image: "https://cdn.dummyjson.com/product-images/groceries/beef-steak/1.webp",
    price: 12.99,
    category: "groceries",
    description: "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
    rating: 4.47
  },
  {
    title: "Cat Food",
    image: "https://cdn.dummyjson.com/product-images/groceries/cat-food/1.webp",
    price: 8.99,
    category: "groceries",
    description: "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
    rating: 3.13
  },
  {
    title: "Chicken Meat",
    image: "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/1.webp",
    price: 9.99,
    category: "groceries",
    description: "Fresh and tender chicken meat, suitable for various culinary preparations.",
    rating: 3.19
  },
  {
    title: "Cooking Oil",
    image: "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/1.webp",
    price: 4.99,
    category: "groceries",
    description: "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
    rating: 4.8
  },
  {
    title: "Cucumber",
    image: "https://cdn.dummyjson.com/product-images/groceries/cucumber/1.webp",
    price: 1.49,
    category: "groceries",
    description: "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
    rating: 4.07
  },
  {
    title: "Dog Food",
    image: "https://cdn.dummyjson.com/product-images/groceries/dog-food/1.webp",
    price: 10.99,
    category: "groceries",
    description: "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
    rating: 4.55
  },
  {
    title: "Eggs",
    image: "https://cdn.dummyjson.com/product-images/groceries/eggs/1.webp",
    price: 2.99,
    category: "groceries",
    description: "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
    rating: 2.53
  },
  {
    title: "Fish Steak",
    image: "https://cdn.dummyjson.com/product-images/groceries/fish-steak/1.webp",
    price: 14.99,
    category: "groceries",
    description: "Quality fish steak, suitable for grilling, baking, or pan-searing.",
    rating: 3.78
  },
  {
    title: "Green Bell Pepper",
    image: "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/1.webp",
    price: 1.29,
    category: "groceries",
    description: "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
    rating: 3.25
  },
  {
    title: "Green Chili Pepper",
    image: "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/1.webp",
    price: 0.99,
    category: "groceries",
    description: "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
    rating: 3.66
  },
  {
    title: "Honey Jar",
    image: "https://cdn.dummyjson.com/product-images/groceries/honey-jar/1.webp",
    price: 6.99,
    category: "groceries",
    description: "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
    rating: 3.97
  },
  {
    title: "Ice Cream",
    image: "https://cdn.dummyjson.com/product-images/groceries/ice-cream/1.webp",
    price: 5.49,
    category: "groceries",
    description: "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
    rating: 3.39
  },
  {
    title: "Juice",
    image: "https://cdn.dummyjson.com/product-images/groceries/juice/1.webp",
    price: 3.99,
    category: "groceries",
    description: "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
    rating: 3.94
  },
  {
    title: "Kiwi",
    image: "https://cdn.dummyjson.com/product-images/groceries/kiwi/1.webp",
    price: 2.49,
    category: "groceries",
    description: "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
    rating: 4.93
  }

])
  return (
    <div>
        <Navbar />

        <section className='h-[500px] shadow-xl border-2 w-[90%] my-20 mx-auto'>
            <img src="https://img.freepik.com/premium-photo/collection-electronic-devices-black-background-generative-ai_893571-1990.jpg?w=740" className='w-full h-full' alt="" />
        </section>

        <section className='w-[90%] m-auto flex justify-evenly'>
           {
              categories.map(function(element){

                return <Categories image={element.image} title={element.title}/>
              })
           }
        </section>

        <section className='w-[90%] m-auto flex gap-2 flex-wrap justify-evenly my-20'>
           {
               products.map(function({image,title,price,description}){
                  return <Product image={image} title={title} price={price} desc={description} />
               })
           }
        </section>
    </div>
  )
}

export default Products