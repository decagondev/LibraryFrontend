import { useState } from "react";
import axios from 'axios';

export default function BookForm() {


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [published, setPublished] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const book = { title, description, author, publishedAt: published };

        try {
            const result = await axios.post("https://libapi-ett48g14.b4a.run/books", book);
            console.log(result);
            setTitle('');
            setDescription('');
            setAuthor('');
            setPublished('');
            alert("Successfully Create Book!");
        } catch (err) {
            console.error(err);
        }

        console.log("Book:", book);
    }

    return (
    <div className="w-full flex justify-center">
        <div>
            <h1 className="text-2xl">Create New Book</h1>
            <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3 my-4">
                <label className="mt-2" htmlFor="title">Title</label>
                <input className="border p-2 rounded-md" type="text" value={title} name="title" id="title" onChange={(e) => setTitle(e.target.value)} placeholder="input your book title..." />
            </div>
            <div className="flex flex-col gap-3 my-4">
                <label htmlFor="description">Description</label>
                <textarea className="border p-2 rounded-md" rows="3"  value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" id="description" placeholder="Add a description of your book..." />
            </div>
            <div className="flex flex-col gap-3 my-4">
                <label className="mt-2" htmlFor="published">Published</label>
                <input className="border p-2 rounded-md" value={published} onChange={(e) => setPublished(e.target.value)} type="date" name="published" id="published" />
            </div>
            <div className="flex flex-col gap-3 my-4">
                <label className="mt-2" htmlFor="author">Author</label>
                <input className="border p-2 rounded-md" value={author} onChange={(e) => setAuthor(e.target.value)} type="text" name="author" id="author" placeholder="input the books author..." />
            </div>
            <button  className="border p-2 rounded-md w-full bg-blue-400 text-white hover:text-black hover:bg-blue-300" type="submit">Save</button>
            </form>
        </div>
    </div>
    );
}