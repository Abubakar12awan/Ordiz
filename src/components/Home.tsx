import { FaDiscord, FaTwitter, FaQuestion } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <div className="container hh">
      <div className="r-cont-home">
        <div className="svg-hol">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="147"
            height="147"
            viewBox="0 0 147 147"
            fill="none"
          >
            <path
              d="M61.2922 7.86388L53.4262 0L37.0713 6.57919L36.8376 17.7132C44.2363 12.8469 52.5695 9.53787 61.2922 7.90281V7.86388ZM85.0069 35.1149L92.0162 18.6475C74.9603 12.8859 56.7751 15.5331 42.4061 24.6817L53.1536 38.969C62.5383 33.4409 74.0646 31.8059 85.0069 35.1149ZM15.654 75.9915L33.4109 73.8504C33.294 62.7164 37.889 51.9717 46.0275 44.3414L35.28 30.054C22.1181 41.5773 14.8752 58.5509 15.654 76.0305V75.9915ZM46.7285 124.81L53.7377 108.342C43.769 102.736 36.9934 93.2765 34.4622 82.6875L16.7054 84.8287C20.0543 101.53 30.724 116.518 46.6895 124.81H46.7285ZM104.555 122.279L93.8074 107.992C84.4228 113.52 72.8964 115.155 61.9542 111.846L54.9449 128.314C72.0008 134.075 90.186 131.428 104.555 122.279ZM102.141 85.7241C108.877 69.9184 101.518 51.5824 85.7078 44.8475C69.898 38.1126 51.5571 45.4703 44.8204 61.276C38.0837 77.0816 45.4434 95.4176 61.2532 102.153C77.063 108.887 95.404 101.53 102.141 85.7241ZM52.9979 64.7797C57.8265 53.4899 70.9105 48.2344 82.2032 53.0617C93.4959 57.889 98.7528 70.9695 93.9242 82.2593C89.0956 93.549 76.0117 98.8046 64.7189 93.9772C53.4262 89.1499 48.1693 76.0694 52.9979 64.7797ZM131.307 71.0085L113.55 73.1496C113.667 84.2836 109.072 95.0283 100.934 102.659L111.681 116.946C124.843 105.423 132.086 88.4492 131.307 70.9695V71.0085ZM100.233 22.1901L93.2233 38.6576C103.192 44.2635 109.968 53.7235 112.499 64.3514L130.256 62.2103C126.907 45.5093 116.237 30.5212 100.272 22.2291L100.233 22.1901ZM85.6689 139.136L93.5348 147L109.89 140.421L110.123 129.287C102.725 134.114 94.3915 137.462 85.6689 139.097V139.136ZM7.86596 85.6851L0 93.549L6.58093 109.9L17.7179 110.133C12.8893 102.737 9.5404 94.4055 7.9049 85.6851H7.86596ZM138.9 87.0866C137.109 95.7291 133.566 103.982 128.581 111.262H139.679L146.572 95.0673L138.9 87.0477V87.0866ZM35.7083 128.547V139.642L51.9075 146.533L59.9293 138.864C51.2845 137.073 43.0291 133.53 35.7473 128.547H35.7083ZM129.321 36.8668C134.15 44.2635 137.499 52.5945 139.134 61.3149L147 53.451L140.419 37.1004L129.282 36.8668H129.321ZM111.292 18.4139V7.31886L95.0924 0.428231L87.0707 8.09746C91.3152 8.99285 95.5597 10.2775 99.6874 12.0683C103.815 13.8202 107.709 15.9613 111.292 18.4139ZM7.32079 35.66L0.428344 51.8549L8.0996 59.8745C9.89086 51.232 13.4344 42.9788 18.4188 35.6989H7.32079V35.66Z"
              fill="white"
            />
          </svg>
        </div>
        <h1 className="ptt">
          Welcome to <span className="imp">ORDIZ</span>
        </h1>
        <p className="ptt-x">We Simplify BTC Inscription Verification</p>
        <p className="">So that you can build your community with ease!</p>
        <p className="ptt">Get in touch</p>
        <div className="btn-hol">
          <div className="upper-buttons">
          <a
            href="https://twitter.com/ordiz_xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="l-side">
              <FaTwitter />
            </div>
            <div className="r-side">Twitter</div>
          </a>
          <a
            href="https://discord.gg/44uSHwkx9z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="l-side">
              <FaDiscord />
            </div>
            <div className="r-side">Discord</div>
          </a>
          </div>
          <div className="lower-button">
          <a href="https://discord.com/api/oauth2/authorize?client_id=1093032815584616501&permissions=2415930432&scope=applications.commands%20bot" target="_blank" rel="noopener noreferrer" className="new-button">
                <div className="l-side">
                  <FaQuestion/>
                </div>
                <div className="r-side">Invite Bot</div>
          </a>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Home;
