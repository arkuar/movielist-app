import { User } from '@common/types';
import mongoose, { Document, Schema } from 'mongoose';
import validator from 'mongoose-unique-validator';

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
  },
  name: String,
  passwordHash: String,
});

userSchema.set('toJSON', {
  transform: (_doc: never, returnedObj: Document & Partial<User>) => {
    const modifiedObj = returnedObj;
    modifiedObj.id = returnedObj._id?.toString();
    delete modifiedObj._id;
    delete modifiedObj.__v;
    delete modifiedObj.passwordHash;
  },
});

userSchema.plugin(validator);

export default mongoose.model<User & Document>('User', userSchema);
