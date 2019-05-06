import * as React from 'react';
import {StyleSheet, View, asset, Image} from 'react-360';
import {connect} from './Store';

class ImageView extends React.Component {

  render() {
    if (!this.props.posts || this.props.current < 0) {
      return null;
    }
    const post = this.props.posts[this.props.current];
    console.log(JSON.stringify(post));
    return (
      <View  style={styles.wrapper}>
        <Image style={styles.wallpaper} source={asset(post.image)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width:1000,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderColor: '#303050',
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  wallpaper: {
    width: '100%',
    height: 600,
    backgroundColor: 'white'
  }
});

const ConnectedModelView = connect(ImageView);

export default ConnectedModelView;
