import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Certificates from '../Certificates'

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('Certificates Page', () => {
  test('renders hero section with main heading', () => {
    renderWithRouter(<Certificates />)
    
    expect(screen.getByText('Our Certifications')).toBeInTheDocument()
    expect(screen.getByText(/Trust and transparency through internationally recognized certifications/)).toBeInTheDocument()
  })

  test('renders all three certificates', () => {
    renderWithRouter(<Certificates />)
    
    expect(screen.getByText('Halal Certified Farm')).toBeInTheDocument()
    expect(screen.getByText('Halal Certified Chicken Products')).toBeInTheDocument()
    expect(screen.getByText('ISO 22000 Food Safety Management')).toBeInTheDocument()
  })

  test('displays certificate details correctly', () => {
    renderWithRouter(<Certificates />)
    
    // Check for certificate numbers
    expect(screen.getByText('HAL-2024-001234')).toBeInTheDocument()
    expect(screen.getByText('HMA-2024-567890')).toBeInTheDocument()
    expect(screen.getByText('ISO-22000-2024-001')).toBeInTheDocument()
    
    // Check for validity dates
    expect(screen.getAllByText('December 31, 2025')).toHaveLength(3)
  })

  test('opens certificate modal when certificate is clicked', () => {
    renderWithRouter(<Certificates />)
    
    const certificateCard = screen.getByText('Halal Certified Farm')
    fireEvent.click(certificateCard)
    
    // Modal should open with certificate details
    expect(screen.getByText('Certificate Details')).toBeInTheDocument()
    expect(screen.getByText('Significance')).toBeInTheDocument()
    expect(screen.getByText('Download Certificate')).toBeInTheDocument()
  })

  test('closes certificate modal when close button is clicked', () => {
    renderWithRouter(<Certificates />)
    
    // Open modal
    const certificateCard = screen.getByText('Halal Certified Farm')
    fireEvent.click(certificateCard)
    
    // Verify modal is open
    expect(screen.getByText('Certificate Details')).toBeInTheDocument()
    
    // Close modal
    const closeButton = screen.getByText('×')
    fireEvent.click(closeButton)
    
    // Modal should be closed
    expect(screen.queryByText('Certificate Details')).not.toBeInTheDocument()
  })

  test('renders why certifications matter section', () => {
    renderWithRouter(<Certificates />)
    
    expect(screen.getByText('Why Our Certifications Matter')).toBeInTheDocument()
    expect(screen.getByText('Trust & Confidence')).toBeInTheDocument()
    expect(screen.getByText('International Standards')).toBeInTheDocument()
    expect(screen.getByText('Continuous Improvement')).toBeInTheDocument()
  })

  test('renders contact section for verification', () => {
    renderWithRouter(<Certificates />)
    
    expect(screen.getByText('Need Verification?')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByText('Email Certificates Team')).toBeInTheDocument()
  })

  test('displays certificate significance in modal', () => {
    renderWithRouter(<Certificates />)
    
    // Open Halal Farm certificate modal
    const halalFarmCard = screen.getByText('Halal Certified Farm')
    fireEvent.click(halalFarmCard)
    
    expect(screen.getByText(/This certification ensures that our entire farming operation/)).toBeInTheDocument()
  })
})
