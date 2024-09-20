import { Description } from '@radix-ui/react-alert-dialog';
import { Schema, model, models } from 'mongoose';



const ProjectSchema = new Schema({
  projectid : {
    type : Number,
    default : 0
  },

  name : {
    type:String,
    default : ""
  },
  tags : {
    type : Array
  },
  smalldescription : String,
  description : String,
  totalsteps : Number,
  remainingsteps : Number,
  checkpoints : {
    type : Array,
  },
  files : {
    type:Object,
  }
});

const Project = models.Project || model("Project", ProjectSchema);

export default Project;