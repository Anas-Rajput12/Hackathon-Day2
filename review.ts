  // review.ts
  export default {
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
      {
        name: 'user_id',
        title: 'User',
        type: 'reference',
        to: [{ type: 'user' }],
      },
      {
        name: 'car_id',
        title: 'Car',
        type: 'reference',
        to: [{ type: 'car' }],
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        validation: Rule => Rule.min(1).max(5),
      },
      {
        name: 'comment',
        title: 'Comment',
        type: 'text',
      },
      {
        name: 'created_at',
        title: 'Created At',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
      },
    ],
  };