import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'

const Home = () => {
  return (
    <div>
      <div className='pt-[120px] ml-[150px] pb-[30px]'>
        <p className='text-[30px] font-bold'>Каталог товаров</p>
      </div>

      <div className='flex gap-[20px] flex-wrap justify-start ml-[100px] '>
        <ProductCard  text1="Смарфоны и планшеты" text2 ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod"/>
        <ProductCard  text1="Смарфоны и планшеты" text2 ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod"/>
        <ProductCard  text1="Смарфоны и планшеты" text2 ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod"/>
        <ProductCard  text1="Смарфоны и планшеты" text2 ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod"/>
        <ProductCard  text1="Смарфоны и планшеты" text2 ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod"/>
        <ProductCard  text1="Смарфоны и планшеты" text2 ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod"/>
        <ProductCard  text1="Смарфоны и планшеты" text2 ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod"/>
        <ProductCard  text1="Смарфоны и планшеты" text2 ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod"/>
        <ProductCard  text1="Смарфоны и планшеты" text2 ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod"/>
        <ProductCard  text1="Смарфоны и планшеты" text2 ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod"/>
        <ProductCard  text1="Смарфоны и планшеты" text2 ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod"/>
        <ProductCard  text1="Смарфоны и планшеты" text2 ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod"/>
        <ProductCard  text1="Смарфоны и планшеты" text2 ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod"/>
      </div>

    </div>
  )
}

export default Home