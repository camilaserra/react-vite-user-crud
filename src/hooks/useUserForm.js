import { useState } from 'react'
import { cpfMask, phoneMask } from '../utils/inputMasks'
import { isValidCPF } from '../utils/validators/cpfValidator'
import { getUsers, saveUsers } from '../services/localStorageService'
import { useNavigate } from 'react-router-dom'

export function useUserForm() {
    const [form, setForm] = useState({
        name: '',
        cpf: '',
        phone: '',
        email: ''
    })

    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        let formattedValue = value

        if (name === 'cpf') {
            formattedValue = cpfMask(value)
        }

        if (name === 'phone') {
            formattedValue = phoneMask(value)
        }

        setForm((prev) => ({
            ...prev,
            [name]: formattedValue
        }))

        setErrors((prev) => {
            if (!prev[name]) return prev
            const { [name]: _, ...rest } = prev
            return rest
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = {}

        if (!form.name.trim() || form.name.trim().length < 3) {
            newErrors.name = 'Nome deve conter ao menos 3 caracteres'
        }

        if (!isValidCPF(form.cpf)) {
            newErrors.cpf = 'CPF inválido'
        }

        if (!form.phone || form.phone.replace(/\D/g, '').length < 10) {
            newErrors.phone = 'Telefone inválido'
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        const users = getUsers()

        saveUsers([
            ...users,
            {
                id: Date.now(),
                name: form.name.trim(),
                cpf: form.cpf.replace(/\D/g, ''),
                phone: form.phone.replace(/\D/g, ''),
                email: form.email
            }
        ])

        navigate('/list')
    }

    const isButtonDisabled =
        !form.name.trim() ||
        !form.cpf ||
        !form.phone ||
        !form.email ||
        Object.keys(errors).length > 0

    return {
        form,
        errors,
        handleChange,
        handleSubmit,
        isButtonDisabled
    }
}
