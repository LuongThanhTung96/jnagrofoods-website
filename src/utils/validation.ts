/**
 * Email validation utility
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Phone number validation utility
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))
}

/**
 * Form validation utility
 */
export interface FormErrors {
  [key: string]: string
}

export const validateContactForm = (data: {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}): FormErrors => {
  const errors: FormErrors = {}

  if (!data.name.trim()) {
    errors.name = 'Name is required'
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required'
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (data.phone && !isValidPhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number'
  }

  if (!data.subject.trim()) {
    errors.subject = 'Subject is required'
  }

  if (!data.message.trim()) {
    errors.message = 'Message is required'
  }

  return errors
}

/**
 * Format phone number for display
 */
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phone
}

/**
 * Sanitize input to prevent XSS
 */
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '')
    .trim()
}
