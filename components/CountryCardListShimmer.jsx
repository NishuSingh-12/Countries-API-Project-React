import "../CountryCardShimmer.css";
export default function CountryCardListShimmer() {
  return (
    <div className="countryCardList">
      {Array.from({ length: 10 }).map((el, i) => {
        return <div key={i} className="countryCard card-shimmer"></div>;
      })}
    </div>
  );
}
