export const table_sizes = {
	LEVEL_1_ROW: 10,
	LEVEL_1_COLUMN: 10,
	LEVEL_2_ROW: 40,
	LEVEL_2_COLUMN: 20,
	LEVEL_3_ROW: 100,
	LEVEL_3_COLUMN: 50,
	LEVEL_4_ROW: 500,
	LEVEL_4_COLUMN: 50,
	LEVEL_1_BUTTON: '40px',
	LEVEL_2_BUTTON: '20px',
	LEVEL_3_BUTTON: '5px',
	LEVEL_4_BUTTON: '1px',
}

export const getButtonSize = (level) => {
	switch (level) {
		case 1:
			return table_sizes.LEVEL_1_BUTTON
		case 2:
			return table_sizes.LEVEL_2_BUTTON
		case 3:
			return table_sizes.LEVEL_3_BUTTON
		case 4:
			return table_sizes.LEVEL_4_BUTTON
		default:
			return 0
	}

}

export const getRowLength = (level) => {
	switch (level) {
		case 1:
			return table_sizes.LEVEL_1_ROW
		case 2:
			return table_sizes.LEVEL_2_ROW
		case 3:
			return table_sizes.LEVEL_3_ROW
		case 4:
			return table_sizes.LEVEL_4_ROW
		default:
			return 0
	}
}

export const getColumnLength = (level) => {
	switch (level) {
		case 1:
			return table_sizes.LEVEL_1_COLUMN
		case 2:
			return table_sizes.LEVEL_2_COLUMN
		case 3:
			return table_sizes.LEVEL_3_COLUMN
		case 4:
			return table_sizes.LEVEL_4_COLUMN
		default:
			return 0
	}
}


