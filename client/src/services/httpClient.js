import axios from 'axios';

const instance = axios.create({
	baseURL: `https://react-cart-node.herokuapp.com`,
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;
