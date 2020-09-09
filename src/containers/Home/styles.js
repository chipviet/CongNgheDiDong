import { StyleSheet } from 'react-native'
import SizeMatters from '../../services/SizeMatters'


export default StyleSheet.create({
  container: {
    flex:1,
  },

  wrapper: {
    height: 145
  },



  btnAdd: {
    width:'45%',
    height: 55,
    paddingVertical: 14,
    marginTop: 15,
    backgroundColor: '#303856',
    marginBottom: 12,
    borderRadius: 8,
    // position: 'absolute',
    // bottom: 0,
    justifyContent: 'center', 
    alignItems: 'center',
  },

  btnAddText: {
    fontFamily: 'Roboto',
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },

  backgroudHeader: {
    width: '100%',
    height: 120,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },

  txtCardHistory: {
    fontFamily: 'Roboto-Medium',
    fontSize: 22,
    color: '#fff'
  },

  textInputFormStyle:{
    marginTop: 20,
    alignItems: 'center',
  },

  itemWrapper: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    paddingTop: 16,
    paddingLeft: 30
  },

  touchable: {
    paddingTop: 20,
  },


  inputViewer: {
    height: 50,
    width: 350,
    borderWidth: 1,
    borderColor: '#5E6066',
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#ffffff',
    opacity: 0.7,
    marginVertical: 5,
  },

    imgBills:{
    width: 60,
    height: 60,
  },

  infoText: {
    paddingLeft: 20
  },


})
