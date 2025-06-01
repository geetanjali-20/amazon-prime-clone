const RecommendedCarousel = ({ movies }) => (
  <div className="p-4 bg-black text-white">
    <h3 className="text-xl mb-4">Recommended</h3>
    <div className="flex overflow-x-scroll space-x-4">
      {movies.map((m) => (
        <div key={m.id} className="w-[150px]">
          <img src={m.thumbnail} alt={m.title} className="rounded" />
          <p className="text-sm mt-1">{m.title}</p>
        </div>
      ))}
    </div>
  </div>
);
export default RecommendedCarousel;
