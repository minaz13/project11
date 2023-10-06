import React,{useState,useEffect} from "react";
import {Grid,Card,CardContent,Button} from "@mui/material";

export const Monuments=()=>{
    const [name,setName]=useState("Redfort");
    const [path,setPath]=useState("");

    useEffect(()=>{
   setPath(`image/${name}.jpg`)
    }, [name])

    return(
      <Grid container spacing={2}>
        <Grid item xs={12}>
            <Card sx={{bgcolor:"aqua", color:"white", textAlign:"center"}}>
                <CardContent>
            <h1>{name}</h1>
            <img src={path} alt={name} width={400} height={250} />
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={4}>
            <Button onClick={()=>setName("Gateway")} variant="contained" fullWidth color="inherit">Gateway Of India</Button>
        </Grid>
        <Grid item xs={4}>
            <Button onClick={()=>setName("Redfort")} variant="contained" fullWidth color="inherit">Red Fort</Button>
        </Grid>
        <Grid item xs={4}>
            <Button onClick={()=>setName("Parliment")} variant="contained" fullWidth color="inherit">Parliment</Button>

        </Grid>



      </Grid>
    )
}