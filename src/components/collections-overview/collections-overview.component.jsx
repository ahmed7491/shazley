import React,{ useContext } from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';
import CollectionContext from '../../context/collections/contexts.collection';


import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = () => {
  const collectionsMap = useContext(CollectionContext);
  const collections = Object.keys(collectionsMap).map(
    key => collectionsMap[key]
  );
  
  return(<CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>)
};



export default CollectionsOverview;
