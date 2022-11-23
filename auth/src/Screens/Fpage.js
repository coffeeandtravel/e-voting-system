import React from "react";
import { useNavigate } from "react-router-dom";

export default function Fpage() {
	const navigate = useNavigate();

return (
    <>
	<div>
	<h1>Instructions to create a MetaMask Wallet</h1>
	<img src="/meta.png" style={ima} alt="meta"/>
	<p>MetaMask is a cryptocurrency wallet used to interact with the Ethereum</p>
	<p>blockchain. It can be accessed through an app or through a browser extension.</p>
	<br/>
	<h2><strong>Step 1: Download MetaMask wallet</strong></h2>
	<p>Go to <a target="_blank" href="https://metamask.io/">https://metamask.io/</a> and click on <strong>“Download”</strong>. Choose your preferred browser or mobile application and install the MetaMask extension.</p>
	<p>MetaMask supports <strong> iOS, Android native apps along with Chrome, Firefox, Brave and Edge browser extensions.</strong></p>
	<img src="/msupp.png" style={supp} alt="support"/>
	<br/>
	<h2><strong>Step 2: MetaMask wallet installation</strong></h2>
	<p>Click on the MetaMask extension and click on “Get Started”</p>
	<img src="/welcome.webp" style={wel} alt="welcome"/>
	<p>You can either import an existent wallet using the seed phrase or create a new one.</p>
	<img src="/new.png" style={ntm} alt="new"/>
	<h2><strong>Step 3: How to create a new MetaMask wallet</strong></h2>
	<p>Click on “Create a Wallet” and on the next window click on “I agree” if you would like to help improve MetaMask or click on “No Thanks” to proceed.</p>
	<img src="/help.png" style={help} alt="new"/>
	<h2> <strong> Step 4: Create a strong password for your wallet. </strong> </h2>
	<img src="/password.png" style={password} alt="new"/>
	<h2> <strong> Step 5: Securely store the seed phrase for your wallet </strong> </h2>
	<p>Click on “Click here to reveal secret words” to show the seed phrase.</p>
	<p>MetaMask requires that you store your seed phrase in a safe place. It is the only way to recover your funds should your device crash or your browser reset. We recommend you write it down. The most common method is to write your 12-word phrase on a piece of paper and store it safely in a place where only you have access. <strong> Note: if you lose your seed phrase, MetaMask can’t help you recover your wallet and your funds will be lost forever.</strong></p>
	<p>Never share your seed phrase or your private key to anyone or any site, unless you want them to have full control over your funds.</p>
	<img src="/backup.png" style={backup} alt="backup"/>
	<p>Click on “Next”.</p>
	<h2> <strong> Step 6: Seed phrase confirmation </strong> </h2>
	<p>Confirm your secret backup phrase by clicking on each word in the order in which the words were presented on the previous screen. Click on “Confirm” to proceed.</p>
	<img src="/confirm.png" style={confirms} alt="confirm"/>
	<img src="/cong.png" style={cong} alt="congratulations"/>
	<h2><strong>✌✌Congratulations! Your MetaMask wallet has been set up successfully.👍👍</strong></h2>
	<p>You can now access your wallet by clicking on the MetaMask icon at the top-right-end corner of your preferred browser.</p>
	</div>
    <h3>Click here to Login/Sign-up:--   
	<button
		style={button}
		onClick={() => {
		// window.location.href="http://localhost:3002/Signin";
		navigate("/Signin");
		}}
	>
		{" "}
		Click Here
	</button>
	</h3>
    </>
    );
}

const button = {
width: 100,
padding: 10,
borderRadius: 5,
margin: 10,
cursor: "pointer",
fontSize: 17,
color: "white",
backgroundColor: "#9D27CD",
border: "none",
};

const ima = {
	width: 600,
	height: 600,
	objectFit: "contain",
	marginTop : -120,
	marginBottom : -120,
	};

const supp = {
	width: 600,
	height: 600,
	objectFit: "contain",
	};

const wel = {
	width: 400,
	height: 400,
	objectFit: "contain",
	};

const ntm = {
	width: 600,
	height: 600,
	objectFit: "contain",
	marginTop: -130,
	marginBottom: -190,
	};

const help = {
	width: 400,
	height: 400,
	objectFit: "contain",
	};

const password = {
	width: 400,
	height: 400,
	objectFit: "contain",
	marginBottom: -60,
	};

const backup = {
	width: 600,
	height: 600,
	objectFit: "contain",
	marginTop: -120,
	marginBottom: -100,
	};

	const confirms = {
		width: 400,
		height: 400,
		objectFit: "contain",
		};

		const cong = {
			width: 400,
			height: 400,
			objectFit: "contain",
			marginLeft : 50,
			};


					