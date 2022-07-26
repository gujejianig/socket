import Cell from "../Cell";
import "./row.css"
import { useSelector } from "react-redux";

const Row = ({rowNumber}) => {
	const state = useSelector((state) => state);
	let transformed = []
	for(let i=0; i < state.rows; i++) {
		transformed.push(<Cell key={i} rowNumber={rowNumber} columnNumber={i} ></Cell>)
	}
	return <div className={"row"}> {transformed}</div>
}
export default Row;