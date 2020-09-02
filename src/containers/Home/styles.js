import { StyleSheet } from 'react-native'
import SizeMatters from '../../services/SizeMatters'


export default StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center'
  },

  wrapper: {
    height: 145
  },



  btnAdd: {
   
    width:'45%',
    height: 55,
    paddingVertical: 14,
    backgroundColor: '#303856',
    marginBottom: 12,
    borderRadius: 8,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center', 
    alignItems: 'center',
  },

  btnAddText: {
    fontFamily: 'Roboto',
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  }

})
