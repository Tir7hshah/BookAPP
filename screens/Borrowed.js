
import React, { useContext } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { BookContext } from '../context/BookContext';
import BorrowedStyles from '../styles/BorrowedStyles';

const Borrowed = () => {
  const { borrowedBooks, returnBook } = useContext(BookContext);

  return (
    <View style={BorrowedStyles.container}>
      <FlatList
        data={borrowedBooks}
        keyExtractor={(item) => item.id} // Ensure the key is unique
        renderItem={({ item }) => (
          <View style={BorrowedStyles.bookItem}>
            <Text style={BorrowedStyles.bookTitle}>{item.name}</Text>
            <Text style={BorrowedStyles.bookAuthor}>{item.author}</Text>
            <Button title="Return Book" onPress={() => returnBook(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default Borrowed;
