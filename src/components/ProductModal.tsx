'use client';

import { useState } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  image: string;
  colors?: string[];
  description?: string;
}

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const { t, direction } = useLanguage();

  if (!isOpen) return null;

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{t('product_details')}</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Product Content */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Product Image */}
            <div className="flex justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-sm h-80 object-cover rounded-lg"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">{t('brand')}</p>
                <p className="font-medium text-gray-700">{product.brand}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-2xl font-bold text-primary">{product.price}</p>
              </div>

              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-3">{t('colors')}</p>
                  <div className="flex gap-2">
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(index)}
                        className={`w-8 h-8 rounded-full border-2 transition-all ${
                          selectedColor === index 
                            ? 'border-gray-900 scale-110' 
                            : 'border-gray-300 hover:border-gray-500'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <p className="text-sm font-medium text-gray-700 mb-3">{t('quantity')}</p>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={increaseQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Bag Button */}
              <Button className="w-full mt-6" size="lg">
                <ShoppingBag className={`w-5 h-5 ${direction === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                {t('add_to_bag')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}