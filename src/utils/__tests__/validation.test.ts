import { isValidEmail, isValidPhone, validateContactForm, formatPhoneNumber, sanitizeInput } from '../validation'

describe('Validation Utils', () => {
  describe('isValidEmail', () => {
    test('returns true for valid email addresses', () => {
      expect(isValidEmail('test@example.com')).toBe(true)
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true)
      expect(isValidEmail('test+tag@example.org')).toBe(true)
    })

    test('returns false for invalid email addresses', () => {
      expect(isValidEmail('invalid-email')).toBe(false)
      expect(isValidEmail('@example.com')).toBe(false)
      expect(isValidEmail('test@')).toBe(false)
      expect(isValidEmail('')).toBe(false)
      expect(isValidEmail('test.example.com')).toBe(false)
    })
  })

  describe('isValidPhone', () => {
    test('returns true for valid phone numbers', () => {
      expect(isValidPhone('1234567890')).toBe(true)
      expect(isValidPhone('+1234567890')).toBe(true)
      expect(isValidPhone('(123) 456-7890')).toBe(true)
      expect(isValidPhone('123-456-7890')).toBe(true)
    })

    test('returns false for invalid phone numbers', () => {
      expect(isValidPhone('123')).toBe(false)
      expect(isValidPhone('abc123')).toBe(false)
      expect(isValidPhone('')).toBe(false)
      expect(isValidPhone('0123456789')).toBe(false) // Starts with 0
    })
  })

  describe('validateContactForm', () => {
    test('returns no errors for valid form data', () => {
      const validData = {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890',
        subject: 'Test Subject',
        message: 'Test message'
      }

      const errors = validateContactForm(validData)
      expect(errors).toEqual({})
    })

    test('returns errors for missing required fields', () => {
      const invalidData = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }

      const errors = validateContactForm(invalidData)
      expect(errors).toHaveProperty('name')
      expect(errors).toHaveProperty('email')
      expect(errors).toHaveProperty('subject')
      expect(errors).toHaveProperty('message')
    })

    test('returns error for invalid email', () => {
      const dataWithInvalidEmail = {
        name: 'John Doe',
        email: 'invalid-email',
        subject: 'Test Subject',
        message: 'Test message'
      }

      const errors = validateContactForm(dataWithInvalidEmail)
      expect(errors).toHaveProperty('email')
      expect(errors.email).toBe('Please enter a valid email address')
    })

    test('returns error for invalid phone when provided', () => {
      const dataWithInvalidPhone = {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123',
        subject: 'Test Subject',
        message: 'Test message'
      }

      const errors = validateContactForm(dataWithInvalidPhone)
      expect(errors).toHaveProperty('phone')
      expect(errors.phone).toBe('Please enter a valid phone number')
    })

    test('does not validate phone when not provided', () => {
      const dataWithoutPhone = {
        name: 'John Doe',
        email: 'john@example.com',
        subject: 'Test Subject',
        message: 'Test message'
      }

      const errors = validateContactForm(dataWithoutPhone)
      expect(errors).not.toHaveProperty('phone')
    })
  })

  describe('formatPhoneNumber', () => {
    test('formats 10-digit phone number correctly', () => {
      expect(formatPhoneNumber('1234567890')).toBe('(123) 456-7890')
    })

    test('returns original string for non-10-digit numbers', () => {
      expect(formatPhoneNumber('123')).toBe('123')
      expect(formatPhoneNumber('12345678901')).toBe('12345678901')
    })

    test('handles phone numbers with formatting', () => {
      expect(formatPhoneNumber('(123) 456-7890')).toBe('(123) 456-7890')
      expect(formatPhoneNumber('123-456-7890')).toBe('(123) 456-7890')
    })
  })

  describe('sanitizeInput', () => {
    test('removes HTML tags', () => {
      expect(sanitizeInput('<script>alert("xss")</script>')).toBe('scriptalert("xss")/script')
      expect(sanitizeInput('<div>Hello</div>')).toBe('divHello/div')
    })

    test('trims whitespace', () => {
      expect(sanitizeInput('  hello  ')).toBe('hello')
    })

    test('handles empty string', () => {
      expect(sanitizeInput('')).toBe('')
    })

    test('handles string without HTML tags', () => {
      expect(sanitizeInput('Hello World')).toBe('Hello World')
    })
  })
})
