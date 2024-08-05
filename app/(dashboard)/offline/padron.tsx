import { Colors } from '@/constants/Colors';
import { Pressable, Text, View, ScrollView, StyleSheet } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { Link } from 'expo-router';

const tableData = {
    tableHead: ['Id', 'Nombre', 'Documento', 'Estado', 'FUR', 'Fecha Probable Parto', 'Acciones'],
    tableData: [
        { id: '1', nombre: 'Ana Pérez', documento: 'DNI12345678', estado: 'MER', FUR: '2023-01-01', fecha_probable_parto: '2023-10-01' },
        { id: '2', nombre: 'María López', documento: 'PAS12345678', estado: 'PUERPERA', FUR: '2023-02-15', fecha_probable_parto: '2023-11-15' },
        { id: '3', nombre: 'Luisa García', documento: 'CEXT12345678', estado: 'MER', FUR: '2023-03-10', fecha_probable_parto: '2023-12-10' },
        { id: '4', nombre: 'Carmen Ramírez', documento: 'OTRO12345678', estado: 'MER', FUR: null, fecha_probable_parto: null },
        { id: '5', nombre: 'Josefina Torres', documento: 'DNI87654321', estado: 'PUERPERA', FUR: '2023-04-20', fecha_probable_parto: '2024-01-20' },
		{ id: '1', nombre: 'Ana Pérez', documento: 'DNI12345678', estado: 'MER', FUR: '2023-01-01', fecha_probable_parto: '2023-10-01' },
        { id: '2', nombre: 'María López', documento: 'PAS12345678', estado: 'PUERPERA', FUR: '2023-02-15', fecha_probable_parto: '2023-11-15' },
        { id: '3', nombre: 'Luisa García', documento: 'CEXT12345678', estado: 'MER', FUR: '2023-03-10', fecha_probable_parto: '2023-12-10' },
        { id: '4', nombre: 'Carmen Ramírez', documento: 'OTRO12345678', estado: 'MER', FUR: null, fecha_probable_parto: null },
        { id: '5', nombre: 'Josefina Torres', documento: 'DNI87654321', estado: 'PUERPERA', FUR: '2023-04-20', fecha_probable_parto: '2024-01-20' },
		{ id: '1', nombre: 'Ana Pérez', documento: 'DNI12345678', estado: 'MER', FUR: '2023-01-01', fecha_probable_parto: '2023-10-01' },
        { id: '2', nombre: 'María López', documento: 'PAS12345678', estado: 'PUERPERA', FUR: '2023-02-15', fecha_probable_parto: '2023-11-15' },
        { id: '3', nombre: 'Luisa García', documento: 'CEXT12345678', estado: 'MER', FUR: '2023-03-10', fecha_probable_parto: '2023-12-10' },
        { id: '4', nombre: 'Carmen Ramírez', documento: 'OTRO12345678', estado: 'MER', FUR: null, fecha_probable_parto: null },
        { id: '5', nombre: 'Josefina Torres', documento: 'DNI87654321', estado: 'PUERPERA', FUR: '2023-04-20', fecha_probable_parto: '2024-01-20' },
    ]
};


export default function MerPage() {
	const formattedTableData = tableData.tableData.map(row => Object.values(row));

	const flexArr = [0.3, ...Array(tableData.tableHead.length - 1).fill(1)];

	return (
		<View>
			<View style={{ backgroundColor: Colors.mainColor }} className='w-auto rounded-[10px] flex-row justify-between mb-5 p-2'>
				<Link href={'/registro'} className='w-auto bg-customPink rounded-md p-4 my-3 mx-2 flex-row items-center justify-center'>
					<IconEntypo name='add-user' color={Colors.white} size={20} />
					<Text style={{ color: Colors.light }} className='ml-2 font-semiBold'>Añadir</Text>
				</Link>

				<Pressable className='w-auto bg-customPink rounded-md p-4 my-3 mx-2 flex-row items-center justify-center'>
					<IconFontAwesome name='refresh' color={Colors.white} size={20} />
					<Text style={{ color: Colors.light }} className='ml-2 font-semiBold'>Actualizar</Text>
				</Pressable>
			</View>

			<ScrollView horizontal contentContainerStyle={{ width: '100%', minWidth: 800 }}>
				<View className='w-full'>
					<Table borderStyle={{ borderColor: 'black', borderWidth: 0}}>
						<Row data={tableData.tableHead} style={styles.header} flexArr={flexArr} textStyle={{ textAlign: 'center', fontFamily: 'Poppins-SemiBold', color: 'white' }}/>
						{
							formattedTableData.map((rowData, index) => (
								<TableWrapper key={index} style={{ flexDirection: 'row', backgroundColor: 'white' }}>
									{
										rowData.map((cellData, cellIndex) => (
											<Cell textStyle={{ textAlign:'center', paddingVertical: 6 }} style={{ flex: !cellIndex? 0.3 : 1 }} key={cellIndex} data={cellData} />
										))
									}
									<Cell
										data={<View className='flex-row'>
											<Text className='pr-2 text-red-700'>eliminar</Text>
											<Text className='text-green-700'>Editar</Text>
										</View>}
										style={{ flex: 1, alignItems: 'center' }}
									/>
								</TableWrapper>
								
							))
						}
					</Table>
				</View>
			</ScrollView>

		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		height: 50,
		backgroundColor: Colors.mainColor,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10
	},

	row: {
		height: 40,
		backgroundColor: '#E7E6E1',
		flexDirection: 'row'
	},
});
