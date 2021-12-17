package com.younessi.modern.bookstore.design.services;

import com.younessi.modern.bookstore.design.entities.Book;
import com.younessi.modern.bookstore.design.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class BookServicesImpl implements BookServices{

    @Autowired
    BookRepository bookRepo;

    @Override
    public List<Book> findAllBooksByCustomer(String customer) {
        return bookRepo.findAllBooksByCustomer(customer);
    }

    @Override
    public Book findBookByCustomerAndTitle(String customer, String title) {
        return bookRepo.findBookByCustomerAndTitle(customer, title);
    }

    @Override
    public Book saveBook(Book book) {
        return bookRepo.save(book);
    }

    @Override
    public void updateQuantity(int quantity, Book book) {
        long bookId = book.getId();
        bookRepo.updateQuantity(quantity, bookId);

    }
}
