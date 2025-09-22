import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  const whyChooseUs = [
    {
      icon: '🕌',
      title: 'Halal Certified',
      description: 'Both our farm and chicken products are Halal certified, ensuring complete compliance with Islamic dietary laws.'
    },
    {
      icon: '🏆',
      title: 'ISO 22000 Certified',
      description: 'Our food safety management system meets the highest international standards for food safety.'
    },
    {
      icon: '🌱',
      title: 'Closed-loop Farming',
      description: 'Sustainable farming practices with complete control over the entire production process from farm to table.'
    },
    {
      icon: '🥩',
      title: 'Fresh Quality Products',
      description: 'Premium quality chicken products delivered fresh, maintaining the highest standards of taste and nutrition.'
    }
  ]

  const galleryImages = [
    { src: '/api/placeholder/300/200', alt: 'Modern chicken farm facility' },
    { src: '/api/placeholder/300/200', alt: 'Quality control laboratory' },
    { src: '/api/placeholder/300/200', alt: 'Professional staff at work' },
    { src: '/api/placeholder/300/200', alt: 'Fresh chicken products' }
  ]

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Premium Halal Certified
                <span className="block text-green-200">Chicken Products</span>
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Trusted by customers worldwide for our commitment to quality, safety, and Islamic dietary compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/certificates" className="btn-primary text-center">
                  View Certifications
                </Link>
                <Link to="/products" className="btn-secondary text-center">
                  Our Products
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="aspect-video bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">🐔</span>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-green-100 font-semibold">Fresh from our farm</p>
                  <p className="text-green-200 text-sm">Direct to your table</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Welcome to Jnagrofoods
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Jnagrofoods, we are committed to providing the highest quality Halal certified chicken products 
              while maintaining the strictest food safety standards. Our ISO 22000 certification ensures that 
              every product meets international food safety requirements, giving you peace of mind with every purchase.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine traditional values with modern technology to deliver exceptional quality products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Facilities</h2>
            <p className="text-lg text-gray-600">
              Take a look at our state-of-the-art facilities and production processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden group-hover:shadow-lg transition-shadow">
                  <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <span className="text-4xl">🏭</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-600 text-center">{image.alt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-green-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Quality?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Jnagrofoods for their chicken needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
              Get in Touch
            </Link>
            <Link to="/about" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-8 rounded-lg transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
