import { BaseMovie, MovieModel, SchemaFields } from '@common/types';
import {
  Document, model, Schema, Types,
} from 'mongoose';

const schemaFields: SchemaFields<BaseMovie> = {
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  starring: {
    type: [String],
    required: true,
  },
  reviews: {
    type: [Types.ObjectId],
    ref: 'Review',
  },
  imdbId: {
    type: String,
    required: true,
    index: true,
  },
  director: {
    type: String,
    required: true,
  },
  genres: [String],
  plot: String,
  poster: String,
};

const movieSchema = new Schema(schemaFields, {
  toJSON: {
    transform: (_doc: Document, returnedObj: Partial<MovieModel>) => {
      const modifiedObj = returnedObj;
      modifiedObj.id = returnedObj._id.toString();
      delete modifiedObj._id;
      delete modifiedObj.__v;
      return modifiedObj;
    },
  },
});

const Movie = model<MovieModel>('Movie', movieSchema);

export default Movie;
