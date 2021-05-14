import { Review } from '@common/types';
import { TrashIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import ReviewItem from './ReviewItem';
import useAuth from '../util/hooks/useAuth';
import ReviewItemContainer from './ReviewItemContainer';
import ConfirmationDialog from '../components/ConfirmationDialog';

interface ReviewListProps {
  reviews: Review[];
  onDeleteClick: (id: string) => void;
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews, onDeleteClick }) => {
  const [{ username }] = useAuth();
  const [selectedReview, setSelectedReview] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (selectedReview) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [selectedReview]);

  const closeDialog = () => {
    setSelectedReview('');
  };

  const onConfirm = () => {
    if (selectedReview) {
      onDeleteClick(selectedReview);
    }
    setSelectedReview('');
    setIsOpen(false);
  };

  if (reviews.length === 0) {
    return null;
  }

  return (
    <div className="my-5 md:m-5">
      <h2 className="font-semibold text-xl ml-5">Reviews</h2>
      {reviews.map((r) => (
        <ReviewItemContainer key={r.id}>
          <ReviewItem review={r} />
          {username === r.user.username
            && (
              <button onClick={() => setSelectedReview(r.id)} className="items-center border-2 mt-5 md:mt-0 md:ml-auto flex justify-center bg-red-600 hover:bg-red-700 p-2 rounded-xl text-white font-medium uppercase transition-colors" type="button">
                <TrashIcon className="w-5 h-5 left" />
                <p>Delete</p>
              </button>
            )}
        </ReviewItemContainer>
      ))}
      <ConfirmationDialog
        isOpen={isOpen}
        onClose={closeDialog}
        onConfirm={onConfirm}
        title="Delete review"
        description="Are you sure you want to delete this review?"
        value={selectedReview}
      />
    </div>
  );
};

export default ReviewList;
