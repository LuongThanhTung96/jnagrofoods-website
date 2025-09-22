import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Contact from '../Contact'

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('Contact Page', () => {
  test('renders hero section with main heading', () => {
    renderWithRouter(<Contact />)
    
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByText(/Get in touch with our team/)).toBeInTheDocument()
  })

  test('renders contact information cards', () => {
    renderWithRouter(<Contact />)
    
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Business Hours')).toBeInTheDocument()
  })

  test('displays correct contact details', () => {
    renderWithRouter(<Contact />)
    
    expect(screen.getByText('info@jnagrofoods.com')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('123 Farm Road')).toBeInTheDocument()
    expect(screen.getByText('Monday - Friday: 8:00 AM - 6:00 PM')).toBeInTheDocument()
  })

  test('renders contact form with all required fields', () => {
    renderWithRouter(<Contact />)
    
    expect(screen.getByLabelText('Full Name *')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address *')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument()
    expect(screen.getByLabelText('Company')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject *')).toBeInTheDocument()
    expect(screen.getByLabelText('Message *')).toBeInTheDocument()
    expect(screen.getByLabelText('Inquiry Type')).toBeInTheDocument()
  })

  test('form submission shows success message', async () => {
    renderWithRouter(<Contact />)
    
    // Fill in required fields
    fireEvent.change(screen.getByLabelText('Full Name *'), { target: { value: 'John Doe' } })
    fireEvent.change(screen.getByLabelText('Email Address *'), { target: { value: 'john@example.com' } })
    fireEvent.change(screen.getByLabelText('Subject *'), { target: { value: 'Test Subject' } })
    fireEvent.change(screen.getByLabelText('Message *'), { target: { value: 'Test message' } })
    
    // Submit form
    fireEvent.click(screen.getByText('Send Message'))
    
    // Check for loading state
    expect(screen.getByText('Sending...')).toBeInTheDocument()
    
    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText(/Thank you! Your message has been sent successfully/)).toBeInTheDocument()
    }, { timeout: 3000 })
  })

  test('form validation works for required fields', () => {
    renderWithRouter(<Contact />)
    
    // Try to submit without filling required fields
    fireEvent.click(screen.getByText('Send Message'))
    
    // Form should not submit and required fields should be marked as invalid
    const nameInput = screen.getByLabelText('Full Name *')
    const emailInput = screen.getByLabelText('Email Address *')
    
    expect(nameInput).toBeRequired()
    expect(emailInput).toBeRequired()
  })

  test('renders inquiry type options', () => {
    renderWithRouter(<Contact />)
    
    const inquirySelect = screen.getByLabelText('Inquiry Type')
    expect(inquirySelect).toBeInTheDocument()
    
    // Check for all inquiry type options
    expect(screen.getByText('General Inquiry')).toBeInTheDocument()
    expect(screen.getByText('Business Partnership')).toBeInTheDocument()
    expect(screen.getByText('Distribution Inquiry')).toBeInTheDocument()
    expect(screen.getByText('Certification Questions')).toBeInTheDocument()
    expect(screen.getByText('Customer Support')).toBeInTheDocument()
  })

  test('renders map placeholder and additional info', () => {
    renderWithRouter(<Contact />)
    
    expect(screen.getByText('Visit Our Location')).toBeInTheDocument()
    expect(screen.getByText('Interactive Map')).toBeInTheDocument()
    expect(screen.getByText('Office Hours')).toBeInTheDocument()
    expect(screen.getByText('Quick Response')).toBeInTheDocument()
  })

  test('renders emergency contact section', () => {
    renderWithRouter(<Contact />)
    
    expect(screen.getByText('Need Immediate Assistance?')).toBeInTheDocument()
    expect(screen.getByText('Call Now: (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('Emergency Email')).toBeInTheDocument()
  })

  test('form input changes update state correctly', () => {
    renderWithRouter(<Contact />)
    
    const nameInput = screen.getByLabelText('Full Name *')
    const emailInput = screen.getByLabelText('Email Address *')
    
    fireEvent.change(nameInput, { target: { value: 'Jane Smith' } })
    fireEvent.change(emailInput, { target: { value: 'jane@example.com' } })
    
    expect(nameInput).toHaveValue('Jane Smith')
    expect(emailInput).toHaveValue('jane@example.com')
  })
})
