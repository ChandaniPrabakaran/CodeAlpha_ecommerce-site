
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Categories = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    {
      id: 1,
      name: "Electronics",
      description: "Latest gadgets and electronic devices",
      image: "/placeholder.svg",
      productCount: 156
    },
    {
      id: 2,
      name: "Clothing",
      description: "Fashion for men, women, and kids",
      image: "/placeholder.svg",
      productCount: 234
    },
    {
      id: 3,
      name: "Home & Garden",
      description: "Everything for your home and garden",
      image: "/placeholder.svg",
      productCount: 89
    },
    {
      id: 4,
      name: "Sports & Outdoors",
      description: "Gear for all your adventures",
      image: "/placeholder.svg",
      productCount: 127
    },
    {
      id: 5,
      name: "Books & Media",
      description: "Books, movies, music, and more",
      image: "/placeholder.svg",
      productCount: 76
    },
    {
      id: 6,
      name: "Health & Beauty",
      description: "Personal care and wellness products",
      image: "/placeholder.svg",
      productCount: 93
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-2xl font-bold text-blue-600">ShopHub</Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/categories" className="text-blue-600">Categories</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Product Categories</h1>
          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
          {categories.map((category) => (
            <Link key={category.id} to={`/search?category=${category.name.toLowerCase()}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className={viewMode === 'grid' ? 'p-6' : 'p-4 flex items-center space-x-4'}>
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className={viewMode === 'grid' ? 'w-full h-48 object-cover rounded-lg mb-4' : 'w-16 h-16 object-cover rounded-lg'}
                  />
                  <div className={viewMode === 'grid' ? 'text-center' : 'flex-1'}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-gray-600 mb-3">{category.description}</p>
                    <span className="text-sm text-blue-600 font-medium">
                      {category.productCount} products
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
