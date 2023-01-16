import { Nation } from "../../interfaces/Nation";

interface IInferredNationality {
  nation: Nation
}
const InferredNationality: React.FC<IInferredNationality> = ({nation}) =>{
  const {nationality, probability, flagUrl, continent} = nation;
  return (
    <>
      {nationality && (
        <div>
          <p>Inferred Nationality: {nationality}</p>
          <img src={flagUrl} alt={`flag of ${nationality}`} />
          <div>
            <p>Prabability: {`${probability.toFixed(2)}%`}</p>
            <p>Continent: {continent}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default InferredNationality;