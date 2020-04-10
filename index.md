<!DOCTYPE html>
<html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Login Page</title>
	<meta name="viewpoint" content="width=device-width, initial-scale=1">
	<meta name="robot" content="nofollow">
	<style type="text/css">
body{
	overflow: auto;
	min-height: 100vh;
	width: 100%;
	top: 0px;
	left: 0px;
	z-index: 2000;
	align-items: center;
	flex-direction: column;
	display: flex;
	justify-content: space-between;
	box-sizing: inherit;
	background-color: #add8e6;
	font-family: -apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,noto sans,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol,noto color emoji;
    line-height: 1.5;
}
section{
	padding-left: 400px;
}
ul{
	list-style: none;
	display: flex;
	padding-left: 160px;

}
li{

}
.m1{
	font-weight: bolder;
	color: white;
	margin-left: 10px;
	font-size: 24px;
}
fieldset{
	padding-bottom: 3rem;
	padding-left: 1rem;
	padding-right: 1rem;
	padding: 2.5rem;
	width: 91.666667%;
	max-width: 25rem;
	border-bottom-right-radius: 1.25rem;
	border-top-left-radius: 1.25rem;
    border-top-right-radius: 1.25rem;
	background-color: white;
	box-sizing: inherit;
	display: block;
	border: 0px;
	margin-right: 500px

}
h3{
	text-align: center;
	color: #083e9e;
	margin-top: 40px;
} 
.q1{
	padding-left: 20px;
	font-weight: normal;
	margin-top: -15px;
	margin-bottom: 40px;
}
.q2{
	padding-left: 110px;
	color: white;
	font-weight: bold;
}
input{
	position: relative;
	flex-direction: column;
	display: flex;
	box-sizing: inherit;
	padding-left: 1rem;
	padding-right: 1rem;
	outline: 0;
	padding-top: 1rem;
    padding-bottom: 1rem;
    color: #1a202c;
	margin-top: 5px;
	margin-bottom: 2rem;
	width: 24rem;
	background-color: #edf2f7;
	
	border: 0px;
	border-radius: .25rem;
	height: 40px;
	padding-left: 10px;
}
select{
	margin-top: 5px;
	margin-bottom: 40px;
	width: 24rem;
	background-color: #edf2f7;
	border: 0px;
	border-radius: 5px;
	height: 40px;
	box-sizing: inherit;
	padding-left: 1rem;
	padding-right: 1rem;
}
button{
	font-family: -apple-system,BlinkMacSystemFont,segoe ui,Roboto,helvetica neue,Arial,noto sans,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol,noto color emoji;
    line-height: 1.5;
	height: 40px;
	box-sizing: inherit;
	padding-left: 1rem;
	padding-right: 1rem;
	width: 24rem;
	background-color: #083e93;
	color: white;
	border: 0px;
	border-bottom-right-radius: 10px;
	border-top-left-radius: 10px;
    border-top-right-radius: 10px;
	margin-bottom: 2rem;
}
	</style>
</head>
<body>
	<section>
	<ul>
		<li> Logo </li>
		<li class="m1"> Piggyvest </li>
	</ul>
	<form action="" method="post">
		<fieldset>
			<h3> Create a Secure Account </h3>
			<h4 class="q1"> Welcome to the future of Savings and Investments </h4>
			<div>
				<label for="fn1"> Full Name </label></br>
				<input type="text" name="fn1" placeholder="Full Name">
			</div>
			<div>
				<label for="e1"> Email Address </label></br>
				<input type="Email" name="e1" placeholder="Email Address">
			</div>
			<div>
				<label for="ph1"> Phone Number </label></br>
				<input type="text" name="ph11" placeholder="Phone Number">
			</div>
			<div>
				<label for="p1"> Password </label></br>
				<input type="Password" name="p1" placeholder="Password">
			</div>
			<div>
				<label for="rc1"> Referrer Phone or Promo Code (Optional) </label></br>
				<input type="text" name="rc1" placeholder="Referrer Phone or Code">
			</div>
			<div>
				<label for="ab1"> How Did you hear about us? (Optional) </label></br>
				<select id="ab1">
					<option value="click to select"> Click to select </option>
					<option value="Facebook"> Facebook </option>
					<option value="Twitter"> Twitter </option>
					<option value="Instagram"> Instagram </option>
					<option value="Friend/family/coworker refferal"> Friend/family/coworker refferal </option>
					<option value="Google Search"> Google Search </option>
					<option value="Google Playstore"> Google Playstore </option>
					<option value="Online Blog"> Online Blog </option>
					<option value="Local Newspaper"> Local Newspaper </option>
					<option value="At an event"> At an event </option>
					<option value="Other"> Other </option>
				</select>
			</div>
			<button type="submit"> Create account </button>
		</fieldset>
	</form>
	<h4 class="q2"> Already have an account? <span> Log In</span></h4>
	</section>
</body>
</html>