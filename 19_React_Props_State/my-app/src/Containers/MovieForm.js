import React from 'react';

const MovieForm = () => {
    
    return (
        <form>
            <label htmlFor='title-input'>Title: </label>
            <input type='text' name='title' id='title-input'/>
            <label htmlFor='tagline-input'>Tagline: </label>
            <input type='text' name='tagline' id='tagline-input'/>
            <label htmlFor='release_date-input'>Release date: </label>
            <input type='date' name='release_date' id='release_date-input'/>
            <label htmlFor='poster_path-input'>Poster path: </label>
            <input type='url' name='poster_path' id='poster_path-input'/>
            <label htmlFor='overview-input'>Overview: </label>
            <input type='text' name='overview' id='overview-input'/>
            <label htmlFor='budget-input'>Budget: </label>
            <input type='number' name='budget' id='budget-input'/>
            <label htmlFor='revenue-input'>Revenue: </label>
            <input type='number' name='revenue' id='revenue-input'/>
            <input type='checkbox' name='genres' value='Drama' id='Drama'/>
            <label htmlFor='Drama'>Drama</label>
            <input type='checkbox' name='genres' value='Romance' id='Romance'/>
            <label htmlFor='Romance'>Romance</label>
            <input type='checkbox' name='genres' value='Animation' id='Animation'/>
            <label htmlFor='Animation'>Animation</label>
            <input type='checkbox' name='genres' value='Adventure' id='Adventure'/>
            <label htmlFor='Adventure'>Adventure</label>
            <input type='checkbox' name='genres' value='Comedy' id='Comedy'/>
            <label htmlFor='Comedy'>Comedy</label>
            <input type='checkbox' name='genres' value='Family' id='Family'/>
            <label htmlFor='Family'>Family</label>
            <input type='checkbox' name='genres' value='Science Fiction' id='Science Fiction'/>
            <label htmlFor='Science Fiction'>Science Fiction</label>
            <input type='checkbox' name='genres' value='Fantasy' id='Fantasy'/>
            <label htmlFor='Fantasy'>Fantasy</label>
            <input type='checkbox' name='genres' value='Action' id='Action'/>
            <label htmlFor='Action'>Action</label>
            <div>
                <button type='submit'>Submit</button>
                <button type='reset'>Reset</button>
            </div>
        </form>
    );
};

// class MovieForm extends React.Component {

//     render(){
//         return (
//             <form >
//                 <label htmlFor='title-input'>Title: </label>
//                 <input type='text' name='title' id='title-input'/>
//                 <label htmlFor='tagline-input'>Tagline: </label>
//                 <input type='text' name='tagline' id='tagline-input'/>
//                 <label htmlFor='release_date-input'>Release date: </label>
//                 <input type='date' name='release_date' id='release_date-input'/>
//                 <label htmlFor='poster_path-input'>Poster path: </label>
//                 <input type='url' name='poster_path' id='poster_path-input'/>
//                 <label htmlFor='overview-input'>Overview: </label>
//                 <input type='text' name='overview' id='overview-input'/>
//                 <label htmlFor='budget-input'>Budget: </label>
//                 <input type='number' name='budget' id='budget-input'/>
//                 <label htmlFor='revenue-input'>Revenue: </label>
//                 <input type='number' name='revenue' id='revenue-input'/>
//                 <input type='checkbox' name='genres' value='Drama' id='Drama'/>
//                 <label htmlFor='Drama'>Drama</label>
//                 <input type='checkbox' name='genres' value='Romance' id='Romance'/>
//                 <label htmlFor='Romance'>Romance</label>
//                 <input type='checkbox' name='genres' value='Animation' id='Animation'/>
//                 <label htmlFor='Animation'>Animation</label>
//                 <input type='checkbox' name='genres' value='Adventure' id='Adventure'/>
//                 <label htmlFor='Adventure'>Adventure</label>
//                 <input type='checkbox' name='genres' value='Comedy' id='Comedy'/>
//                 <label htmlFor='Comedy'>Comedy</label>
//                 <input type='checkbox' name='genres' value='Family' id='Family'/>
//                 <label htmlFor='Family'>Family</label>
//                 <input type='checkbox' name='genres' value='Science Fiction' id='Science Fiction'/>
//                 <label htmlFor='Science Fiction'>Science Fiction</label>
//                 <input type='checkbox' name='genres' value='Fantasy' id='Fantasy'/>
//                 <label htmlFor='Fantasy'>Fantasy</label>
//                 <input type='checkbox' name='genres' value='Action' id='Action'/>
//                 <label htmlFor='Action'>Action</label>
//                 <div>
//                     <button type='submit'>Submit</button>
//                     <button type='reset'>Reset</button>
//                 </div>
//             </form>
//         );
//     } 
// }

export default MovieForm;