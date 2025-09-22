import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Layout from '../Layout'

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('Layout Component', () => {
  test('renders logo and company name', () => {
    renderWithRouter(<Layout><div>Test content</div></Layout>)
    
    expect(screen.getByText('Jnagrofoods')).toBeInTheDocument()
    expect(screen.getByText('Halal Certified Quality')).toBeInTheDocument()
  })

  test('renders navigation menu', () => {
    renderWithRouter(<Layout><div>Test content</div></Layout>)
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('Certificates')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  test('toggles mobile menu when hamburger button is clicked', () => {
    renderWithRouter(<Layout><div>Test content</div></Layout>)
    
    const menuButton = screen.getByRole('button')
    expect(menuButton).toBeInTheDocument()
    
    // Menu should be hidden initially
    expect(screen.queryByText('Home')).toBeInTheDocument() // Desktop nav visible
    
    // Click to open mobile menu
    fireEvent.click(menuButton)
    
    // Mobile menu items should be visible
    const mobileMenuItems = screen.getAllByText('Home')
    expect(mobileMenuItems).toHaveLength(2) // Desktop + Mobile
  })

  test('renders footer with contact information', () => {
    renderWithRouter(<Layout><div>Test content</div></Layout>)
    
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('Contact Info')).toBeInTheDocument()
    expect(screen.getByText('info@jnagrofoods.com')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
  })

  test('renders children content', () => {
    renderWithRouter(<Layout><div data-testid="test-content">Test content</div></Layout>)
    
    expect(screen.getByTestId('test-content')).toBeInTheDocument()
  })
})
