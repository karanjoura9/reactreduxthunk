export const fetchNews = () => ({
    type: 'fetchnews'
});

export const fetchNewsSuccess = (json) => ({
    type: 'fetchnewssuccess',
    payload: json

});

export const fetchNewsFailure = () => ({
    type: 'fetchnewsfailure',
});


export const getNewsAPI = (channel) => {
    var url= "https://newsapi.org/v1/articles?source="+channel+"&apiKey=c39a26d9c12f48dba2a5c00e35684ecc";
     return (dispatch) => {
        dispatch(fetchNews());
        return  fetch(url)
            .then(
                response => response.json(),
                error => dispatch(fetchNewsFailure()),
            )
            .then((json) => {
                dispatch(fetchNewsSuccess(json));
            });
    }
}






