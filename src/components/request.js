const API_KEY = "1701f42e8eb364036279d7a2947fcf5d";

const requests = {
	fetchTrending: "/trending/all/week?api_key=" + API_KEY + "&language=en-US",
	fetchNetflixOriginals: "/discover/tv?api_key=" + API_KEY + "&with_networks=213",
	fetchTopRated: "/movie/top_rated?api_key=" + API_KEY + "&language=en-US",
	fetchMovies: "/discover/movie?api_key=" + API_KEY + "&with_genres=28&sort_by=vote_average.desc&vote_count.gte=1000",
	fetchActionMovies: "/discover/movie?api_key=" + API_KEY + "&with_genres=28",
	fetchAdventureMovies: "/discover/movie?api_key=" + API_KEY + "&with_genres=12",
	fetchAnimationMovies: "/discover/movie?api_key=" + API_KEY + "&with_genres=16",
	fetchComedyMovies: "/discover/movie?api_key=" + API_KEY + "&with_genres=35",
	fetchCrimeMovies: "/discover/movie?api_key=" + API_KEY + "&with_genres=80",
	fetchDocumentries: "/discover/movie?api_key=" + API_KEY + "&with_genres=99",
	fetchDrama: "/discover/movie?api_key=" + API_KEY + "&with_genres=18",
	fetchFamilyMovies: "/discover/movie?api_key=" + API_KEY + "&with_genres=10751",
	fetchFantasyMovies: "/discover/movie?api_key=" + API_KEY + "&with_genres=14",
	fetchMysteryMovies: "/discover/movie?api_key=" + API_KEY + "&with_genres=9648",
	fetchSciFiMovies: "/discover/movie?api_key=" + API_KEY + "&with_genres=878",
	fetchThrillerMovies: "/discover/movie?api_key=" + API_KEY + "&with_genres=53",
	fetchWarMovies: "/discover/movie?api_key=" + API_KEY + "&with_genres=10752",
	fetchWesternMovies: "/discover/movie?api_key=" + API_KEY + "&with_genres=37",
	fetchHistoryMovies: "/discover/movie?api_key=" + API_KEY + "&with_genres=36",
	fetchMusicMovies: "/discover/movie?api_key=" + API_KEY + "&with_genres=10402",
	fetchTvMovies: "/discover/movie?api_key=" + API_KEY + "&with_genres=10770",
	fetchHorrorMovies: "/discover/movie?api_key=" + API_KEY + "&with_genres=27",
	fetchRomanceMovies: "/discover/movie?api_key=" + API_KEY + "&with_genres=10749",
};

export default requests;
