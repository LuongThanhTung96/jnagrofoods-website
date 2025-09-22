import React from 'react'

const About: React.FC = () => {
  const productionSteps = [
    {
      step: '01',
      title: 'Farm Management',
      description: 'Our chickens are raised in controlled environments with strict hygiene protocols and natural feed.'
    },
    {
      step: '02',
      title: 'Halal Processing',
      description: 'All processing follows Islamic dietary laws with certified Halal procedures and oversight.'
    },
    {
      step: '03',
      title: 'Quality Control',
      description: 'Rigorous testing and inspection at every stage to ensure food safety and quality standards.'
    },
    {
      step: '04',
      title: 'Packaging & Distribution',
      description: 'Fresh packaging and cold chain distribution to maintain product quality and safety.'
    }
  ]

  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on quality, ensuring every product meets our high standards.'
    },
    {
      title: 'Halal Compliance',
      description: 'Complete adherence to Islamic dietary laws in all our processes and products.'
    },
    {
      title: 'Food Safety',
      description: 'ISO 22000 certified processes ensure the highest level of food safety.'
    },
    {
      title: 'Sustainability',
      description: 'Responsible farming practices that protect the environment for future generations.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Jnagrofoods</h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Your trusted partner for premium Halal certified chicken products, 
              committed to quality, safety, and Islamic dietary compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded with a vision to provide the highest quality Halal certified chicken products, 
                  Jnagrofoods has grown from a small family farm to a trusted name in the poultry industry. 
                  Our journey began with a simple belief: that food should be safe, nutritious, and prepared 
                  according to Islamic dietary laws.
                </p>
                <p>
                  Today, we serve customers worldwide while maintaining our core values of quality, 
                  integrity, and commitment to Halal standards. Our state-of-the-art facilities and 
                  rigorous quality control processes ensure that every product meets the highest 
                  international standards.
                </p>
                <p>
                  We are proud to be both Halal certified and ISO 22000 certified, demonstrating our 
                  commitment to both Islamic dietary compliance and international food safety standards.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
                <span className="text-8xl">🏭</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading provider of Halal certified chicken products globally, 
                setting the standard for quality, safety, and Islamic dietary compliance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide safe, nutritious, and Halal certified chicken products while maintaining 
                the highest standards of quality and food safety for our customers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape our commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Production Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From farm to table, we maintain the highest standards at every step of our production process.
            </p>
          </div>
          
          <div className="space-y-8">
            {productionSteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Preview */}
      <section className="section-padding bg-green-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">Certified Excellence</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Our certifications demonstrate our commitment to quality, safety, and Halal compliance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-4">🕌</div>
              <h3 className="text-xl font-semibold mb-2">Halal Certified</h3>
              <p className="text-green-100">Both farm and products certified for Islamic dietary compliance</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">ISO 22000</h3>
              <p className="text-green-100">International food safety management system certification</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
