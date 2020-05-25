import React, { useState } from 'react';
import Papa from 'papaparse';
import { connect } from 'react-redux';
import { createSong } from '../../store/actions/appActions';

export const FileUpload = ({ createSong }) => {
  const [csvfile, setCsvFile] = useState();
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const handleChange = (event) => {
    setCsvFile(event.target.files[0]);
  };

  const importCSV = () => {
    Papa.parse(csvfile, {
      complete: updateData,
      header: true,
    });
  };

  const updateData = (result) => {
    var data = result.data;
    createSong(artist, title, imgUrl, data);
    setArtist('');
    setTitle('');
    setImgUrl('');
  };

  return (
    <div className="App">
      <h2>Import CSV File!</h2>
      <input
        type="text"
        placeholder="Artist Name"
        id="input-artist"
        value={artist}
        onChange={(e) => setArtist(e.currentTarget.value)}
      />
      <input
        type="text"
        placeholder="Song Name"
        id="input-title"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <input
        type="text"
        placeholder="Song Image Url"
        id="input-imgUrl"
        value={imgUrl}
        onChange={(e) => setImgUrl(e.currentTarget.value)}
      />
      <input
        className="csv-input"
        type="file"
        name="file"
        placeholder={null}
        onChange={handleChange}
      />
      <p />
      <button onClick={importCSV}> Upload now!</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createSong: (artist, title, imgUrl, cards) =>
      dispatch(createSong(artist, title, imgUrl, cards)),
  };
};

export default connect(null, mapDispatchToProps)(FileUpload);
