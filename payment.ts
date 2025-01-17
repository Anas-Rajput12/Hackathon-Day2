  
  // payment.ts
  export default {
    name: 'payment',
    title: 'Payment',
    type: 'document',
    fields: [
      {
        name: 'booking_id',
        title: 'Booking',
        type: 'reference',
        to: [{ type: 'booking' }],
      },
      {
        name: 'payment_method',
        title: 'Payment Method',
        type: 'string',
      },
      {
        name: 'amount',
        title: 'Amount',
        type: 'number',
      },
      {
        name: 'payment_date',
        title: 'Payment Date',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
      },
      {
        name: 'payment_status',
        title: 'Payment Status',
        type: 'string',
        options: {
          list: [
            { title: 'Completed', value: 'completed' },
            { title: 'Pending', value: 'pending' },
            { title: 'Failed', value: 'failed' },
          ],
          layout: 'radio',
        },
        initialValue: 'pending',
      },
    ],
  };
  
