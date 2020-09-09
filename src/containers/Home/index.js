import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,FlatList,TextInput,Icon, Image} from 'react-native'
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'


export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [
                {id: 1, phoneNumber: '0329456195', name :' Chip Việt'},
                {id: 2, phoneNumber: '0986541231', name: 'Sang Phạm'},
                {id: 3, phoneNumber: '0832834324', name: 'Vợ cả'},
                {id: 4, phoneNumber: '0986541231', name: 'Cưng'},
                {id: 5, phoneNumber: '0986541231', name: 'Vợ bé 1'},
                {id: 6, phoneNumber: '0986541231', name: 'Vợ bé 2'},
                {id: 7, phoneNumber: '0986541231', name: 'Vợ hàng xóm'},
                {id: 7, phoneNumber: '0986541231', name: 'Chị trưởng phòng'},
                {id: 7, phoneNumber: '0986541231', name: 'Vợ bạn thân'},
                {id: 7, phoneNumber: '0986541231', name: 'Vợ bạn thân'},
            ],
            resultSearching: [],
        }
    }

    handleSearch = (text) => {
        if(text === '') {
            this.setState({
                resultSearching: this.state.data
            })
        }
        else {
            this.setState({
                resultSearching : this.state.data.filter(item => item.name.includes(text))
            })
            
        }
        
    }

    renderItem = ({item}) => {
        return (
            <TouchableOpacity
                style={styles.touchable}
                onPress={() => this.props.navigation.navigate('Detail', { result: item })}
            >
                <View style={styles.itemWrapper}>
                    <Image style={styles.imgBills} source={require('../../assets/icon-person.png')} />
                    <View style= {styles.infoText}>
                        <Text style={{ fontSize: 22 }}>{item.name}</Text>
                        <Text style={{ fontSize: 18 }}>{item.phoneNumber}</Text>
                    </View>
                  
                </View>       
            </TouchableOpacity>
        )
    }

    render() {
        return (
         <View style={styles.container}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#303856', '#303856']} style={styles.backgroudHeader}>
            <Text style={styles.txtCardHistory}>Contacts App</Text>
            </LinearGradient>

            <View style ={styles.textInputFormStyle}>
                <TextInput
                    style={styles.inputViewer}
                    placeholder="Nhap a"
                    onChangeText={text => this.handleSearch(text)}
                ></TextInput>

            </View>
       
            <View>
                <FlatList
                data = {this.state.resultSearching}
                renderItem = {this.renderItem}
                keyExtractor = {(item,index) => index.toString()}
                >
                    
                </FlatList>
                {/* <TouchableOpacity style={styles.btnAdd}>
                        <Text style={styles.btnAddText}>Calculate</Text>
            </TouchableOpacity> */}
            </View>
            
         </View>   
           
        )
    }
}
