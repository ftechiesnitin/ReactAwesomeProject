//
// class Greeting extends Component {
// // console.log(this.props);
//   render() {
//     return (
//       <Text style={this.props.styles}>Hello {this.props.text}!</Text>
//     );
//   }
// }
//
// class ProfileImage extends Component {
//   render() {
//     return (
//       <Image source={{uri: this.props.url}} style={{width: 200, height: 250}}/>
//     );
//   }
// }
//
// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {showText: true};
//
//     // Toggle the state every second
//     setInterval(() => {
//       this.setState({ showText: !this.state.showText });
//     }, 1000);
//   }
//
//   render() {
//     let display = this.state.showText ? this.props.text : ' what the fuck';
//     return (
//       <Text>{display}</Text>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   bigblue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 22,
//   },
//   red: {
//     color: 'red',
//     fontSize: 24,
//   },
//   yellow: {
//     color: '#FDD035',
//     fontSize: 20,
//   },
// });

// class ReactAwesomeProject extends Component {
//   render() {
//     return (
//       <View style={{ alignItems: 'center', top: 20 }}>
//         <Greeting text='HEADING' styles={styles.red}/>
//         <Greeting text='BETTER THAN ' styles={styles.bigblue}/>
//         <Greeting text='HTML' styles={styles.yellow} />
//         <Greeting text='CSS' />
//       </View>
//     );
//   }
// }

// class ReactAwesomeProject extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: ''};
//   }
//
//   render() {
//     return (
//       // Try removing the `flex: 1` on the parent View.
//       // The parent will not have dimensions, so the children can't expand.
//       // What if you add `height: 300` instead of `flex: 1`?
//       <View style={{flex: 1}}>
//         <View style={{ alignItems: 'center', top: 20 }}>
//           <Greeting text='HEADING' styles={styles.red}/>
//           <Greeting text='BETTER THAN ' styles={styles.bigblue}/>
//           <Greeting text='HTML' styles={styles.yellow} />
//           <Greeting text='CSS' />
//         </View>
//         <View style={{padding: 10, top: 20}}>
//           <TextInput
//             style={{height: 40}}
//             placeholder="Type here to translate!"
//             onChangeText={(text) => this.setState({text})}
//           />
//           <Text style={{padding: 10, fontSize: 42}}>
//             {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//           </Text>
//         </View>
//         <View style={{
//           flex: 1,
//           // flexDirection: 'row'
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//           <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//           <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//           <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//         </View>
//       </View>
//     );
//   }
// }
