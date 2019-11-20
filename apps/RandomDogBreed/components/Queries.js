import React from 'react';
import PropTypes from 'prop-types';
import queries from '../styles/queries';

const Queries = ({ savedQueries, deleteQuery, clearSearchHistory }) => {
	return (
		<div className="SavedQueries">
			<h5>
				Saved history
				<span onClick={clearSearchHistory}>Clear search history</span>
			</h5>
			<ul>
				{savedQueries.map((query, i) => {
					return (
						<li key={i}>
							{query.text}
							<span className="SavedQueries__time-stamp">
								{query.timeStamp}
							</span>
							<span
								className="SavedQueries__delete"
								onClick={() => deleteQuery(query)}
							>
								x
							</span>
						</li>
					);
				})}
			</ul>

			<style jsx>{queries}</style>
		</div>
	);
};

Queries.defaultProps = {
	savedQueries: []
};

Queries.propTypes = {
	savedQueries: PropTypes.array.isRequired,
	deleteQuery: PropTypes.func,
	clearSearchHistory: PropTypes.func
};

export default Queries;
