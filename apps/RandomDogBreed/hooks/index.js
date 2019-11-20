import { useEffect, useState, useRef } from 'react';
import { DOG_BREEDS_URL } from '../constants';

export const useFetchBreedsHook = () => {
	const [suggestions, setSuggestions] = useState(['dog']);
	const [error, setError] = useState(null);

	useEffect(() => {
		setError(null);

		fetch(`${DOG_BREEDS_URL}/breeds/list/all`)
			.then(response => {
				return response.json();
			})
			.then(data => {
				if (data.status === 'success') {
					let breeds = Object.keys(data.message).map(
						breed => breed.charAt(0).toUpperCase() + breed.slice(1)
					);
					setSuggestions(breeds);
				} else {
					alert('There was an issue loading suggestions');
				}
			})
			.catch(err => {
				console.error(err);
				setError(err);
			});
  }, []);
  
	return { suggestions, error };
};

export const useFetchDogHook = (breed) => {
	const firstRender = useRef(true);
  const [randomDogImage, setRandomDogImage] = useState(null);
  const [dogFetchError, setDogFetchError] = useState(null);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		if (breed.length > 0) {
			setDogFetchError(null);
			setLoading(true);

			fetch(
				breed.length > 0
					? `${DOG_BREEDS_URL}/breed/${breed.toLowerCase()}/images/random`
					: `${DOG_BREEDS_URL}/breeds/image/random`
			)
				.then(response => {
					return response.json();
				})
				.then(data => {
					if (data.status === 'success') {
						setLoading(false);
						// setInputVal('');
						setRandomDogImage(data.message);
						setDogFetchError(null);
					} else {
						setLoading(false);
						setRandomDogImage(null);
						setDogFetchError(
							"🐶 Woof, either the suggestions haven't loaded, or that dog ran away :( "
						);
					}
					firstRender.current = false;
				});
		}
	}, [breed]);
  
	return { randomDogImage, dogFetchError, isLoading };
};

