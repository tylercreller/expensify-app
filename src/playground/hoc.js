// Higher Order Component (HOC) - A component (HOC) that renders another [regular] component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
	<React.Fragment>
		<h1>Info</h1>
		<p>The info is : {props.info}</p>
	</React.Fragment>
);

const withAdminWarning = WrappedComponent => {
	return props => (
		<React.Fragment>
			{props.isAdmin && <p>This is private info. Please don't share!</p>}
			<WrappedComponent {...props} />
		</React.Fragment>
	);
};

const requireAuthentication = WrappedComponent => {
	return props => (
		<React.Fragment>
			{props.isAuthenticated ? (
				<WrappedComponent {...props} />
			) : (
				<p>You are not authorized to view this info.</p>
			)}
		</React.Fragment>
	);
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
	<AuthInfo isAuthenticated={true} info="There are the details" />,
	document.getElementById('app')
);
