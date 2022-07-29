import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getRowLength, getColumnLength } from "./tableOptions";
import { start, changeLevel, } from "./Redux/actions";
import Row from "./components/Row";
import {useEffect} from "react";
import { Button, Typography, Grid } from "@mui/material";

const App = () => {
	const state = useSelector((state) => state);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(start());
	}, [dispatch])

	const levelChange = (newLevel) => {
		let newColumn = getColumnLength(newLevel);
		let newRow = getRowLength(newLevel);
		dispatch(changeLevel({newLevel, newColumn, newRow}));
	}

	let table = state.map.length > 0 ? new Array(state.columns).fill(1) : [];
	let rows = table.map((arr, index) => (
		<Row key={index} rowNumber={index}></Row>
	))

	return (
		<>
			<Typography  align="center" marginTop="10px" >choose level</Typography>
			<br/>
			<Grid textAlign="center" >
				{[...Array(4 )].map((x, i) =>
					<Button sx={{m: 1}}  color={"success"} variant="outlined" onClick={() => levelChange(i + 1)} key={i}> {i + 1} </Button>
				)}
			</Grid>
			<br/>
			<Grid  style={{width: state.level === 4|| state.level===3 ? "fit-content":""}}>
				{rows}
			</Grid>
			<br/>
			{state.lost > 0 &&
				<Typography align="center" color="red">
					You lost, please choose Level again..
				</Typography>
			}
			{state.won > 0 &&
				<Typography align="center" color="green">
					You won, to play again choose level.
				</Typography>
			}

		</>
	)
}
export default App;