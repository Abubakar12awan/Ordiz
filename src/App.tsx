import axios from "axios";
import { FC, useCallback, useEffect, useState } from "react";
import "./App.css";
// import toast from "react-hot-toast";

import {
  // SignMessageResponse,
  WalletName,
} from "@manahippo/aptos-wallet-adapter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import useBitcoinWallet from "./hooks/useBitcoinWallet";
import { useLocation, useNavigate } from "react-router-dom";
import SiteBG from "./components/SiteBG";
import WalletSuccess from "./components/WalletSuccess";
import WalletError from "./components/WalletError";
import WalletConnect from "./components/WalletConnect";
import Home from "./components/Home";
import WalletNoNFT from "./components/WalletNoNFT";
import PoweredBy from "./components/PoweredBy";
import WalletConfirm from "./components/WalletConfirm";

// const BACKEND_URL = 'http://localhost:5001/aptosland-3eff6/us-central1/verify';
//const BACKEND_URL = "https://ordizprod.herokuapp.com";
 const BACKEND_URL = 'http://localhost:3306';

const DISCORD_URL = "https://discord.com/api/oauth2";

type pageNameType = "home" | "connect" | "error" | "success" | "no-nft" | "powered-by" | "confirm"

const App: FC = () => {
  const location = useLocation();
  // const [pageName, setPageName] = useState<pageNameType>("no-nft")
  const [pageName, setPageName] = useState<pageNameType>(!window.location.href.includes("access_token") ? "home" : "connect")
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState<string>();
  const [discordId, setDiscordId] = useState<string>();
  const [userId, setUserId] = useState<string>();
  const [collection, setCollection] = useState<string>();
  const navigate = useNavigate();
  const { connect, connected, account, signMessage, wallet } = useBitcoinWallet();
  // const [showWalletDialog, setShowWalletDialog] = useState(false);
  const getDiscordUser = useCallback(async (accessToken: string) => {
    const getUserResult = await axios.get(`${DISCORD_URL}/@me`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    setDiscordId(
      `${getUserResult.data.user.username}#${getUserResult.data.user.discriminator}`
    );
    setUserId(getUserResult.data.user.id);
  }, []);

  useEffect(() => {
    if (!window.location.href.includes("access_token")) setPageName("home")
  }, [location]);

  useEffect(() => {
    const accessToken = window.location?.hash
      ? window.location.hash?.split?.("&")?.[1]?.split?.("=")?.[1]
      : "";

    let discordServerId: any;
    if (window.location.hash.includes("state")) {
      discordServerId = window.location.hash
        ? window.location.hash?.split("&")?.[4]?.split?.("=")?.[1]
        : [""];
    } else {
      if (discordServerId == null) {
        discordServerId = window.location.pathname
          ? window.location.pathname.substring(1)?.split?.("/")?.[0]
          : [""];
      }
    }

    if (accessToken === "" || discordServerId === "") {
      setError("invalid discord authentication");
      setPageName(prev => (((prev === "powered-by") || (prev === "home")) ? prev : "error"))
      return;
    }
    getDiscordUser(accessToken);
    axios.get(`${BACKEND_URL}/api/getCollection/${discordServerId}`)
      .then((res) => {
        setCollection(res.data.result.collection);
      })
      .catch((error) => { setError(error.message); setPageName(prev => (((prev === "powered-by") || (prev === "home")) ? prev : "error")) })

    if (connected) {
      setVerifying(true);
      const data = {
        accessToken: accessToken,
        discordServerId: discordServerId,
        address: account.address,
        date: Date.now(),
      };
      signMessage(JSON.stringify(data))
        .then(async ({ signedMessage, publicKey }) => {
          axios
            .post(`${BACKEND_URL}/api/setAccountInfo`, {
              accessToken,
              discordServerId,
              address: account.address,
              publicKey: publicKey ? publicKey : account.publicKey,
              wallet,
              userId: userId,
              date: data.date,
              signature: signedMessage,
            })
            .then((res) => {
              // setDone(true);
              if (res) {
                if (res?.data?.result?.nCount > 0) {
                  setPageName("success")
                  navigate("/success#access_token");
                } else {
                  if (res.status == 503) {
                    setPageName("confirm")
                    navigate("/confirm#access_token");
                  }
                  else {
                    setPageName("no-nft")
                    navigate("/fail#access_token");
                  }
                }
              }
            })
            .catch((error) => { setError(error.message); setPageName(prev => (((prev === "powered-by") || (prev === "home")) ? prev : "error")) })
            .finally(() => setVerifying(false));
        })
        .catch((error: any) => {
          setError(error.message);
          setPageName(prev => (((prev === "powered-by") || (prev === "home")) ? prev : "error"))
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getDiscordUser, connected]);

  useEffect(() => {
    // console.log(discordId);
  }, [discordId]);

  const handleConnectWallet = (
    wallet: WalletName<string> | string | undefined
  ) => {
    if (wallet) {
      connect(wallet);
      // setShowWalletDialog(false);
    }
  };

    useEffect(() => {
      window.scrollTo(0, 0);
  }, [pageName]);


  return (
    <div className="App elp">
       <Header setPageName={setPageName} />
      {pageName === "home" && <Home />}
      {pageName === "connect" && <WalletConnect onClose={handleConnectWallet} verifying={verifying} collectionName={collection || ''} />}
      {pageName === "success" && <WalletSuccess />}
      {pageName === "no-nft" && <WalletNoNFT />}
      {pageName === "confirm" && <WalletConfirm />}
      {pageName === "error" && <WalletError error={error} />} 
       {pageName === "home" && <WalletError error={error} />} 
      <WalletConnect onClose={handleConnectWallet} verifying={verifying} collectionName={collection || ''} />
       <PoweredBy />
      <SiteBG />
      <Footer /> 
    </div>
  );
};

export default App;
