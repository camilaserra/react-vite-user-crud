import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import UserForm from './index.jsx'

vi.mock('react-router-dom', () => {
  return {
    useNavigate: vi.fn(),
  }
})

describe('UserForm', () => {
  it('atualiza os inputs quando o usuário digita', () => {
    render(<UserForm />)

    const nameInput = screen.getByPlaceholderText('nome completo')
    const emailInput = screen.getByPlaceholderText('ex: tinnova@gmail.com')
    const cpfInput = screen.getByPlaceholderText('ex: 000.000.000-00')
    const phoneInput = screen.getByPlaceholderText('ex: (00) 00000-0000')

    fireEvent.change(nameInput, { target: { value: 'Camila Serra' } })
    fireEvent.change(emailInput, { target: { value: 'camila@gmail.com' } })
    fireEvent.change(cpfInput, { target: { value: '12345678901' } })
    fireEvent.change(phoneInput, { target: { value: '11999999999' } })

    expect(nameInput.value).toBe('Camila Serra')
    expect(emailInput.value).toBe('camila@gmail.com')
    expect(cpfInput.value).toBe('123.456.789-01') 
    expect(phoneInput.value).toBe('(11) 99999-9999') 
  })

  it('botão de submit fica desabilitado se o formulário estiver inválido', () => {
    render(<UserForm />)

    const submitButton = screen.getByRole('button', { name: /cadastrar/i })
    expect(submitButton).toBeDisabled()
  })
})
