import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ResultsDetail = ({result}) => {
	return (
		<View style={styles.container}>
			{
				result.image_url !== '' ?
					<Image style={styles.image} source={{uri: result.image_url}} /> : 
					<View style={styles.placeholder}></View>
			}
            
			<Text style={styles.name}>{result.name}</Text>
			<Text>Rating: {result.rating} stars. {result.review_count} reviews</Text>
		</View>
	);
};

const randomColour = () => {
	return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
};

const styles = StyleSheet.create({
	container: {
		marginLeft: 10,
	},
	image: {
		width: 250,
		height: 175,
		borderRadius: 5,
		marginBottom: 5,
	},
	placeholder: {
		width: 250,
		height: 175,
		borderRadius: 5,
		marginBottom: 5,
		backgroundColor: randomColour()
	},
	name: {
		fontSize: 16,
	}
});

export default ResultsDetail;