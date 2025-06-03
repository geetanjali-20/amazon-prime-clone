import requests from "../components/request";

const rowsData = [
	{
		title: "Top Movies",
		fetchUrl: requests.fetchTrending,
		isLargeRow: false,
	},

	{
		title: "Action Movies",
		fetchUrl: requests.fetchActionMovies,
		isLargeRow: false,
	},
	{
		title: "Adventure Movies",
		fetchUrl: requests.fetchAdventureMovies,
		isLargeRow: false,
	},
	{
		title: "Top Rated Movies",
		fetchUrl: requests.fetchTopRated,
		isLargeRow: true,
	},
	{
		title: "Animation Movies",
		fetchUrl: requests.fetchAnimationMovies,
		isLargeRow: false,
	},
	{
		title: "Comedy Movies",
		fetchUrl: requests.fetchComedyMovies,
		isLargeRow: false,
	},
	{
		title: "Crime Movies",
		fetchUrl: requests.fetchCrimeMovies,
		isLargeRow: false,
	},
	{
		title: "Horror Movies",
		fetchUrl: requests.fetchHorrorMovies,
		isLargeRow: false,
	},
	{
		title: "Romantic Movies",
		fetchUrl: requests.fetchRomanceMovies,
		isLargeRow: false,
	},
	{
		title: "Documentaries",
		fetchUrl: requests.fetchDocumentries,
		isLargeRow: false,
	},
	{
		title: "Top Trending",
		fetchUrl: requests.fetchNetflixOriginals,
		isLargeRow: true,
	},
	{
		title: "Sci-Fi Movies",
		fetchUrl: requests.fetchSciFiMovies,
		isLargeRow: false,
	},
	{
		title: "Thriller Movies",
		fetchUrl: requests.fetchThrillerMovies,
		isLargeRow: true,
	},
	{
		title: "War Movies",
		fetchUrl: requests.fetchWarMovies,
		isLargeRow: false,
	},
	{
		title: "Western Movies",
		fetchUrl: requests.fetchWesternMovies,
		isLargeRow: false,
	},
	{
		title: "History Movies",
		fetchUrl: requests.fetchHistoryMovies,
		isLargeRow: false,
	},
	{
		title: "Music Movies",
		fetchUrl: requests.fetchMusicMovies,
		isLargeRow: false,
	},
	{
		title: "TV Movies",
		fetchUrl: requests.fetchTvMovies,
		isLargeRow: false,
	},
	{
		title: "Family Movies",
		fetchUrl: requests.fetchFamilyMovies,
		isLargeRow: false,
	},
	{
		title: "Fantasy Movies",
		fetchUrl: requests.fetchFantasyMovies,
		isLargeRow: false,
	},
	{
		title: "Mystery Movies",
		fetchUrl: requests.fetchMysteryMovies,
		isLargeRow: false,
	},
	{
		title: "Drama Movies",
		fetchUrl: requests.fetchDrama,
		isLargeRow: false,
	},
];

