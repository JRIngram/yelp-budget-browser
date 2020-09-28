import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers:{
		Authorization: 'Bearer CHANGE_ME_TO_API_KEY'
	}
});