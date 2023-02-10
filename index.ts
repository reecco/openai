import app from './src/';
import { config } from 'dotenv';

config();

app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT}`));