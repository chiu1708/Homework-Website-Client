import { useNavigate } from "react-router-dom";
import "./Header.css";

const BasicHeader = () => {
	const navigate = useNavigate();
	const handleGoBack = () => {
		navigate("/");
	}
  return (
    <div className="header">
        <div className="back-button-container">
					<button onClick={handleGoBack} className="back-button button plain-button">
            <i className="fa-solid fa-arrow-left"></i>
					</button>
        </div>
    </div>
  )
}

export default BasicHeader