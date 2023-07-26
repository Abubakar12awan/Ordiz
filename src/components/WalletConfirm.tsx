import "./WalletError.css"

const WalletConfirm = () => {
	return (
		<div className="container">
			<div className="r-cont">
				<div className="svg-hol">
					<svg width="141" height="134" viewBox="0 0 141 134" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M141 66.968L125.362 49.1696L127.541 25.6092L104.404 20.3593L92.2909 0L70.5 9.34735L48.7091 0L36.5959 20.3593L13.4591 25.5452L15.6382 49.1056L0 66.968L15.6382 84.7664L13.4591 108.391L36.5959 113.641L48.7091 134L70.5 124.589L92.2909 133.936L104.404 113.577L127.541 108.327L125.362 84.7664L141 66.968ZM76.9091 98.9795H64.0909V86.1749H76.9091V98.9795ZM76.9091 73.3703H64.0909V34.9565H76.9091V73.3703Z" fill="#C54150" />
					</svg>
				</div>
				<h1 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "700", textTransform: "none" }}>Verifying...</h1>
				<p className="nnp ppt" style={{ fontWeight: 100, maxWidth: "520px" }}> Your role will be assigned within 10-15 mins!</p>
				<p className="lit ptt imp" style={{ textDecoration: "underline", paddingTop: "20px" }}>Close tab and return to Discord.</p>
			</div>
		</div>
	)
}
export default WalletConfirm