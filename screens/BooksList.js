
import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { BookContext } from '../context/BookContext';
import BooksListStyles from '../styles/BooksListStyles';

const BooksList = ({ navigation }) => {
  const { books, borrowBook } = useContext(BookContext);

  const handlePress = (book) => {
    navigation.navigate('BookDetail', { book }); 
  };

  return (
    <View style={BooksListStyles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id} 
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)} style={BooksListStyles.bookItem}>
            <Text style={BooksListStyles.bookTitle}>{item.name}</Text>
            <Text style={BooksListStyles.bookAuthor}>{item.author}</Text>
            <TouchableOpacity onPress={() => borrowBook(item)}>
              <Text style={{ color: 'blue', marginTop: 8 }}>Borrow</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default BooksList;
