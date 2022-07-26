import { useDispatch, useSelector } from "react-redux";
import "../../style.css"
import { open } from "../../Redux/actions";
const Cell = ({rowNumber, columnNumber}) => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
	const clicked = () => {
		dispatch(open({rowNumber,columnNumber}));
	}
	let indexOfCell = state.rows * rowNumber + columnNumber;
	return <div  className={"cell" + state.level} onClick={() => clicked()}>{state.map[indexOfCell]==="□" ? ' ' : state.map[indexOfCell] }</div>
}
export default Cell;