const rowsDataLarge = [
	{
		title: "Animation Movies",
		fetchUrl: requests.fetchAnimationMovies,
		isLargeRow: false,
	},
	{
		title: "Adventure Movies",
		fetchUrl: requests.fetchAdventureMovies,
		isLargeRow: false,
	},
	{
		title: "Comedy Movies",
		fetchUrl: requests.fetchComedyMovies,
		isLargeRow: false,
	},
	{
		title: "Top Movies",
		fetchUrl: requests.fetchTrending,
		isLargeRow: false,
	},

	{
		title: "Action Movies",
		fetchUrl: requests.fetchActionMovies,
		isLargeRow: false,
	},

	{
		title: "Top Rated Movies",
		fetchUrl: requests.fetchTopRated,
		isLargeRow: true,
	},

	{
		title: "Crime Movies",
		fetchUrl: requests.fetchCrimeMovies,
		isLargeRow: false,
	},
	{
		title: "Horror Movies",
		fetchUrl: requests.fetchHorrorMovies,
		isLargeRow: false,
	},
	{
		title: "Romantic Movies",
		fetchUrl: requests.fetchRomanceMovies,
		isLargeRow: false,
	},
	{
		title: "Documentaries",
		fetchUrl: requests.fetchDocumentries,
		isLargeRow: false,
	},
	{
		title: "Top Trending",
		fetchUrl: requests.fetchNetflixOriginals,
		isLargeRow: true,
	},
	{
		title: "Sci-Fi Movies",
		fetchUrl: requests.fetchSciFiMovies,
		isLargeRow: false,
	},
	{
		title: "Thriller Movies",
		fetchUrl: requests.fetchThrillerMovies,
		isLargeRow: true,
	},
	{
		title: "War Movies",
		fetchUrl: requests.fetchWarMovies,
		isLargeRow: false,
	},
	{
		title: "Western Movies",
		fetchUrl: requests.fetchWesternMovies,
		isLargeRow: false,
	},
	{
		title: "History Movies",
		fetchUrl: requests.fetchHistoryMovies,
		isLargeRow: false,
	},
	{
		title: "Music Movies",
		fetchUrl: requests.fetchMusicMovies,
		isLargeRow: false,
	},
	{
		title: "TV Movies",
		fetchUrl: requests.fetchTvMovies,
		isLargeRow: false,
	},
	{
		title: "Family Movies",
		fetchUrl: requests.fetchFamilyMovies,
		isLargeRow: false,
	},
	{
		title: "Fantasy Movies",
		fetchUrl: requests.fetchFantasyMovies,
		isLargeRow: false,
	},
	{
		title: "Mystery Movies",
		fetchUrl: requests.fetchMysteryMovies,
		isLargeRow: false,
	},
	{
		title: "Drama Movies",
		fetchUrl: requests.fetchDrama,
		isLargeRow: false,
	},
	// Add more rows as needed

	{
		title: "Top Movies",
		fetchUrl: requests.fetchTrending,
		isLargeRow: false,
	},

	{
		title: "Action Movies",
		fetchUrl: requests.fetchActionMovies,
		isLargeRow: false,
	},
	{
		title: "Adventure Movies",
		fetchUrl: requests.fetchAdventureMovies,
		isLargeRow: false,
	},
	{
		title: "Top Rated Movies",
		fetchUrl: requests.fetchTopRated,
		isLargeRow: true,
	},
	{
		title: "Animation Movies",
		fetchUrl: requests.fetchAnimationMovies,
		isLargeRow: false,
	},
	{
		title: "Comedy Movies",
		fetchUrl: requests.fetchComedyMovies,
		isLargeRow: false,
	},
	{
		title: "Crime Movies",
		fetchUrl: requests.fetchCrimeMovies,
		isLargeRow: false,
	},
	{
		title: "Horror Movies",
		fetchUrl: requests.fetchHorrorMovies,
		isLargeRow: false,
	},
	{
		title: "Romantic Movies",
		fetchUrl: requests.fetchRomanceMovies,
		isLargeRow: false,
	},
	{
		title: "Documentaries",
		fetchUrl: requests.fetchDocumentries,
		isLargeRow: false,
	},
	{
		title: "Top Trending",
		fetchUrl: requests.fetchNetflixOriginals,
		isLargeRow: true,
	},
	{
		title: "Sci-Fi Movies",
		fetchUrl: requests.fetchSciFiMovies,
		isLargeRow: false,
	},
	{
		title: "Thriller Movies",
		fetchUrl: requests.fetchThrillerMovies,
		isLargeRow: true,
	},
	{
		title: "War Movies",
		fetchUrl: requests.fetchWarMovies,
		isLargeRow: false,
	},
	{
		title: "Western Movies",
		fetchUrl: requests.fetchWesternMovies,
		isLargeRow: false,
	},
	{
		title: "History Movies",
		fetchUrl: requests.fetchHistoryMovies,
		isLargeRow: false,
	},
	{
		title: "Music Movies",
		fetchUrl: requests.fetchMusicMovies,
		isLargeRow: false,
	},
	{
		title: "TV Movies",
		fetchUrl: requests.fetchTvMovies,
		isLargeRow: false,
	},
	{
		title: "Family Movies",
		fetchUrl: requests.fetchFamilyMovies,
		isLargeRow: false,
	},
	{
		title: "Fantasy Movies",
		fetchUrl: requests.fetchFantasyMovies,
		isLargeRow: false,
	},
	{
		title: "Mystery Movies",
		fetchUrl: requests.fetchMysteryMovies,
		isLargeRow: false,
	},
	{
		title: "Drama Movies",
		fetchUrl: requests.fetchDrama,
		isLargeRow: false,
	},
];

export { rowsData, rowsDataLarge };
