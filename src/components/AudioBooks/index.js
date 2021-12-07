import React, {useEffect, useState} from 'react';
import { audiobooks } from './AudioBooksList';
import AudioContents from './AudioContents';
import Authors from './Authors';
import './style.css';


const AudioBooks = () => {

    const [authors, setAuthors] = useState([]);
    const[clickedElementId, setClickedElementId] = useState("");
    const[booksChosen, setBooksChosen] = useState([]);

    var allAuthors = [];
    var authorsWithId = [];
    var booksRetrieved = [];

    useEffect(() => {
        for(let i = 0; i < audiobooks.length; i++){
            if(allAuthors.indexOf(audiobooks[i].artistName) == -1){
                allAuthors.push(audiobooks[i].artistName)
            } else {
                continue;
            }
        }
        for(let i = 0; i < allAuthors.length; i++){
            authorsWithId.push({
                id: i + "-id",
                name: allAuthors[i]
            })
        }
        setAuthors(authorsWithId);
    }, []);

    function childDataHandler(childData){
        setClickedElementId(childData);
        for(let i = 0; i < audiobooks.length; i++){
            if(audiobooks[i].artistName == childData){
                booksRetrieved.push(audiobooks[i]);
            }
        }
        setBooksChosen(booksRetrieved);
    }



    return(
        <div className="row">
            <div className="cols-lg-3">
                <ul>
                    {
                        authors.map(author => <Authors data={author} parentCallBack={childDataHandler}/>)
                    }
                </ul>
            </div>
            <div className="cols-lg-9">
                {
                    booksChosen.map(book => <AudioContents data={book} />)
                }
            </div>
        </div>
    )

}

export default AudioBooks;