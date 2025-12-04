import React from 'react';
import Vegetable from './vegetable';

import broccoli from "./img/broccoli.jpg";
import cabbage from "./img/cabbage.jpg";
import chili from "./img/chili.jpg";
import onion from "./img/onion.jpg";

// 模拟数据 (使用您提供的西兰花数据)
const Vegetables = [
    {
        id: 101,
        name: "broccoli",
        imageSrc: broccoli,
        description: "An apple is a crisp, round fruit that comes in various colors and is known for its refreshing taste and numerous health benefits.",
        price: 1.80
    },


    {
        id: 2,
        name: "cabbage",
        imageSrc:cabbage, // 替换为您上传的图片链接或本地路径
        description: "A crunchy, sweet, and vibrant orange root vegetable, often enjoyed raw, cooked, or juiced, and rich in beta-carotene, fiber, and vitamins.",
        price: 120
    },

    {
        id: 3,
        name: "chili",
        imageSrc: chili, // 替换为您上传的图片链接或本地路径
        description: "A starchy, versatile tuber that can be boiled, baked, fried, or mashed, forming a staple in many cuisines.",
        price: 1.60
    },

    {
        id: 4,
        name: "onion",
        imageSrc: onion, // 替换为您上传的图片链接或本地路径
        description: "A juicy, red fruit often treated as a vegetable, bursting with flavor and commonly used in sauces, salads, and cooking.",
        price: 2.20
    },
   
];



const VList = ({search}) => {

    const filtered = Vegetables.filter(v =>
        v.name.toLowerCase().includes(search.toLowerCase())
      );
      
      
    return (
        // 使用 Bootstrap Container 来限制内容宽度并居中
        <div className="container mt-5">
            
            {/* 使用 Bootstrap Row 来定义行 */}
            <div className="row g-4">
                
                {filtered.map(vege => (
                    <div key={vege.id} className="col-12 col-lg-4">
                        <Vegetable
                            name={vege.name}
                            imageSrc={vege.imageSrc}
                            description={vege.description}
                            price={vege.price}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VList;