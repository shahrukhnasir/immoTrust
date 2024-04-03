import "../CommanButton/CommanButton.css";
const CommanButton = ({ label, style, onClick, icon }) => {
    return (
        <span className="GeneralButton" style={style} onClick={onClick}>
            <button type="submit">
                <div className="button">
                    <span>{label}</span>
                    <span className="icon"><img src={icon} alt="icon" /></span>
                </div>
            </button>
        </span>
    );
};
export default CommanButton;
