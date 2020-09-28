import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ( { navigation } ) => {
	const [result, setResult] = useState(null);
	const id = navigation.getParam('id');

	const getResult = async (id) => {
		const response = await yelp.get(`/${id}`);
		setResult(response.data);
	};

	useEffect(() => {
		console.log('Called!');
		getResult(id);
	}, []);

	if(!result){
		return null;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{result.name}</Text>
			<Text>Rating: {result.rating} stars. {result.review_count} reviews</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={result.photos}
				keyExtractor={(photo) => photo}
				renderItem={({item})=>{
					return <Image style={styles.image} key={item} source={{uri: item}} />;
				}}
			/>
			<Text>Contact: {result.display_phone}</Text>
			<Text>{result.location.zip_code}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginLeft: 15,
	},
	image: {
		width: 300,
		height: 250,
		borderRadius: 5,
		margin: 5,
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
	},
});

export default ResultsShowScreen;