import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,FlatList,TextInput} from 'react-native'
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'


export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            a: 0,
            b: 0,
            c: 0,
            list: []
        }
    }

    handleCalculate = () => {
        const {a,b,c,list} = this.state;
        console.log("a" + a);
        console.log("a" + b);
        console.log("a" + c);
        var result = ''
        var delta =  ((b*b) -(4*a*c))
        if (a == 0) {
            result = a+"x^2 "+ "+ "+ b+"x "+ "+ "+ c+"=0"+ "\n"+ "phuong trinh co nghiem x = " + (-c / b);
        }
        else {
            if (delta == 0) {
                result = a+"x^2 "+ "+ "+ b+"x "+ "+ "+ c+"=0"+ "\n"+ "phuong trinh co nghiem kep x1 = x2 = " + (-b / 2 / a) + " ";
            }
            else {
                if (delta > 0) {
                    result = a+"x^2 "+ "+ "+ b+"x "+ "+ "+ c+"=0"+ "\n"+ "phuong trinh co nghiem x1 = " + ((-b - Math.sqrt(delta)) / 2 / a) + ", x2 = " + ((-b + Math.sqrt(delta)) / 2 / a) + " ";
                }
                else {
                    result =a+"x^2 "+ "+ "+ b+"x "+ "+ "+ c+"=0"+ "\n"+ "phuong trinh vo nghiem";
                }
            }
        }

        console.log(result)
        const newArr = [...this.state.list]
        newArr.unshift(result);
        this.setState ({
            list: newArr,
            a: 0,
            b: 0,
            c: 0
        })
    }

    renderItem = ({item}) => {
        return (
            <TouchableOpacity
                style={{ padding: 50, borderWidth: 0.2 }}
                onPress={() => this.props.navigation.navigate('Detail', { result: item })}
            >
                <Text style={{ fontSize: 20 }}>{item}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
         <View style={styles.container}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#303856', '#303856']} style={styles.backgroudHeader}>
            <Text style={styles.txtCardHistory}>Giai Phuong Trinh Bac 2</Text>
            </LinearGradient>

            <View style ={styles.textInputFormStyle}>
                <TextInput
                    keyboardType='numeric'
                    value = {this.state.a}
                    style={styles.inputViewer}
                    placeholder="Nhap a"
                    onChangeText={text => this.setState({a: text})}
                ></TextInput>

                <TextInput
                    keyboardType='numeric'
                    value = {this.state.b}
                    style={styles.inputViewer}
                    placeholder="Nhap b"
                    onChangeText={text => this.setState({b: text})}
                ></TextInput>

                <TextInput
                    keyboardType='numeric'
                    value = {this.state.c}
                    style={styles.inputViewer}
                    placeholder="Nhap c"
                    onChangeText={text => this.setState({c: text})}
                ></TextInput>

            </View>
       
            <TouchableOpacity style={styles.btnAdd} onPress={this.handleCalculate}>
                        <Text style={styles.btnAddText}>Calculate</Text>
            </TouchableOpacity>

            <View>
                <FlatList
                data = {this.state.list}
                renderItem = {this.renderItem}
                keyExtractor = {(item,index) => index.toString()}
                >
                    
                </FlatList>
            </View>
         </View>   
           
        )
    }
}
