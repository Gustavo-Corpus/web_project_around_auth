function Popup({ isOpen, onClose, title, children }) {  
  return (  
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>  
      <div className="popup__container"> 
        {title && <h2 className="popup__title">{title}</h2>} 
        <button  
          className="popup__close"  
          type="button"  
          onClick={onClose}  
        />  
        {children}  
      </div>  
    </div>  
  );  
}

export default Popup;