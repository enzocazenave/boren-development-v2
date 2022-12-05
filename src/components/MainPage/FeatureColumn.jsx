export const FeatureColumn = ({ icon, title, text }) => {
    return (
        <div className="FeatureColumn-container">
            { icon }
            <span className="FeatureColumn-container-title">{ title }</span>
            <p className="FeatureColumn-container-text">{ text }</p>
        </div>
    )
}