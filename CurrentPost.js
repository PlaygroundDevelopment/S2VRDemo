import * as React from 'react';
import {StyleSheet, Text, View} from 'react-360';
import {connect} from './Store';

/**
 * Render a description of the currently-selected section.
 * Connected to the global store to receive inputs.
 */
const CurrentPost = props => {
  if (!props.posts) {
    return <View style={styles.wrapper} />;
  }
  if (props.current < 0) {
    return (
      <View style={styles.wrapper}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{textAlign: 'center',color:'black'}}>Select a Project</Text>
        </View>
      </View>
    );
  }
  const post = props.posts[props.current];
  return (
    <View style={styles.wrapper}>
      <Text style={styles.name}>{post.name}</Text>
      <Text style={styles.author}>{post.author}</Text>
      <Text style={styles.description}>{post.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 300,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderColor: '#303050',
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 10,
  },
  name: {
    fontSize: 36,
    textAlign: 'center',
    color : 'black'
  },
  author: {
    fontSize: 20,
    textAlign: 'center',
    color : 'black'
  },
  description: {
    fontSize: 22,
    color:'black'
  },
});

const ConnectedCurrentPost = connect(CurrentPost);

export default ConnectedCurrentPost;
