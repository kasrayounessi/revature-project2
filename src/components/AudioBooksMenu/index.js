import React from 'react';
import { audiobooks } from './AudioBooksList';
import Selection from './Selection';

const AudioBooksMenu = () => {
    return (
        <div className="row">
            <div className="col-lg-3">
                {
                    audiobooks.map(a => <Selection data={a} />)
                }
            </div>
            <div className="col-lg-9">

            </div>
        </div>
    )

}

export default AudioBooksMenu;