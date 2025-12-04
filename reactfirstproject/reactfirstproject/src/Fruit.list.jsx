import apple from './img/apple.jpg';
import carrot from './img/carrot.jpg';
import potato from './img/potato.jpg';
import tomato from './img/tomato.jpg';


import React from 'react';

import Fruit from './fruit';

// 模拟数据 (使用您提供的西兰花数据)
const Fruits = [
    {
        id: 1,
        name: "apple",
        imageSrc: apple, // 替换为您上传的图片链接或本地路径
        description: "An apple is a crisp, round fruit that comes in various colors and is known for its refreshing taste and numerous health benefits.",
        price: 3.20
    },


    {
        id: 2,
        name: "carrot",
        imageSrc: carrot, // 替换为您上传的图片链接或本地路径
        description: "A crunchy, sweet, and vibrant orange root vegetable, often enjoyed raw, cooked, or juiced, and rich in beta-carotene, fiber, and vitamins.",
        price: 2.20
    },

    {
        id: 3,
        name: "potato",
        imageSrc: potato, // 替换为您上传的图片链接或本地路径
        description: "A starchy, versatile tuber that can be boiled, baked, fried, or mashed, forming a staple in many cuisines.",
        price: 3.20
    },

    {
        id: 4,
        name: "tomato",
        imageSrc: tomato, // 替换为您上传的图片链接或本地路径
        description: "A juicy, red fruit often treated as a vegetable, bursting with flavor and commonly used in sauces, salads, and cooking.",
        price: 3.20
    },
   
];

const FruitList = ({search}) => {
    
    const filtered = Fruits.filter(v =>
        v.name.toLowerCase().includes(search.toLowerCase())
      );

    return (
        
        // 使用 Bootstrap Container 来限制内容宽度并居中
        <div className="container mt-5">
            
            {/* 使用 Bootstrap Row 来定义行 */}
            <div className="row g-4">
                
                {filtered.map(fruit => (
                    <div key={fruit.id} className="col-12 col-lg-4">
                        <Fruit
                            name={fruit.name}
                            imageSrc={fruit.imageSrc}
                            description={fruit.description}
                            price={fruit.price}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FruitList;