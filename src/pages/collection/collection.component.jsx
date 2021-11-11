import React, { useContext } from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';
import CollectionContext from '../../context/collections/contexts.collection';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionContext);
  const collection = collections[match.params.collectionId]
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};



export default CollectionPage;
