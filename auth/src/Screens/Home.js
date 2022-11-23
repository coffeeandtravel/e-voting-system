import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
const email = localStorage.getItem("email");
const account = localStorage.getItem("account");

const navigate = useNavigate();
return (
	<div>
	<div style={bg}>
	<h3>Your account: {account} </h3>
	<h3>Your email: {email} </h3>
	</div>	
	<h1>Instructions to Cast Vote !</h1>
	<img src="/logo.png" style={ima} alt="logo"/>
	<p><strong>V-Vote</strong> is a secure online election plateform where you can cast your vote easily, securely & rapidly.</p>
	<p><strong>✌Your vote is your voice.✌</strong></p>
	<p><strong>👍Cast your vote.👍</strong></p>
	<br/>
	<h2><strong>Step 1: Redirected to Cast Vote page</strong></h2>
	<p>You are redirected when you click <strong>cast your vote</strong> button after successful login.</p>
	<img src="/1.png" style={supp} alt="interface"/>
	<br/>

	<h2><strong>Step 2: Check your account number</strong></h2>
	<p>you should check the account number as displayed on the screen and may not be null.</p>
	<img src="/2.png" style={wel} alt="account"/>
	<p>Also check the correct metamask account is synced with the browser.</p>
	<img src="/4.png" style={ntm} alt="metamask"/>

	<h2><strong>Step 3: Select the candidate</strong></h2>
	<p>Select the candidate from the dropdown menu as shown in figure below.</p>
	<img src="/5.png" style={help} alt="dropdown"/>

	<h2> <strong> Step 4: Click on <strong>cast your vote</strong> button. </strong> </h2>
	<img src="/6.png" style={password} alt="cast vote"/>

	<h2> <strong> Step 5: Confirm transaction </strong> </h2>
	<p>After clicking on the <strong>cast your vote</strong> button a metamask pop-up will dispaly.</p>
	<p>Click on the <strong>Confirm</strong> button to confirm the transaction.</p>
	<img src="/7.png" style={backup} alt="transaction"/>

	<h2> <strong> Step 6: Transaction confirmed</strong> </h2>
	<p>A message will be displayed on bottom right corner for <strong>successful/unsuccessful</strong> transaction and you will be redirected to same voting page.</p>
	<p>In case of failed transaction check your internet connection, metamask account and account number shown on cast vote page.</p>
	<p><strong>Still facing issues contact our team. <a href="help@ovs.com">help@ovs.com</a></strong></p>
	<img src="/8.png" style={confirms} alt="confirmation"/>
	<img src="/9.png" style={cong} alt="congratulations"/>
	<h2><strong>Congratulations! ✌✌Your vote has been casted successfully.👍👍</strong></h2>

	<h2><strong>Step 7: Final Result</strong></h2>
	<p>you can check the voting results after successful completion of election.</p>
	<img src="/10.png" style={res} alt="result"/>
	<p>A password will be sent after successful completion of election to check the result.</p>
	<p>Enter password in the prompt and press enter.</p>
	<img src="/11.png" style={enterp} alt="enter password"/>
	<p>Final result will be displayed and the winner has been announced.</p>
	<img src="/12.png" style={finalr} alt="result"/>
	
	<h3>Click here to vote:--   
	<button
		style={button}
		onClick={() => {
		window.location.href="http://localhost:3001";
		}}
	>
		{" "}
		Click Here
	</button>
	</h3>

	<button
		style={button}
		onClick={() => {
		localStorage.removeItem("email");
		localStorage.removeItem("account");
		window.location.reload();
		}}
	>
		{" "}
		Log out
	</button>
	</div>
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
	width: 300,
	height: 300,
	objectFit: "contain",
	marginTop : -70,
	marginBottom : -60,
	};

const supp = {
	width: 700,
	height: 700,
	marginTop : -120,
	marginBottom : -120,
	objectFit: "contain",
	};

const wel = {
	width: 700,
	height: 700,
	marginTop : -120,
	marginBottom : -120,
	objectFit: "contain",
	};

const ntm = {
	width: 700,
	height: 700,
	marginTop: -120,
	marginBottom: -120,
	objectFit: "contain",
	};

const help = {
	width: 700,
	height: 700,
	marginTop: -120,
	marginBottom: -120,
	objectFit: "contain",
	};

const password = {
	width: 700,
	height: 700,
	marginTop: -120,
	marginBottom: -120,
	objectFit: "contain",
	};

const backup = {
	width: 700,
	height: 700,
	marginTop: -120,
	marginBottom: -120,
	objectFit: "contain",
	};

	const confirms = {
		width: 600,
		height: 600,
		marginTop: -120,
		marginBottom: -120,
		objectFit: "contain",
		};

		const cong = {
			width: 600,
			height: 600,
			marginTop: -120,
			marginBottom: -120,
			objectFit: "contain",
			marginLeft : 50,
			};

		const res = {
			width: 700,
			height: 700,
			marginTop : -120,
			marginBottom : -120,
			objectFit: "contain",
			};
			
		const enterp = {
			width: 700,
			height: 700,
			marginTop : -120,
			marginBottom : -120,
			objectFit: "contain",
			};

		const finalr = {
			width: 700,
			height: 700,
			marginTop : -120,
			marginBottom : -120,
			objectFit: "contain",
			};

		const bg={
			display:"flex",
			flexDirection:"column",
			backgroundColor:" rgb(161, 161, 161)",
		};
						
					
				