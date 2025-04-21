'use client';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';

export default function Home() {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/icon.png')} style={styles.image} />
      <Text style={styles.question}>Which course did you like?</Text>
      <TextInput
        style={styles.input}
        placeholder="ex. CS624"
        value={favoriteCourse}
        onChangeText={setFavoriteCourse}
      />

      <View style={styles.section}>
        <Text style={styles.header}>Core Requirements (24 credits)</Text>
        {[
          'CS 504 Software Engineering',
          'CS 506 Programming for Computing',
          'CS 519 Cloud Computing Overview',
          'CS 533 Computer Architecture',
          'CS 547 Secure Systems and Programs',
          'CS 622 Discrete Math and Algorithms for Computing',
          'DS 510 Artificial Intelligence for Data Science',
          'DS 620 Machine Learning & Deep Learning',
        ].map((course, index) => (
          <Text key={index} style={styles.course}>{course}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Depth of Study (6 Credits)</Text>
        <Text style={styles.course}>CS 624 Full-Stack Development - Mobile App</Text>
        <Text style={styles.course}>CS 628 Full-Stack Development - Web App</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 16,
  },
  question: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
  },
  section: {
    backgroundColor: 'yellow',
    padding: 10,
    marginBottom: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  course: {
    fontSize: 16,
    marginBottom: 4,
  },
});
