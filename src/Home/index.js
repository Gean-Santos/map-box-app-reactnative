import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import House from '../assets/house.png';
import Logo from '../assets/dog.png';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiZ2VhbnN0b3MiLCJhIjoiY2s3emh3MXZyMDI3djNucDlzbm0wd2Y1NSJ9.JXvRCsi8HrQotYpzLQ4kUw',
);

function renderAnnotations(coordenada, id, title){
  return (
    <MapboxGL.PointAnnotation
    key={id}
      id={id}
      coordinate={coordenada}
    >
      <View style={styles.annotationContainer}>
        {/* <Image source={House} style={styles.annotationImage} /> */}
        <View style={styles.annotationFill} />
      </View>
      <MapboxGL.Callout title={title} />
    </MapboxGL.PointAnnotation>
  )
}

export default function Home() {
  const coordinate1 = [-46.4161188, -23.9276719];
  const coordinate2 = [-46.4161188, -23.9276719];
  const coordinate3 = [-46.4062226, -23.9291329];
  return (
      <MapboxGL.MapView 
      style={styles.container} 
      showUserLocation
      styleURL={MapboxGL.StyleURL.Street}>
      <MapboxGL.Camera
        centerCoordinate={coordinate1}
        zoomLevel={15}
      />
      {
        [ renderAnnotations(coordinate2, 'first', 'Home'), renderAnnotations(coordinate3, 'second', 'Other') ]
      }
    </MapboxGL.MapView> 
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 12,
    borderWidth: 4,
  },
  annotationContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  annotationFill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#7159C1',
    transform: [{ scale: 0.8 }],
  },
  annotationImage: {
    width: 40,
    height: 40,
  },
});
