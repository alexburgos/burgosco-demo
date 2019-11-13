import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Suggestions from './Suggestions';
import SavedQueries from './Queries';
import { useFetchDogHook } from '../utils/hooks';
import form from '../styles/form';

const Form = ({ suggestions }) => {
	const [inputVal, setInputVal] = useState('');
	const [query, setQuery] = useState('');
	const [activeSuggestion, setActiveSuggestion] = useState(0);
	const [showSuggestions, setShowSuggestions] = useState(false);
	const [filteredSuggestions, setFilteredSuggestions] = useState([]);
	const [savedQueries, setSavedQueries] = useState([]);


	const { randomDogImage, dogFetchError, isLoading } = useFetchDogHook(query);

	/**
	 * Takes a query string and saves it
	 * @param   {string} query string to save
	 *
	 * @returns {null} 
	*/

	function saveQuery(currentQuery) {
		let queries = [...savedQueries];
		let timeStamp = moment().format('YYYY-MM-DD, h:mm:ss a');
		let newQuery = {};

		if (queries.includes(currentQuery)) return;

		newQuery.text = currentQuery;
		newQuery.timeStamp = timeStamp;
		queries.push(newQuery);
		setSavedQueries(queries);
	}

	function handleChange(e) {
		let { value } = e.target;
		let regExpr = /[^a-zA-Z0-9-. ]/g;
		let sanitizedInput = value.replace(regExpr, '');

		let filteredSuggestions = suggestions.filter(
			suggestion =>
				suggestion.toLowerCase().indexOf(sanitizedInput.toLowerCase()) > -1
		);

		if (filteredSuggestions.length > 0) {
			setFilteredSuggestions(filteredSuggestions);
			setShowSuggestions(true);
		}
		setInputVal(sanitizedInput);
	}

	function handleClick(e) {
		let currentQuery = e.currentTarget.innerText;

		setInputVal(currentQuery);
		setQuery(currentQuery);
		saveQuery(currentQuery);
		setFilteredSuggestions([]);
		setActiveSuggestion(0);
		setShowSuggestions(false);
	}

	function handleKeyDown(e) {
		let currentQuery = '';

		// User pressed Enter or Return
		if (e.keyCode === 13) {
			if (e.target.value.length === 0) return;
			currentQuery = filteredSuggestions[activeSuggestion];
			if (currentQuery) {
				setInputVal(currentQuery);
				setQuery(currentQuery);
				setActiveSuggestion(0);
				setShowSuggestions(false);
				saveQuery(currentQuery);
			}
		}

		// User pressed the up arrow
		else if (e.keyCode === 38) {
			if (activeSuggestion === 0) {
				return;
			}

			currentQuery = activeSuggestion - 1;
			setActiveSuggestion(currentQuery);
		}

		// User pressed the down arrow
		else if (e.keyCode === 40) {
			if (activeSuggestion - 1 === filteredSuggestions.length) {
				return;
			}

			currentQuery = activeSuggestion + 1;
			setActiveSuggestion(currentQuery);
		}
	}

	/**
	 * Takes a query string and deletes it from the saved queries
	 * @param   {string} query string to delete from queries
	 *
	 * @returns {null} 
	*/


	function handleDeleteQuery(queryToDelete) {
		let queries = [...savedQueries];

		if (!queries.includes(queryToDelete)) return;

		let filteredSavedQueries = queries.filter(query => query !== queryToDelete);

		// setRandomDogImage(null);
		// setDogFetchError(null);
		setSavedQueries(filteredSavedQueries);
	}


	/**
	 * Clears all suggestions and previously saved queries
	*/

	function clearSearchHistory() {
		setSavedQueries([]);
		// setRandomDogImage(null);
		// setDogFetchError(null);
	}

	/**
	 * Use the Dog API to search for random images of the breed, otherwise show an error
	 * @param   {string} breed breed name to search for in the API
	 *
	 * @returns {null} 
	*/


	return (
		<div className="Search">
			<label>Type in this Box ⤵</label>
			<input
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				value={inputVal}
			/>
			{showSuggestions && inputVal && filteredSuggestions.length > 0 && (
				<Suggestions
					suggestionsToShow={filteredSuggestions}
					activeSuggestion={activeSuggestion}
					onClick={handleClick}
				/>
			)}
			{savedQueries.length > 0 && (
				<SavedQueries
					savedQueries={savedQueries}
					deleteQuery={handleDeleteQuery}
					clearSearchHistory={clearSearchHistory}
				/>
			)}
			{isLoading && <p className="Search__loading loading">Loading...</p>}
			{randomDogImage && <img className="Search__result" src={randomDogImage} alt={query} />}
			{dogFetchError && <p>{dogFetchError}</p>}
			<style jsx>{form}</style>
		</div>
	);
};

Form.defaultProps = {
	suggestions: [],
};

Form.propTypes = {
	suggestions: PropTypes.array.isRequired,
};


export default Form;
