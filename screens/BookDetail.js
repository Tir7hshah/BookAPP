
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookDetailStyles from '../styles/BookDetailStyles';

const BookDetail = ({ route, navigation }) => {
  const { book } = route.params;
  const { borrowBook, borrowedBooks } = useContext(BookContext);

  const handleBorrow = () => {
    if (borrowedBooks.length >= 3) {
      alert('Maximum borrow limit reached. You can borrow up to 3 books at a time.');
    } else {
      borrowBook(book);
      alert('You have borrowed the book.');
      navigation.goBack(); // Go back to the previous screen
    }
  };

  return (
    <View style={BookDetailStyles.container}>
      <Text style={BookDetailStyles.bookTitle}>{book.name}</Text>
      <Text style={BookDetailStyles.bookAuthor}>Author: {book.author}</Text>
      <Text>Rating: {book.rating}</Text>
      <Text style={BookDetailStyles.bookSummary}>{book.summary}</Text>
      <Button title="Borrow Book" onPress={handleBorrow} />
    </View>
  );
};

export default BookDetail;
