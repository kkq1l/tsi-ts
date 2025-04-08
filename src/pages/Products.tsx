import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
const Products = () =>{
    const [products, setProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
  
    const handleAddProduct = () => {
      const newProduct = { title, description, price };
      setProducts([...products, newProduct]);
      setTitle('');
      setDescription('');
      setPrice('');
      setIsModalOpen(false);
    };

    return (
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Список товаров</h1>
          <Button  size="medium" color="primary" title="Добавить товар" 
            ronClick={() => setIsModalOpen(true)}/>
    
          {isModalOpen && (
            <div className="fixed inset-0 flex justify-center items-center">
              <div className="bg-blue-100 p-6 rounded shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Добавить товар</h2>
                <Input
                  title="Название"
                  length="small"
                  value={title}
                  ronChange={(e) => setTitle(e.target.value)}
                />
                <Input
                  title="Описание"
                  length="small"
                  value={description}
                  ronChange={(e) => setDescription(e.target.value)}
                />
                <Input
                  title="Цена"
                  length="small"
                  value={price}
                  ronChange={(e) => setPrice(e.target.value)}
                />
                <Button className="mb-20"
                  size="medium" 
                  color="succes" 
                  title="Добавить" 
                  ronClick={handleAddProduct}
                />
                <Button 
                  size="medium" 
                  color="secondary" 
                  title="Закрыть" 
                  ronClick={() => setIsModalOpen(false)} 
                />
              </div>
            </div>
          )}
    
          <ul className="mt-4">
            {products.map((product, index) => (
              <li key={index} className="border-b py-2">
                <h3 className="font-semibold">{product.title}</h3>
                <p>{product.description}</p>
                <p>Цена: {product.price} руб.</p>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default Products;