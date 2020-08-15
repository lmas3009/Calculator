
import React from 'react';
import { StyleSheet, Text, View,TextInput, FlatList, TouchableOpacity ,ScrollView} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons'

var display =[];
var values=[];
export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      num:'',
      total:'',
      operator:'',
      next:false,
        data:[
          {name:'',key:'1'},
          {name:'AC',key:'2'},
          {name:'^',key:'3'},
          {name:'/',key:'4'},
          {name:'7',key:'5'},
          {name:'8',key:'6'},
          {name:'9',key:'7'},
          {name:'x',key:'8'},
          {name:'4',key:'9'},
          {name:'5',key:'10'},
          {name:'6',key:'11'},
          {name:'-',key:'12'},
          {name:'1',key:'13'},
          {name:'2',key:'14'},
          {name:'3',key:'15'},
          {name:'+',key:'16'},
          {name:'%',key:'17'},
          {name:'0',key:'18'},
          {name:'.',key:'19'},
          {name:'=',key:'20'},
      ] 
    }
  }
  F1=(name)=>{
    if(name>=0 || name==='.'){
      this.setState({
        operator:'',
        num:'',
        next:false
      })
      values.push(name)
      this.setState({
        num:values,
        total:this.state.total+name
      })
    }
    else if(name==='AC'){
      values=[]
      display=[]
      this.setState({
        num:'',
        total:'',
        operator:'',
      })
    }
    else if(name==='+'){
      var val = '';
      var val1 = '';
      for(var i=0;i<values.length;i++){
        val+=values[i]
      }
      display.push(val)
      display.push(name)
      for(var i=0;i<display.length;i++){
        val1+=display[i]
      }
      values=[]
      this.setState({
        total:val1,
        num:val1
      })
    }
    else if(name==='-'){
      var val = '';
      var val1 = '';
      for(var i=0;i<values.length;i++){
        val+=values[i]
      }
      display.push(val)
      display.push(name)
      for(var i=0;i<display.length;i++){
        val1+=display[i]
      }
      values=[]
      this.setState({
        total:val1,
        num:val1
      })
    }
    else if(name==='x'){
      var val = '';
      var val1 = '';
      for(var i=0;i<values.length;i++){
        val+=values[i]
      }
      display.push(val)
      display.push("*")
      for(var i=0;i<display.length;i++){
        val1+=display[i]
      }
      values=[]
      this.setState({
        total:val1,
        num:val1
      })
    }
    else if(name==='/'){
      var val = '';
      var val1 = '';
      for(var i=0;i<values.length;i++){
        val+=values[i]
      }
      display.push(val)
      display.push(name)
      for(var i=0;i<display.length;i++){
        val1+=display[i]
      }
      values=[]
      this.setState({
        total:val1,
        num:val1
      })
    }
    else if(name==='%'){
      var val = '';
      var val1 = '';
      for(var i=0;i<values.length;i++){
        val+=values[i]
      }
      display.push(val)
      display.push(name)
      for(var i=0;i<display.length;i++){
        val1+=display[i]
      }
      values=[]
      this.setState({
        total:val1,
        num:val1
      })
    }
    else if(name==='^'){
      var val = '';
      var val1 = '';
      for(var i=0;i<values.length;i++){
        val+=values[i]
      }
      display.push(val)
      display.push(name)
      for(var i=0;i<display.length;i++){
        val1+=display[i]
      }
      values=[]
      this.setState({
        total:val1,
        num:val1
      })
    }
    else if(name==='='){
      var total = this.state.total
      total = total.replace("^","**")
      this.setState({
        num:eval(total),
        total:eval(total)
      })
      display=[]
      values=[]
      this.setState({
        total:''
      })
    }
  }
  renderItem = ({ item }) => {
    /*var data=[];
    if(item.name=="=" && this.state.next==false){
      data.push(
      <FontAwesome5 onPress={()=>{
        this.setState({
          next:true
        })
      }} key={item.key} name="arrow-circle-right" size={30} color="white"/>
      )
    }
    else{
      data.push(
        <Text key={item.key} style = {styles.item} > {item.name} </Text>
      )
    }*/
    return (
      <TouchableOpacity
            style={styles.itemstyle}
            onPress={()=>this.F1(item.name)}>
                <Text key={item.key} style = {styles.item} > {item.name} </Text>
      </TouchableOpacity>
    )
  }

  render(){
  return (
    <View style={styles.container}>
      <View style={styles.textstyle}>
        <Text style={styles.title}>Calculator</Text>
      </View>
      <View style={styles.textinput}>
          <Text numberOfLines={1} style={styles.input}>{this.state.num}</Text>
      </View>
      <Text numberOfLines={1} style={styles.input1}>{this.state.total}</Text>
      <View style={styles.list}>
      <FlatList
      columnWrapperStyle={{justifyContent:"space-around"}}
        numColumns = {4}
        keyExtractor = {(item) => item.key}
        data = {this.state.data}
        renderItem = { this.renderItem}
        />
        <View style={{marginTop: 20}}/>
      </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2B17B',
  },
  title:{
    marginTop: 50,
    fontSize: 40,
    color:'white',
    fontWeight: '700'
  },
  textstyle:{
    alignItems:'center'
  },
  textinput:{
    height: 60,
    borderColor:'lightgrey',
    borderWidth:2,
    borderRadius:5,
    marginTop: 30,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 15,
    alignItems:'flex-end',
    justifyContent:'center'
  },
  input:{
    color:"white",
    marginLeft: 10,
    marginRight: 10,
    fontSize: 30,
  },
  input1:{
    color:'white',
    marginLeft:10,
    marginRight:10,
    fontSize:30
  },  
  list:{
    marginTop: 20
  },  
  itemstyle:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 30,
    height: 60,
    width: 60,
    backgroundColor: '#ECC19E',
    justifyContent:"center",
    alignItems:'center',
    borderRadius:10,
    shadowColor: "#fff",
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 10
  },
  item:{
    fontSize: 25,
    fontWeight:'500',
    color:'white',
  }
  
});
