function TitleCard({ header, description }) {
  return (
    <div className="title-card-container">
        <div className="background-3"></div>
        <div className="background-2"></div>
        <div className="background-1">
            {header && <h1 className="title-card-title">{header}</h1>}
            {description && <p className="title-card-description">{description}</p>}
        </div>
    </div>
  );
}

export default TitleCard;
