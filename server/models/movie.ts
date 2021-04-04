import { Movie } from '@common/types';
import mongoose, { Document, Schema } from 'mongoose';

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

movieSchema.set('toJSON', {
  transform: (_doc: never, returnedObj: Document) => {
    const modifiedObj = returnedObj;
    modifiedObj.id = returnedObj._id.toString();
    delete modifiedObj._id;
    delete modifiedObj.__v;
    return modifiedObj;
  },
});

export default mongoose.model<Movie & Document>('Movie', movieSchema);
