import react, { useState } from 'react';
import style from './Home.module.scss';
import {TextField, Button, Box} from '@mui/material';
import Navbar from '../../components/Navbar';
import Table from '../../components/Table';


const Home = () => {

    return (
        <div>
           <Navbar />
           <Box className={style.homeContainer}>
            <Box className={style.headerWrapper}>
                <label className={style.headertxt}> Tasks</label>
                <Button variant="outlined">Create Task</Button>
            </Box>
            <Table />
           </Box>
        </div>
    )

}

export default Home;