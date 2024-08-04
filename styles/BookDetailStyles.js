
import { StyleSheet } from 'react-native';

const BookDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  bookTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bookAuthor: {
    fontSize: 18,
    marginBottom: 8,
    color: '#555',
  },
  bookSummary: {
    fontSize: 16,
    marginTop: 16,
    lineHeight: 24,
  },
});

export default BookDetailStyles;
