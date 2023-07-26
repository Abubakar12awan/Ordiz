import "./WalletConnect.css"
import { useEffect, useState } from "react"
import { v4 } from "uuid"
import useBitcoinWallet from "../hooks/useBitcoinWallet"
import { WalletName } from "@manahippo/aptos-wallet-adapter"
import { CircularProgress } from "@mui/material"

type walconType = { verifying: boolean, collectionName: string, onClose: (wallet: WalletName<string> | string | undefined) => void }


const WalletConnect = ({ onClose, verifying, collectionName }: walconType) => {
	const [walletValue, setWalletValue] = useState("Select your wallet")
	const [showWallets, setShowWallets] = useState(false)
	const [saving, setSaving] = useState(false)
	const { wallets: walletList } = useBitcoinWallet();

	const handleClick = (name: WalletName<string> | string) => {
		onClose(name);
		// setSaving(true)
	};




	useEffect(()=>{
console.log(walletList);

	},[walletList])



	return (
		<div className="container">
			<div className="r-cont" style={{ gap: "14px" }}>
				<h1>Welcome to <span className="imp">Ordiz</span></h1>
				<p className="nnp">Connect your wallet below to verify your <span className="imp">{collectionName}</span> Ordinals holdings.</p>
				<p className="ptt">Connect Wallet</p>
				<div className="wal-inp">
					<div className="inp-cl" onClick={() => setShowWallets(prev => !prev)}>
						<span className={"inp-val " + (walletValue !== "Select your wallet" ? "active" : "")}>{walletValue}</span>
						<span className="inp-icc">
							<svg width="27" height="30" viewBox="0 0 27 30" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M13.5 22.5L6 15H10.5V9H16.5V15H21L13.5 22.5ZM27 21.75C27 22.32 26.685 22.815 26.205 23.07L14.355 29.73C14.115 29.91 13.815 30 13.5 30C13.185 30 12.885 29.91 12.645 29.73L0.795 23.07C0.315 22.815 0 22.32 0 21.75V8.25C0 7.68 0.315 7.185 0.795 6.93L12.645 0.27C12.885 0.0900001 13.185 0 13.5 0C13.815 0 14.115 0.0900001 14.355 0.27L26.205 6.93C26.685 7.185 27 7.68 27 8.25V21.75ZM13.5 3.225L3 9.135V20.865L13.5 26.775L24 20.865V9.135L13.5 3.225Z" fill="url(#paint0_linear_3_7883)" />
								<defs>
									<linearGradient id="paint0_linear_3_7883" x1="0.390675" y1="0.65126" x2="27.6361" y2="27.8879" gradientUnits="userSpaceOnUse">
										<stop stopColor="#006DD2" />
										<stop offset="1" stopColor="#1357CD" />
									</linearGradient>
								</defs>
							</svg>
						</span>
					</div>

					{showWallets && <div className="auto-comp">
						{walletList.map(wallet => <div key={v4()} className="wal-it" onClick={() => { setWalletValue(wallet); setShowWallets(false) }}>{wallet}</div>)}
					</div>}


				</div>

				<p className="ptt">Verify Wallet Ownership</p>


				{!(verifying || saving) && <button className={walletValue !== "Select your wallet" ? "active" : ""} onClick={() => walletValue === "Select your wallet" ? "" : handleClick(walletValue)}>
					<span>SIGN</span>

					<svg width="143" height="52" viewBox="0 0 143 52" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.84548 6.62728C12.3367 1.11761 1.35427 12.1369 12.3367 1.11761C57.0002 1.11761 86.2725 1.11761 131.018 1.11761C136.509 6.62728 131.018 1.11761 136.509 6.62728L142 12.1369V40.9294L137.04 45.9059L132.08 50.8823H10.9196L5.9598 45.9059L1 40.9294V12.4924L6.84548 6.62728Z" fill={walletValue !== "Select your wallet" ? "url(#paint0_linear_5_2212)" : "#242424"} />
						<path d="M12.3367 1.11761C1.35427 12.1369 12.3367 1.11761 6.84548 6.62728L1 12.4924M12.3367 1.11761L1 12.4924M12.3367 1.11761C57.0002 1.11761 86.2725 1.11761 131.018 1.11761M1 12.4924V40.9294M1 40.9294L5.9598 45.9059L10.9196 50.8823M1 40.9294L10.9196 50.8823M10.9196 50.8823H132.08M131.018 1.11761C136.509 6.62728 131.018 1.11761 136.509 6.62728L142 12.1369M131.018 1.11761L142 12.1369M142 12.1369V40.9294M142 40.9294L137.04 45.9059L132.08 50.8823M142 40.9294L132.08 50.8823" stroke="white" strokeWidth="1.84314" />
						<defs>
							<linearGradient id="paint0_linear_5_2212" x1="3.04019" y1="2.19794" x2="29.1279" y2="84.2994" gradientUnits="userSpaceOnUse">
								<stop stopColor="#0980D7" />
								<stop offset="1" stopColor="#1357CD" />
							</linearGradient>
						</defs>

					</svg>


				</button>}
				{(verifying || saving) && <CircularProgress
					sx={{ marginBottom: "10px" }}
					color="secondary"
					size="70px"
				/>}
				<p className="lit ptt">Make sure that you connect your wallet that is holding at least <strong>1</strong> <span className="imp">{collectionName}</span> Ordinals.</p>
			</div>
		</div>
	)
}
export default WalletConnect