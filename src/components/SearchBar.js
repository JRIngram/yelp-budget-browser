import React from 'react';
import { TextInput, View, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
	return( 
		<View style={styles.backgroundStyle}>
			<FontAwesome name="search" style={styles.iconStyle}/>
			<TextInput 
				style={styles.inputStyle} 
				placeholder="Search"
				value={term}
				onChangeText={newTerm => onTermChange(newTerm)}
				autoCapitalize="none"
				autoCorrect={false}
				onEndEditing={() => onTermSubmit()}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: '#DDD',
		height: 50,
		width: 300,
		borderRadius: 10,
		marginTop: 20,
		alignContent: 'center',
		flexDirection: 'row',
		alignSelf: 'center',
		marginBottom: 10,
	},
	inputStyle: {
		flex: 1,
		fontSize: 16,
	},
	iconStyle: {
		fontSize: 28,
		alignSelf: 'center',
		marginHorizontal: 10,
	}
});

export default SearchBar;