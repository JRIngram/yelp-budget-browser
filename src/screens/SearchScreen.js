import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [searchApi, results, errorMessage] = useResults();

	const filterResultsByPrice = (price) => {
		return results.filter(
			result => { return result.price === price; }
		);
	};

	return (
		<>
			<SearchBar 
				term={term} 
				onTermChange={(newTerm) => setTerm(newTerm)}
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<ScrollView>
				<ResultsList title="Budget" results={filterResultsByPrice('£')}/>
				<ResultsList title="Mid-range" results={filterResultsByPrice('££')}/>
				<ResultsList title="Pricey" results={filterResultsByPrice('£££')}/>
				<ResultsList title="Money bags!" results={filterResultsByPrice('££££')}/>
			</ScrollView>
		</>
	);
};

export default SearchScreen;