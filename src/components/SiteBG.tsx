import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-particles";

const SiteBG = () => {
	const particlesInit = useCallback(async (engine: any) => {
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async container => {
		await console.log(container);
	}, [])

	return (
		<div className="mountains">
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					background: {
						image: "linear-gradient(to right, #000, #202020)"
					},
					fpsLimit: 120,
					interactivity: {
						events: {
							onClick: {
								enable: true,
								mode: "push",
							},
							// onHover: {
							// 	enable: true,
							// 	mode: "attract",
							// 	parallax: { enable: false, force: 60, smooth: 10 }
							// },
							resize: true,
						},
						modes: {
							push: {
								quantity: 4,
							},
							attract: { distance: 200, duration: 0.4, factor: 8 }
						},
					},
					particles: {
						color: {
							value: "#666",
						},
						links: {
							color: "#666",
							distance: 150,
							enable: true,
							opacity: 0.5,
							width: 1,
						},
						collisions: {
							enable: true,
						},
						move: {
							direction: "none",
							enable: true,
							outModes: {
								default: "bounce",
							},
							random: false,
							speed: .1,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								area: 400,
							},
							value: 100,
						},
						opacity: {
							value: 0.5,
						},
						shape: {
							type: "circle",
						},
						size: {
							value: { min: 1, max: 5 },
						},
					},
					detectRetina: true,
				}}
			/>
		</div>
	)
}
export default SiteBG