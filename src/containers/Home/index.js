import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,FlatList} from 'react-native'
import styles from './styles'

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            list: [],
        }
    }

    handleClick = () => {
        const number = this.state.number + 1 ;

        const updateList = [...this.state.list,number]
        this.setState ({
            number : this.state.number + 1,
            list: updateList
        })
    }

    renderItem = ({item}) => {
        return (
            <View>
                <Text>{this.state.list}</Text>
            </View>
        )
    }

    render() {
        return (
         <View style={styles.container}>
       

            <Text>{this.state.number}</Text>

            <View>
                 <FlatList 
                    data = {this.state.list}
                    keyExtractor = {(item,index) => index.toString()}
                    renderItem={this.renderItem}
                 >     
                 </FlatList>
             </View>

            <TouchableOpacity style={styles.btnAdd} onPress={this.handleClick}>
                        <Text style={styles.btnAddText}>Add</Text>
            </TouchableOpacity>
         </View>   
           
        )
    }
}
