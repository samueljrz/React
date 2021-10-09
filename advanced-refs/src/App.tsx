import React, { FormEvent, useCallback, useRef } from 'react'
import Input from './components/Input'
import Modal, { ModalProps } from './components/Modal'

function App() {
  const inputRef = useRef<HTMLInputElement>(null)
  const acceptTermsRef = useRef({value: false})
  const modalRef = useRef<ModalProps>(null)

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault()
    inputRef.current?.focus()

    console.log(inputRef.current?.value)
    console.log(acceptTermsRef.current.value)
  },[])

  const handleAcceptTerms = useCallback(() => {
    acceptTermsRef.current.value = !acceptTermsRef.current.value
  }, [])

  const openModal = useCallback(() => {
    modalRef.current?.handleOpenModal()
  }, [])

  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input name="name" label="Nome completo" placeholder="Digite seu nome" />
      <button type="button" onClick={handleAcceptTerms}>
        Aceitar termos
      </button>
      <button type="submit">Enviar</button>
      </form>
      <button onClick={openModal}>Abrir modal</button>
      <Modal ref={modalRef } />
    </div>
  );
}

export default App;
