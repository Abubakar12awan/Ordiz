import ErrorIcon from '@mui/icons-material/ErrorOutline';
import "./WalletError.css"

const WalletError = ({ error = "" }: { error: string | undefined }) => {
	return (
		<div className="container">
			<div className="r-cont">
				<ErrorIcon color="error" sx={{ fontSize: "90px", marginBottom: "10px", fill: "#006DD2" }} />
				<h1>Request Failed!</h1>
				<p className="nnp ppt">{error}</p>
				<p className="nnp ppt">Please be patient and retry in a few minutes.</p>
				<p className="nnp ppt">Thank you</p>
			</div>
		</div>
	)
}
export default WalletError