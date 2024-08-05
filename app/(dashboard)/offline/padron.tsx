import { Colors } from '@/constants/Colors';
import { Pressable, Text, View, ScrollView, StyleSheet } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { Link } from 'expo-router';
import { useAuthStore } from '@/zustand/store';

export default function MerPage() {
    const tableData = {
        tableHead: ['Id', 'Nombre', 'Documento', 'Estado', 'FUR', 'Fecha Probable Parto', 'Acciones'],
    };

    const formData = useAuthStore((state) => state.formData);

    const formattedTableData = formData.map((row, index) => [
        index + 1,
        row.nombre,
        `${row.tipoDocumento}${row.numeroDocumento}`,
        row.estaEmbarazada ? 'MER' : 'PUERPERA',
        row.FUR,
        row.fechaProbableParto
    ]);

    const flexArr = [0.3, ...Array(tableData.tableHead.length - 1).fill(1)];

    return (
        <View>
            <View style={{ backgroundColor: Colors.mainColor }} className='w-auto rounded-[10px] flex-row justify-between mb-5 p-2'>
                <Link href={'/registro'} className='bg-customPink rounded-md p-4 my-3 mx-2 flex-row items-center justify-center'>
                    <View className='w-[20px] mr-2'>
                        <IconEntypo name='add-user' color={Colors.white} size={20} />
                    </View>
                    <Text style={{ color: Colors.light }} className='font-semiBold'>Añadir</Text>
                </Link>

                <Pressable className='w-auto bg-customPink rounded-md p-4 my-3 mx-2 flex-row items-center justify-center'>
                    <IconFontAwesome name='refresh' color={Colors.white} size={20} />
                    <Text style={{ color: Colors.light }} className='ml-2 font-semiBold'>Actualizar</Text>
                </Pressable>
            </View>

            <ScrollView horizontal contentContainerStyle={{ width: '100%', minWidth: 800 }}>
                <View className='w-full'>
                    <Table borderStyle={{ borderColor: 'black', borderWidth: 0 }}>
                        <Row data={tableData.tableHead} style={styles.header} flexArr={flexArr} textStyle={{ textAlign: 'center', fontFamily: 'Poppins-SemiBold', color: 'white' }} />
                        {
                            formattedTableData.map((rowData: any, index: any) => (
                                <TableWrapper key={index} style={{ flexDirection: 'row', backgroundColor: 'white' }}>
                                    {
                                        rowData.map((cellData: any, cellIndex: any) => (
                                            <Cell textStyle={{ textAlign: 'center', paddingVertical: 6 }} style={{ flex: !cellIndex ? 0.3 : 1 }} key={cellIndex} data={cellData} />
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
