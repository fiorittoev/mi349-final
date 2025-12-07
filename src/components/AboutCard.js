function AboutCard({ header, description }) {
  return (
    <div className="about-card-container">
        <div className="about-background-3"></div>
        <div className="about-background-2"></div>
        <div className="about-background-1">
            {header && <h1 className="about-card-title">{header}</h1>}
            {description && <p className="about-card-description">{description}</p>}
        </div>
    </div>
  );
}

export default AboutCard;
