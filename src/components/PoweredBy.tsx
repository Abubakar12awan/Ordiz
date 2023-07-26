import { FaDiscord, FaGlobe, FaTwitter } from "react-icons/fa"
import "./PoweredBy.css"

const PoweredBy = () => {
	return (
		<div className="powered-by">
			<h1>Powered By</h1>
			<div className="pb-duo">
				<div className="pb-item">
					<div className="img"><img src="/svg/ryuk.svg" alt="Ryuk Labs" /></div>
					<div className="desc">Ryuk Labs is a Dubai based Web3 agency that provides all Web3 needs. With 2 years of experience in the Web3 space they have worked with 150+ projects diligently delivering their products.</div>
					<div className="btn-hol pb-btn">
						<a href="https://twitter.com/Ryuk_Labs" target="_blank" rel="noopener noreferrer">
							<div className="l-side">
								<FaTwitter />
							</div>
							<div className="r-side">Twitter</div>
						</a>
						<a href="https://discord.gg/qcfKW2qS" target="_blank" rel="noopener noreferrer">
							<div className="l-side">
								<FaDiscord />
							</div>
							<div className="r-side">Discord</div>
						</a>
						<a href="https://www.ryuklabs.io/" target="_blank" rel="noopener noreferrer">
							<div className="l-side">
								<FaGlobe />
							</div>
							<div className="r-side">Website</div>
						</a>
					</div>
				</div>
				<div className="pb-item lll-itt">
					<div className="img"><img src="/svg/toc.svg" alt="TOC" /></div>
					<div className="desc">The Ordinal Club" launched by the PG team. As part of its mission, the team aims to educate and raise awareness about Ordinals while at the same time working to innovate and improve the Ordinals ecosystem.</div>
					<div className="btn-hol pb-btn">
						<a href="https://twitter.com/Theordinalsclub" target="_blank" rel="noopener noreferrer">
							<div className="l-side">
								<FaTwitter />
							</div>
							<div className="r-side">Twitter</div>
						</a>
						<a href="https://discord.gg/theordinalsclub" target="_blank" rel="noopener noreferrer">
							<div className="l-side">
								<FaDiscord />
							</div>
							<div className="r-side">Discord</div>
						</a>
						<a href="https://www.deadjira.io/" target="_blank" rel="noopener noreferrer">
							<div className="l-side">
								<FaGlobe />
							</div>
							<div className="r-side">Website</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
export default PoweredBy