import axios from 'axios';

export default function axiosFetcher(url) {
    return axios
            .get(url)
            .then(response => response.data);
}