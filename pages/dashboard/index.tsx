import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Settings from './Settings';
import GalleryView from './GalleryView';
import HomeRoute from './Home';


const Index = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'create', title: 'Create', focusedIcon: 'plus', },
    { key: 'settings', title: 'Settings', focusedIcon: 'cog', unfocusedIcon: 'cog-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    create: GalleryView,
    settings: Settings,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      sceneAnimationEnabled={true}
      sceneAnimationType={'shifting'}
      barStyle={{ backgroundColor: 'black' }}
      activeColor={'black'}
      inactiveColor={'white'}
      labeled={false}
      activeIndicatorStyle={{ backgroundColor: 'white', }}
    />
  );
};

export default Index;