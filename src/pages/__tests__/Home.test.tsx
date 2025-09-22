import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from '../Home'

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('Home Page', () => {
  test('renders hero section with main heading', () => {
    renderWithRouter(<Home />)
    
    expect(screen.getByText('Premium Halal Certified')).toBeInTheDocument()
    expect(screen.getByText('Chicken Products')).toBeInTheDocument()
  })

  test('renders call-to-action buttons', () => {
    renderWithRouter(<Home />)
    
    expect(screen.getByText('View Certifications')).toBeInTheDocument()
    expect(screen.getByText('Our Products')).toBeInTheDocument()
  })

  test('renders introduction section', () => {
    renderWithRouter(<Home />)
    
    expect(screen.getByText('Welcome to Jnagrofoods')).toBeInTheDocument()
    expect(screen.getByText(/At Jnagrofoods, we are committed/)).toBeInTheDocument()
  })

  test('renders why choose us section', () => {
    renderWithRouter(<Home />)
    
    expect(screen.getByText('Why Choose Us?')).toBeInTheDocument()
    expect(screen.getByText('Halal Certified')).toBeInTheDocument()
    expect(screen.getByText('ISO 22000 Certified')).toBeInTheDocument()
    expect(screen.getByText('Closed-loop Farming')).toBeInTheDocument()
    expect(screen.getByText('Fresh Quality Products')).toBeInTheDocument()
  })

  test('renders photo gallery section', () => {
    renderWithRouter(<Home />)
    
    expect(screen.getByText('Our Facilities')).toBeInTheDocument()
    expect(screen.getByText('Take a look at our state-of-the-art facilities')).toBeInTheDocument()
  })

  test('renders call to action section', () => {
    renderWithRouter(<Home />)
    
    expect(screen.getByText('Ready to Experience Quality?')).toBeInTheDocument()
    expect(screen.getByText('Get in Touch')).toBeInTheDocument()
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  test('renders all why choose us items with correct content', () => {
    renderWithRouter(<Home />)
    
    // Check for specific descriptions
    expect(screen.getByText(/Both our farm and chicken products are Halal certified/)).toBeInTheDocument()
    expect(screen.getByText(/Our food safety management system meets the highest international standards/)).toBeInTheDocument()
    expect(screen.getByText(/Sustainable farming practices with complete control/)).toBeInTheDocument()
    expect(screen.getByText(/Premium quality chicken products delivered fresh/)).toBeInTheDocument()
  })
})
