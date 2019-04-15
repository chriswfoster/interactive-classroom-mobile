import * as React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class Test extends React.Component {
render(){
    console.log(this.props)
    return(
        <View>
            <Text>
                Hi
            </Text>
        </View>
    )}
}
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => {
    return {
    //   add: (name) => {
    //     dispatch(addPlace(name))
    //   }
    }
  }
  
// export default Test
export default connect(mapStateToProps, mapDispatchToProps)(Test)