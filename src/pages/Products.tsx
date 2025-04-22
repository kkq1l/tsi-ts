import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import axios from 'axios';

interface IProduct {
  title: string;
  description: string;
  price: number;
}


const Products: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  const handleAddProduct = () => {
    const priceNumber = parseFloat(price);
    
    if (isNaN(priceNumber)) {
      alert("Пожалуйста, введите корректную цену.");
      return;
    }
    
    const newProduct: IProduct = {
      title,
      description,
      price: priceNumber,
    };
    // const response = await fetch("http://localhost:5000/api/data");
    let response = fetch('http://localhost:5000/data', {
      method: 'POST',
      headers: {'Content-Type': 'application/json; charset=utf-8'},
      body: JSON.stringify(newProduct)
    })
    .then(response => response.json())
    .catch(error => console.log(error));
    response;

    setTitle('');
    setDescription('');
    setPrice('');
    setIsModalOpen(false);
return;

    setProducts([...products, newProduct]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Список товаров</h1>
      <Button size="medium" color="primary" title="Добавить товар" 
        ronClick={() => setIsModalOpen(true)} />

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center">
          <div className="bg-blue-100 p-6 rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Добавить товар</h2>
            <Input
              title="Название"
              length="short"
              value={title}
              typesq="normal"
              ronChange={(e) => setTitle(e.target.value)}
            />
            <Input
              title="Описание"
              length="short"
              typesq="normal"
              value={description}
              ronChange={(e) => setDescription(e.target.value)}
            />
            <Input
              title="Цена"
              length="short"
              typesq="normal"
              value={price}
              ronChange={(e) => setPrice(e.target.value)}
            />
            <Button
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