import "./WalletSuccess.css"

const WalletSuccess = () => {
	return (
		<div className="container">
			<div className="r-cont">
				<img src="/images/popper.png" alt="Popper" style={{ marginBottom: "20px" }} />
				<h1>Successfully Verified</h1>
				<p className="nnp ppt">Please check the verification channel in <span className="imp">$server_name</span> for your role status.</p>
				<p className="lit ptt imp" style={{ textDecoration: "underline", paddingTop: "20px" }}>Close tab and return to Discord.</p>
			</div>
		</div>
	)
}
export default WalletSuccess