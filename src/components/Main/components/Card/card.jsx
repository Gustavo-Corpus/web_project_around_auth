
function Card({ card, handleOpenPopup, onCardLike, onCardDelete }) {

  function handleLikeClick() {  
    onCardLike(card);  
  }  
  
  function handleDeleteClick() {  
    onCardDelete(card._id);  
  }

  return (  
    <div className="elements__item">  
      <button   
        type="button"   
        className="elements__delete"  
        onClick={handleDeleteClick}  
      ></button>  
      <img   
        className="elements__item-image"   
        src={card.link}   
        alt={card.name}   
        onClick={() => handleOpenPopup({  
          type: 'image',  
          card: card  
        })}
      />  
      <div className="elements__item-content">  
        <h2 className="elements__item-title">{card.name}</h2>  
        <div className="elements__like-container">  
          <button   
            type="button"   
            className={`elements__item-like ${card.isLiked ? 'elements__item-like_active' : ''}`}  
            onClick={handleLikeClick}  
          ></button>  
        </div>  
      </div>  
    </div>  
  );  
}  
  
export default Card;