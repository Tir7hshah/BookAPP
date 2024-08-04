
import React, { createContext, useState, useEffect } from 'react';
import { database } from '../firebase';
import { ref, onValue } from 'firebase/database';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    const booksRef = ref(database, 'books');
    const unsubscribe = onValue(booksRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const booksList = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setBooks(booksList);
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const borrowBook = (book) => {
    if (borrowedBooks.length < 3) {
      setBorrowedBooks([...borrowedBooks, book]);
      setBooks(books.filter((b) => b.id !== book.id));
    } else {
      alert('Maximum borrow limit reached. You can borrow up to 3 books at a time.');
    }
  };

  const returnBook = (bookId) => {
    const bookToReturn = borrowedBooks.find((b) => b.id === bookId);
    setBooks([...books, bookToReturn]);
    setBorrowedBooks(borrowedBooks.filter((book) => book.id !== bookId));
  };

  return (
    <BookContext.Provider
      value={{ books, borrowedBooks, borrowBook, returnBook }}
    >
      {children}
    </BookContext.Provider>
  );
};
