import { isValidObjectId, Types } from 'mongoose';

function isObjectId(value: unknown): value is Types.ObjectId {
  return isValidObjectId(value);
}

export {
  isObjectId,
};
