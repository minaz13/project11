import React,{useState,useEffect} from "react";
import {Grid,Card,CardContent,Button} from "@mui/material"

export const Fruit=()=>{
    const [name,setName]=useState("Apple");
    const [path,setPath]=useState("");

      useEffect(()=>{
        setPath(`image/${name}.jpg`)
      },[name])

    return(
      <Grid container spacing={2} align="center">
        <Grid item xs={12}>
            <Card sx={{bgcolor:"crimson", color:"white"}}>
                <CardContent>
                    <h1>{name}</h1>
                    <img src={path} alt={name} width={300} height={300}  />
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={4}>
            <Button onClick={()=>setName("Apple")} variant="contained" color="success" fullWidth>Apple</Button>
        </Grid>
        <Grid item xs={4}>
            <Button onClick={()=>setName("Orange")} variant="contained" color="success" fullWidth>Orange</Button>
        </Grid>
        <Grid item xs={4}>
            <Button onClick={()=>setName("Strawberry")} variant="contained" color="success" fullWidth>Strawberry</Button>

        </Grid>

      </Grid>
    )
}