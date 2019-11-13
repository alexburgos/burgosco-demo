import React from 'react';
import PropTypes from 'prop-types';
import suggestions from '../styles/suggestions';

const Suggestions = ({ suggestionsToShow, activeSuggestion, onClick }) => {
  return (
		<ul className="Suggestions">
			{suggestionsToShow.map((suggestion, i) => {
				let className;

				if (i === activeSuggestion) {
					className = 'Suggestions--active';
				}

				return (
					<li className={className} key={suggestion} onClick={onClick}>
						{suggestion}
					</li>
				);
			})}
			<style jsx>{suggestions}</style>
		</ul>
	);
}


Suggestions.defaultProps ={
	suggestionsToShow: [],
	activeSuggestion: 0,
};

Suggestions.propTypes = {
	suggestionsToShow: PropTypes.array.isRequired,
	activeSuggestion: PropTypes.number.isRequired,
	onClick: PropTypes.func,
};

export default Suggestions
