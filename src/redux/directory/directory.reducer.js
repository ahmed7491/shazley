const INITIAL_STATE = {
  sections: [
    {
      title: 'paper',
      imageUrl: 'https://i.ibb.co/hmQmHvS/paper.jpg',
      id: 1,
      linkUrl: 'shop/paper'
    },
    {
      title: 'cleaning',
      imageUrl: 'https://i.ibb.co/LQNBmd2/cleaning.gif',
      id: 2,
      linkUrl: 'shop/cleaning'
    },
    {
      title: 'baby',
      imageUrl: 'https://i.ibb.co/HnGrRsJ/baby.jpg',
      id: 3,
      linkUrl: 'shop/baby'
    },
    {
      title: 'cosmatics',
      imageUrl: 'https://i.ibb.co/h9by2g6/cosmatics.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/cosmatics'
    },
    {
      title: 'perfums',
      imageUrl: 'https://i.ibb.co/kKQT04x/perfum.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/perfums'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
