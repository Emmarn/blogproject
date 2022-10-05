import React from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import styles from './Addpost.css'


export const Addpost = () => {
  //Skapar States för de värden som ska ändras.
  const [value, setValue] = React.useState("");
  const[title, setTitle]=React.useState('');
  const[tags, setTags]=React.useState('');
  const [ingress, setIngress]=React.useState('');
  const [imageUrl, setImageUrl]=React.useState('');

  const inputFileRef=React.useRef(null);

  const handleChangeFile=async()=>{
    try{
      const formData=new FormData();
      const file=Event.target.files[0];
      formData.append('image',file);
      const {data}=await ('');
      
      setImageUrl(data.url);

    }catch(err){
      console.warn(err);
      alert('Error');
    }
  };
  const onClickRemoveImage=()=>{};

  const onChange = React.useCallback((value) => {
    setValue(value);
  }, []);

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "50vh",
      autofocus: true,
      placeholder: "Skriv text...",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    []
  );

  return (
    <div className="add-post-page">
    <Paper className="paper">
      <Button className="button"  onClick={()=>inputFileRef.current.click()} variant="outlined" size="large">
        Lägg till foto
      </Button>
      <input ref={inputFileRef} type='file' onChange={handleChangeFile} hidden/>
      {imageUrl&& (
        <>
        <Button variant="contained" color='error' onClick={onClickRemoveImage}>
          Ta bort
        </Button>
        <img className="image" src={'http://localhost:3000${imageUrl}'} alt='Uploaded'/>
        </>
      )}
      <br />
      <br />
      <TextField
        //classes={{ root: styles.title }}
        className="title"
        variant="standard"
        placeholder="Rubrik..."
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        fullWidth
      />
      <TextField
        //classes={{ root: styles.tags }}
        className="tags"
        variant="standard"
        placeholder="Tags"
        value={tags}
        onChange={(e)=> setTags(e.target.value)}
        fullWidth
      />
      <TextField
        //classes={{ root: styles.ingress }}
        className="ingress"
        variant="standard"
        placeholder="Ingress..."
        value={ingress}
        onChange={(e)=> setIngress(e.target.value)}
        fullWidth
      />
      <SimpleMDE
        className="editor"
        value={value}
        onChange={onChange}
        options={options}
      />
      <div >
        <Button className="button"  size="large" variant="contained">
          Publicera
        </Button>
        <Button size="large">Ta bort</Button>
      </div>
    </Paper>
    </div>
  );
};