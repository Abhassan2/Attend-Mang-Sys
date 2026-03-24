import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import CalculateRoundedIcon from "@mui/icons-material/CalculateRounded";

export default function CalculatorUi() {
  return (
    <div className="calculatorUi ui-container">
      <div>
        <CalculateRoundedIcon className="icon" />
        <h1 className="primary-text" style={{ color: "white", letterSpacing:"1px" }}>
            Calculator
        </h1>
      </div>
      <p className="secondary-text" style={{ color: "rgba(255,255,255,0.9" }}>
        calculate your sgpa & cgpa <ArrowForwardIosRoundedIcon />
      </p>
    </div>
  );
}
