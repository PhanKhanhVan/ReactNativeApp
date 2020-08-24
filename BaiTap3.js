/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';

export default class BaiTap3 extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          flexDirection: 'column',
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'green',
            }}>
            <Text>1</Text>
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: 'column',
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'red',
              }}>
              <Text>3</Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'bisque',
              }}>
              <Text>4</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'yellow',
            }}>
            <Text>2</Text>
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: 'column',
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'blue',
              }}>
              <Text>5</Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'purple',
              }}>
              <Text>6</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'brown',
              }}>
              <Text>7</Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'darkgoldenrod',
              }}>
              <Text>8</Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'gray',
              }}>
              <Text>9</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
