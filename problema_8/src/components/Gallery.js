import React, { useState, useEffect } from 'react';
import { TextField, Grid, makeStyles, Container } from '@material-ui/core';
import axios from 'axios';
import '../App.css';

const MAX_IMAGES = 15;
const API_KEY = '62BC5Z33tqVMPPy9Mhpdsn27XGhc2HjcM2U1zUrlrhFBvXR6eagSwM03';
const API_URL = `https://api.pexels.com/v1/curated?per_page=${MAX_IMAGES}`;

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    textAlign: 'center',
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'flex-start', // Align images to the left
    flexWrap: 'wrap', // Allow images to wrap when there's not enough space
    margin: 'auto', // Center the image container
  },
  image: {
    margin: '5px', // Add some spacing between images
    [theme.breakpoints.up('sm')]: {
      // Styles for screens of size 600px and above (computers)
      width: '166px',
      height: '600px',
      objectFit: 'cover',
    },
    [theme.breakpoints.down('sm')]: {
      // Styles for screens below 600px (mobile devices)
      width: '100%',
      height: 'auto',
    },
  },
  textField: {
    margin: theme.spacing(2),
  },
  errorMessage: {
    color: 'red',
    marginTop: theme.spacing(1),
  },
}));

const Gallery = () => {
  const classes = useStyles();
  
  const [numImages, setNumImages] = useState(0);
  const [singleRowImageUrls, setSingleRowImageUrls] = useState([]);
  const [shouldFetchImages, setShouldFetchImages] = useState(false);
  const [exceededLimit, setExceededLimit] = useState(false);

  useEffect(() => {
    if (shouldFetchImages) {
      fetchImages();
      setShouldFetchImages(false);
    }
  }, [shouldFetchImages]);

  const handleNumImagesChange = (event) => {
    const value = parseInt(event.target.value);
    setNumImages(value);
    setExceededLimit(value > MAX_IMAGES);
    setShouldFetchImages(true);
  };

  const fetchImages = () => {
    if (numImages > 0 && numImages <= MAX_IMAGES) {
      axios
        .get(API_URL, {
          headers: {
            Authorization: API_KEY,
          },
        })
        .then((response) => {
          const urls = response.data.photos.map((photoData) => photoData.src.original);
          
          // Slice the images to show the desired number in a single row
          const singleRowImages = urls.slice(0, numImages);

          setSingleRowImageUrls(singleRowImages);
        })
        .catch((error) => {
          console.error('Error fetching images:', error);
        });
    } else {
      setSingleRowImageUrls([]);
    }
  };

  const singleRow = (
    <div className={classes.imageContainer}>
      {singleRowImageUrls.map((url, index) => (
        <img
          key={index}
          className={classes.image}
          src={url}
          alt={`Image ${index + 1}`}
        />
      ))}
    </div>
  );

  return (
    <Container className={classes.container}>
      <h2 className={classes.title}>Galería de Imágenes</h2>
      <TextField
        style={{width:'200px'}}
        className={classes.textField}
        type="number"
        label="Ingresa un número"
        value={numImages}
        onChange={handleNumImagesChange}
        inputProps={{
          min: 0,
          max: MAX_IMAGES,
          step: 1,
        }}
        error={exceededLimit}
        helperText={exceededLimit ? 'Solo se permiten hasta 15 imágenes' : ''}
      />
      {exceededLimit && (
        <p className={classes.errorMessage}>Solo se permiten hasta 15 imágenes</p>
      )}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {singleRow}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Gallery;
