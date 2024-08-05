import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, RadioButton, Switch, Provider as PaperProvider, ActivityIndicator, List } from 'react-native-paper';

const Form = () => {
    const [tipoDocumento, setTipoDocumento] = useState('');
    const [numeroDocumento, setNumeroDocumento] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [formularioVisible, setFormularioVisible] = useState(false);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [genero, setGenero] = useState('Femenino');
    const [estaEmbarazada, setEstaEmbarazada] = useState(false);
    const [FUR, setFUR] = useState('');
    const [fechaProbableParto, setFechaProbableParto] = useState('');
    const [expanded, setExpanded] = useState(false);

    const handleSearch = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setFormularioVisible(true);
        }, 3000);
    };

    const router = useRouter();

    const handleSubmit = () => {

        console.log({
            tipoDocumento,
            numeroDocumento,
            nombre,
            apellido,
            fechaNacimiento,
            direccion,
            telefono,
            genero,
            estaEmbarazada,
            FUR,
            fechaProbableParto,
        });

        router.replace('/mer')
    };

    return (
        <PaperProvider>
            <View style={{ padding: 16, backgroundColor: '#FFFFFF' }}>
                <List.Accordion
                    title={tipoDocumento || "Selecciona Tipo de Documento"}
                    expanded={expanded}
                    onPress={() => setExpanded(!expanded)}
                    titleStyle={{ color: '#000000' }}
                    style={styles.accordion}
                >
                    <List.Item title="DNI" onPress={() => { setTipoDocumento('DNI'); setExpanded(false); }} titleStyle={{ color: '#000000' }} />
                    <List.Item title="Pasaporte" onPress={() => { setTipoDocumento('Pasaporte'); setExpanded(false); }} titleStyle={{ color: '#000000' }} />
                    <List.Item title="CEXT" onPress={() => { setTipoDocumento('CEXT'); setExpanded(false); }} titleStyle={{ color: '#000000' }} />
                    <List.Item title="Otro" onPress={() => { setTipoDocumento('Otro'); setExpanded(false); }} titleStyle={{ color: '#000000' }} />
                </List.Accordion>

                {tipoDocumento && (
                    <View style={{ flexDirection: 'row', marginTop: 16 }}>
                        <TextInput
                            label="Número de Documento"
                            value={numeroDocumento}
                            onChangeText={setNumeroDocumento}
                            keyboardType="numeric"
                            textColor='#000000'
                            style={{ backgroundColor: '#F0F0F0', color: '#000000', flex: 4 }}
                            theme={{ colors: { text: '#000000', placeholder: '#888888', primary: '#000000' } }}
                        />
                        <Button style={{ flex: 1, justifyContent: 'center', marginLeft: 10 }} mode="contained" onPress={handleSearch} disabled={isLoading} buttonColor="#6200EE">
                            <Text style={{ color: '#FFFFFF' }}>{isLoading ? <ActivityIndicator animating={true} color="#000" /> : 'Buscar'}</Text>
                        </Button>
                    </View>
                )}

                {formularioVisible && (
                    <>
                        <TextInput
                            label="Nombre"
                            value={nombre}
                            textColor='#000000'
                            onChangeText={setNombre}
                            style={{ backgroundColor: '#F0F0F0', color: '#000000', marginTop: 10 }}
                            theme={{ colors: { text: '#000000', placeholder: '#888888', primary: '#000000' } }}
                        />

                        <TextInput
                            label="Apellido"
                            textColor='#000000'
                            value={apellido}
                            onChangeText={setApellido}
                            style={{ backgroundColor: '#F0F0F0', color: '#000000', marginTop: 10 }}
                            theme={{ colors: { text: '#000000', placeholder: '#888888', primary: '#000000' } }}
                        />

                        <TextInput
                            label="Fecha de Nacimiento"
                            textColor='#000000'
                            value={fechaNacimiento}
                            onChangeText={setFechaNacimiento}
                            style={{ backgroundColor: '#F0F0F0', color: '#000000', marginTop: 10 }}
                            theme={{ colors: { text: '#000000', placeholder: '#888888', primary: '#000000' } }}
                        />

                        <TextInput
                            label="Dirección"
                            value={direccion}
                            textColor='#000000'
                            onChangeText={setDireccion}
                            style={{ backgroundColor: '#F0F0F0', color: '#000000', marginTop: 10 }}
                            theme={{ colors: { text: '#000000', placeholder: '#888888', primary: '#000000' } }}
                        />

                        <TextInput
                            label="Teléfono"
                            value={telefono}
                            textColor='#000000'
                            onChangeText={setTelefono}
                            style={{ backgroundColor: '#F0F0F0', color: '#000000', marginTop: 10, marginBottom: 15 }}
                            theme={{ colors: { text: '#000000', placeholder: '#888888', primary: '#000000' } }}
                        />

                        {genero === 'Femenino' && (
                            <>
                                <Text style={{ color: '#000000', marginBottom: 10 }}>¿Está embarazada?</Text>
                                <Switch
                                    value={estaEmbarazada}
                                    onValueChange={setEstaEmbarazada}
                                    color="#6200EE"
                                />

                                {estaEmbarazada && (
                                    <>
                                        <Text style={{ color: '#000000', marginTop: 20 }}>Fecha de Última Regla (FUR)</Text>
                                        <TextInput
                                            label="FUR"
                                            value={FUR}
                                            onChangeText={setFUR}
                                            textColor='#000000'
                                            style={{ backgroundColor: '#F0F0F0', color: '#000000' }}
                                            theme={{ colors: { text: '#000000', placeholder: '#888888', primary: '#000000' } }}
                                        />

                                        <Text style={{ color: '#000000', marginTop: 20 }}>Fecha Probable de Parto</Text>
                                        <TextInput
                                            label="Fecha Probable de Parto"
                                            value={fechaProbableParto}
                                            textColor='#000000'
                                            onChangeText={setFechaProbableParto}
                                            style={{ backgroundColor: '#F0F0F0', color: '#000000' }}
                                            theme={{ colors: { text: '#000000', placeholder: '#888888', primary: '#000000' } }}
                                        />
                                    </>
                                )}
                            </>
                        )}

                        <Button style={{ marginTop: 20 }} mode="contained" onPress={handleSubmit} buttonColor="#6200EE">
                            <Text style={{ color: '#FFFFFF' }}>Registrar</Text>
                        </Button>
                    </>
                )}
            </View>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    accordion: {
        backgroundColor: '#EEEEEE',
    }
});

export default Form;
