import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({title, results, navigation}) => { 
	if(!results.length){
		return null;
	}
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<FlatList 
				horizontal
				data={results}
				keyExtractor = {(results) => {
					console.log(results.id);
					return results.id;
				}}
				renderItem = {({item}) => {
					return (
						<TouchableOpacity 
							onPress={() => navigation.navigate('ResultsShow', { id: item.id })}
						>
							<ResultsDetail result={item} />
						</TouchableOpacity>
					);
				}}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		marginLeft: 10,
		fontWeight: 'bold',
	},

	container: {
		marginBottom: 15,
	}
});

export default withNavigation(ResultsList);