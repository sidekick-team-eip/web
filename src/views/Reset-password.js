import TextField from '@mui/material/TextField';
import classNames from 'classnames';
import Button from '../components/elements/Button'
import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles'
import { useHistory } from 'react-router-dom';
import { makeStyles } from "@mui/styles";
import { resetPassword } from '../request';


const CssTextField = styled(TextField) ({
	'& label.Mui-focused': {
	  color: 'orange',
	},
	'& .MuiInput-underline:after': {
	  borderBottomColor: 'orange',
	},
	'& .MuiOutlinedInput-root': {
	  '& fieldset': {
		borderColor: 'white',
	  },
	  '&:hover fieldset': {
		borderColor: 'white',
	  },
	  '&.Mui-focused fieldset': {
		borderColor: 'orange',
	  },
	},
  });

  const useStyles = makeStyles((theme) => ({
	textfield_input: {
		color: '#c5cae9 !important',
	}
}));

const ResetPassword = ({className, topOuterDivider, bottomOuterDivider, topDivider, bottomDivider, hasBgColor, ...props}) => {
	const [password, setPassword] = useState("");
	const [code, setCode] = useState("");
	const [email, setEmail] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const history = useHistory();


	useEffect(() => {
		const url = new URL(window.location.href)
		// if (!url.searchParams.get("code")) {
		// 	history.push("/");
		// }
	}, []);

	const outerClasses = classNames(
		'hero section center-content',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		className
	  );
	
	  const innerClasses = classNames(
		'hero-inner section-inner',
		topDivider && 'has-top-divider',
		bottomDivider && 'has-bottom-divider'
	  );

	const handleResetPassword = async () => {
		if (await resetPassword(email, password, confirmPassword, code) === true) {
			history.push("/login")
		}
	}

	const classes = useStyles();

	return (
		<section
			{...props}
			className={outerClasses}
		>
		<div className="container-sm">
			<div className={innerClasses}>
				<div className="hero-content">
					<h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
						Reset <span className="text-color-primary">Password</span>
					</h1>
					<div style={{margin:50}}>
						<div className="mt-16">
							<CssTextField inputProps={{className: classes.textfield_input}} type="text" placeholder="code" label="Code" value={code} onChange={(e) => setCode(e.target.value)}/>
						</div>
						<div className="mt-16">
							<CssTextField inputProps={{className: classes.textfield_input}} type="email" placeholder="test@gmail.com" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
						</div>
						<div className="mt-16">
							<CssTextField inputProps={{className: classes.textfield_input}} type="password" placeholder="test" label="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
						</div>
						<div className="mt-16">
							<CssTextField inputProps={{className: classes.textfield_input}} type="password" placeholder="test" label="ConfirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
						</div>
					</div>
					<div style={{margin:20}}>
						<Button tag="a" color="mobile" wideMobile value={password} onClick={handleResetPassword}>Reset Password !</Button>
					</div>
				</div>
			</div>
		</div>
		</section>
	);
}

export default ResetPassword;
