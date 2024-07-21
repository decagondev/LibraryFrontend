import { useParams } from "react-router-dom";
import Book from "../assets/hero.jpg"
import { useEffect, useState } from "react";
import axios from 'axios';

export default function BookDetail() {
    const { id } = useParams();
    const [book, setBook] = useState();

    useEffect(() => {
        getBook();
    }, []);


    const getBook = async () => {
        try {
            const result = await axios.get(`https://libapi-ett48g14.b4a.run/books${id}`);
            console.log("The Result:", result);
            setBook(result.data);

        } catch (err) {
            console.error(err);
        }
    }
    const bookData = [
        {
            id: 0,
            title: "My First Book",
            author: "Bob Jones",
            description: "This is my book that I wrote and it is awesome!",
            publishedAt: "2009-08-12"
        },
        {
            id: 1,
            title: "My Second Book",
            author: "Bob Jones",
            description: "This is another book that I wrote and it is awesome!",
            publishedAt: "2009-08-15"
        },
        {
            id: 2,
            title: "My Real Book",
            author: "Dave Jones",
            description: "This is a real book that I wrote and it is awesome!",
            publishedAt: "2009-08-16"
        },
        {
            id: 3,
            title: "The Book",
            author: "Bob Smith",
            description: "This is my book that I wrote and it is awesome!",
            publishedAt: "2019-08-22"
        },
        {
            id: 4,
            title: "New Book",
            author: "Julie F",
            description: "This is my book that I wrote and it is awesome!",
            publishedAt: "2019-08-22"
        },
    ];

;    return (
        <div className="flex w-full justify-center text-2xl">
            <a href="http://www.google.com" target="_BLANK">
                <div className="flex flex-col gap-2 text-center border-2 rounded-md shadow-lg p-6">
                    <h1>{book?.title}</h1>
                    <p>Written By: {book?.author}</p>
                    <p>Published Date: {book?.publishedAt}</p>
                    <p>Description: {book?.description}</p>
                    <img className="w-[200px] h-[200px] self-center m-4 rounded-lg shadow-lg" src={Book} alt="" />
                </div>
            </a>
            
        </div>
    );
}