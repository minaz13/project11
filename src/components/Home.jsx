import React,{useState,useEffect} from "react";
import {Grid,Card,CardContent,Button} from "@mui/material"

export const Home=()=>{
    const [greet,setGreet]=useState("Day");
    const [msg,setMsg]=useState("");
   
   useEffect(()=>{
      setMsg(`Good ${greet}!!!`)
   },[greet])
   
    return(
          <Grid container spacing={2} align="center" >
                <Grid item xs={12}>
                    <Card sx={{bgcolor:"crimson", color:"white"}}>
                        <CardContent>
                            <h1>{msg}</h1>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Button onClick={()=>setGreet("Morning")} variant="contained" color="success" fullWidth>Morninng</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button onClick={()=>setGreet("Afternoon")} variant="contained" color="success" fullWidth>Afternoon</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button onClick={()=>setGreet("Evening")} variant="contained" color="success" fullWidth>Evening</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button onClick={()=>setGreet("Night")} variant="contained" color="success" fullWidth>Night</Button>

                </Grid>


            </Grid>
        
    )
}