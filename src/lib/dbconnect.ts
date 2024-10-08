
import mongoose from 'mongoose';
import { react_project_data } from '@data/react_project_data';
import Project from '@models/projects';

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbconnect(): Promise<void> {
  // Check if we have a connection to the database or if it's currently connecting
 
  if (connection.isConnected) {
    console.log('Already connected to the database');
    return;
  }

  try {
    // Attempt to connect to the database
    const db = await mongoose.connect(process.env.MONGODB_URI || '', {});

    connection.isConnected = db.connections[0].readyState;
    // await Project.create(react_project_data)
    // console.log('Database connected successfully');
  } catch (error : any) {
    console.error('Database connection failed:', error.message);

    // Graceful exit in case of a connection error
    process.exit(1);
  }
}

export default dbconnect;
