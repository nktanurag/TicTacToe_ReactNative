import { StyleSheet } from "react-native"

const mainApp = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#241239',
        padding: 8,
  },
})
const boardStyle =StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row'
    },
    square: {
        height:100,
        width:100,
        marginVertical: 4,
        marginHorizontal: 4, 
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    board: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height:200
    },
    modal: {
        margin: 20,
        backgroundColor: 'white',
        flex: 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        padding: 35,
        margin: 'auto'
    }
})
export { mainApp, boardStyle }