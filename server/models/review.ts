import { BaseReview, ReviewModel, SchemaFields } from '@common/types';
import {
  Document, model, Schema, Types,
} from 'mongoose';

const schemaFields: SchemaFields<BaseReview> = {
  text: {
    type: String,
    required: true,
    minlength: [5, 'Must be at least 5 characters long, got {VALUE}'],
  },
  rating: {
    type: Number,
    required: true,
    min: [1, 'Must be a value between 1 and 10, got {VALUE}'],
    max: [10, 'Must be a value between 1 and 10, got {VALUE}'],
  },
  user: {
    type: Types.ObjectId,
    ref: 'User',
  },
  movie: {
    type: Types.ObjectId,
    ref: 'Movie',
  },
};

const reviewSchema = new Schema(schemaFields, {
  toJSON: {
    transform: (_doc: Document, returnedObj: Partial<ReviewModel>) => {
      const modifiedObj = returnedObj;
      modifiedObj.id = returnedObj._id.toString();
      delete modifiedObj._id;
      delete modifiedObj.__v;
      return modifiedObj;
    },
  },
});

const Review = model<ReviewModel>('Review', reviewSchema);

export default Review;
