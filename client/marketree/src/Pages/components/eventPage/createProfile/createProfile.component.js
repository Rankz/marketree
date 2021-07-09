import react from 'react';
import './createProfile.component.css';


export default function CreateProfile (props) {
  return (
    <div className="createProfile">

      <div className="createProfile_picContainer">
        <form method="post" enctype="multipart/form-data" action="/upload">
          <input type="file" name="profilePicture"></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  )

}