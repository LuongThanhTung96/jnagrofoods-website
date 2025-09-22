import React, { useState } from 'react'

interface Certificate {
  id: string
  title: string
  description: string
  issuer: string
  validUntil: string
  certificateNumber: string
  image: string
  pdfUrl: string
  significance: string
}

const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null)

  const certificates: Certificate[] = [
    {
      id: 'halal-farm',
      title: 'Halal Certified Farm',
      description: 'Our farm facility is certified Halal, ensuring all farming practices comply with Islamic dietary laws.',
      issuer: 'Islamic Food and Nutrition Council of America (IFANCA)',
      validUntil: 'December 31, 2025',
      certificateNumber: 'HAL-2024-001234',
      image: '/api/placeholder/400/300',
      pdfUrl: '/certificates/halal-farm-certificate.pdf',
      significance: 'This certification ensures that our entire farming operation, from feed to housing to processing, follows strict Halal guidelines as prescribed by Islamic law.'
    },
    {
      id: 'halal-chicken',
      title: 'Halal Certified Chicken Products',
      description: 'All our chicken products are certified Halal, guaranteeing compliance with Islamic dietary requirements.',
      issuer: 'Halal Monitoring Authority (HMA)',
      validUntil: 'December 31, 2025',
      certificateNumber: 'HMA-2024-567890',
      image: '/api/placeholder/400/300',
      pdfUrl: '/certificates/halal-chicken-certificate.pdf',
      significance: 'This certification covers all our chicken products, ensuring they are prepared, processed, and packaged according to Islamic dietary laws.'
    },
    {
      id: 'iso22000',
      title: 'ISO 22000 Food Safety Management',
      description: 'Our food safety management system is certified to ISO 22000 standards, ensuring the highest level of food safety.',
      issuer: 'International Organization for Standardization (ISO)',
      validUntil: 'December 31, 2025',
      certificateNumber: 'ISO-22000-2024-001',
      image: '/api/placeholder/400/300',
      pdfUrl: '/certificates/iso22000-certificate.pdf',
      significance: 'ISO 22000 is an international standard that specifies requirements for a food safety management system, ensuring safe food production and handling throughout the food chain.'
    }
  ]

  const selectedCertificate = certificates.find(cert => cert.id === selectedCert)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Certifications</h1>
            <p className="text-xl text-green-100 leading-relaxed">
              Trust and transparency through internationally recognized certifications. 
              View our official certificates and learn about their significance.
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Overview */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certification Overview</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our certifications demonstrate our commitment to quality, safety, and Halal compliance. 
              Click on any certificate to view details and download the official document.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate) => (
              <div 
                key={certificate.id}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedCert(certificate.id)}
              >
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <span className="text-6xl">📜</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{certificate.title}</h3>
                  <p className="text-gray-600 mb-4">{certificate.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Issuer:</span>
                      <span className="text-gray-900 font-medium">{certificate.issuer}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Valid Until:</span>
                      <span className="text-gray-900 font-medium">{certificate.validUntil}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Cert #:</span>
                      <span className="text-gray-900 font-medium">{certificate.certificateNumber}</span>
                    </div>
                  </div>
                  
                  <button className="w-full btn-primary">
                    View Certificate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Details Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{selectedCertificate.title}</h3>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-8xl">📜</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Certificate Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Issuer:</span>
                          <span className="text-gray-900">{selectedCertificate.issuer}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Certificate Number:</span>
                          <span className="text-gray-900">{selectedCertificate.certificateNumber}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Valid Until:</span>
                          <span className="text-gray-900">{selectedCertificate.validUntil}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Significance</h4>
                      <p className="text-gray-600 text-sm">{selectedCertificate.significance}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Download Certificate</h4>
                  <div className="space-y-4">
                    <button className="w-full btn-primary">
                      📄 View PDF Certificate
                    </button>
                    <button className="w-full btn-secondary">
                      💾 Download PDF
                    </button>
                  </div>
                  
                  <div className="mt-8 p-4 bg-green-50 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">Verification</h5>
                    <p className="text-green-700 text-sm">
                      This certificate can be verified by contacting the issuing authority 
                      with the certificate number provided above.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Why Certifications Matter */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Our Certifications Matter</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our certifications provide assurance and peace of mind for our customers and business partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust & Confidence</h3>
              <p className="text-gray-600">
                Third-party certifications provide independent verification of our quality and safety standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">International Standards</h3>
              <p className="text-gray-600">
                Our certifications meet international standards, ensuring global recognition and acceptance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Improvement</h3>
              <p className="text-gray-600">
                Regular audits and renewals ensure we maintain and improve our quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Verification */}
      <section className="section-padding bg-green-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">Need Verification?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us if you need additional verification or have questions about our certifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
              Contact Us
            </a>
            <a href="mailto:certificates@jnagrofoods.com" className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-8 rounded-lg transition-colors">
              Email Certificates Team
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Certificates
