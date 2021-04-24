import { BaseUser, SchemaFields, UserModel } from '@common/types';
import { Document, model, Schema } from 'mongoose';
import validator from 'mongoose-unique-validator';

const schemaFields: SchemaFields<BaseUser> = {
  username: {
    type: String,
    unique: true,
    required: true,
    minlength: 3,
  },
  name: String,
  passwordHash: String,
};

const userSchema = new Schema(schemaFields, {
  toJSON: {
    transform: (_doc: Document, returnedObj: Partial<UserModel>) => {
      const modifiedObj = returnedObj;
      modifiedObj.id = returnedObj._id.toString();
      delete modifiedObj._id;
      delete modifiedObj.__v;
      delete modifiedObj.passwordHash;
    },
  },
});

userSchema.plugin(validator, { message: 'Username {VALUE} is already taken' });

const User = model<UserModel>('User', userSchema);

export default User;
