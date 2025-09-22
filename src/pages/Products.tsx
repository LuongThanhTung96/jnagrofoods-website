import React, { useState } from 'react'

interface Product {
  id: number
  name: string
  description: string
  image: string
  features: string[]
  category: string
}

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products: Product[] = [
    {
      id: 1,
      name: 'Whole Fresh Chicken',
      description: 'Premium quality whole chicken, fresh from our farm, perfect for family meals and special occasions.',
      image: '/images/chicken.png',
      features: ['Halal Certified', 'Fresh Daily', 'No Antibiotics', 'Free Range'],
      category: 'whole'
    },
    {
      id: 2,
      name: 'Chicken Thighs',
      description: 'Tender and juicy chicken thighs, ideal for grilling, baking, or slow cooking.',
      image: '/images/chickenThighs.png',
      features: ['Halal Certified', 'Premium Cut', 'Tender & Juicy', 'Versatile'],
      category: 'cuts'
    },
    {
      id: 3,
      name: 'Chicken Wings',
      description: 'Perfectly sized chicken wings, great for appetizers, parties, or casual dining.',
      image: '/images/chickenWings.png',
      features: ['Halal Certified', 'Party Perfect', 'Crispy Skin', 'Flavorful'],
      category: 'cuts'
    },
    {
      id: 4,
      name: 'Chicken Breast',
      description: 'Lean and protein-rich chicken breast, perfect for healthy meals and fitness enthusiasts.',
      image: '/images/chickenBreast.png',
      features: ['Halal Certified', 'Lean Protein', 'Low Fat', 'High Protein'],
      category: 'cuts'
    },
    {
      id: 5,
      name: 'Chicken Drumsticks',
      description: 'Flavorful chicken drumsticks with bone-in for maximum taste and nutrition.',
      image: '/images/chickenDrumsticks.png',
      features: ['Halal Certified', 'Bone-In', 'Flavorful', 'Nutritious'],
      category: 'cuts'
    },
    {
      id: 6,
      name: 'Chicken Giblets',
      description: 'Fresh chicken giblets including liver, heart, and gizzard, perfect for traditional recipes.',
      image: '/images/chickenGiblets.png',
      features: ['Halal Certified', 'Traditional', 'Nutritious', 'Versatile'],
      category: 'specialty'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'whole', name: 'Whole Chicken' },
    { id: 'cuts', name: 'Chicken Cuts' },
    { id: 'specialty', name: 'Specialty Items' }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Premium quality Halal certified chicken products, carefully selected and processed 
              to meet the highest standards of quality and safety.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Categories</h2>
            <p className="text-lg text-gray-600">
              Choose from our wide range of premium chicken products
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <span className="text-6xl">
                    <img src={product.image}/>
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-green-600">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full btn-primary">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quality Assurance</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Halal Certification</h3>
                    <p className="text-gray-600">
                      All our products are certified Halal by recognized Islamic authorities, 
                      ensuring complete compliance with Islamic dietary laws.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">ISO 22000 Certified</h3>
                    <p className="text-gray-600">
                      Our food safety management system meets international standards, 
                      ensuring the highest level of food safety and quality.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Fresh Daily</h3>
                    <p className="text-gray-600">
                      Our products are processed and packaged fresh daily, 
                      maintaining optimal quality and taste.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
                <span className="text-8xl"><img src='images/qualityAssurance.png' style={{borderRadius:'8px'}}/></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-green-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Our Products?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us to learn more about our products, pricing, and distribution options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
              Contact Us
            </a>
            <a href="/certificates" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-8 rounded-lg transition-colors">
              View Certifications
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
