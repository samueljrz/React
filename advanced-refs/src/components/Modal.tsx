import React, { useCallback, useState, forwardRef, useImperativeHandle }from 'react';


export interface ModalProps {
  handleOpenModal: () => void
}

const Modal: React.ForwardRefRenderFunction<ModalProps> = (props, ref) => {
  const [visible, setVisible] = useState(false)
  
  const handleOpenModal = useCallback(() => {
    setVisible(true)
  }, [])

  useImperativeHandle(ref, () => {
    return {
      handleOpenModal
    }
  })  

  const handleOnCloseModal = useCallback(() => {
    setVisible(false)
  }, [])

  if(!visible) return null

  return (
    <div>
      Modal aberto

      <button onClick={handleOnCloseModal}>Fechar Modal</button>
    </div>
  );
}
 
export default forwardRef(Modal);