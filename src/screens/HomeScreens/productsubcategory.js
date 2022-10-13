import React from 'react';
import {View, Text, ImageBackground, Image, FlatList} from 'react-native';
import Layout from '../../utils/layout';
import {useSelector, useDispatch} from 'react-redux';

const Productsubcategory = ({route, navigation}) => {
  const {Maincat_id} = route.params;

  const MainCategory = useSelector(
    state => state.maincategory.MainCategoryData,
  );
  // console.log('MainCategory.data', MainCategory.data.URL);

  const FilterMainCat = MainCategory.data.filter(
    item => item.URL == Maincat_id,
  );
  console.log('Testing==========>', FilterMainCat[0].categories);

  const GettheFlatlist = FilterMainCat[0].categories;
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{height: 131, opacity: 0.8, width: '100%'}}
        source={require('../../assests/Dashboard/UserloginBG.png')}>
        <View style={{height: 65, width: '100%', flexDirection: 'row'}}>
          <View
            style={{
              width: '15%',
              height: 65,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={require('../../assests/Dashboard/arrowwhite.png')} />
          </View>
          <View style={{width: '55%', height: 65, justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '400',
                color: '#fff',
                marginLeft: 15,
              }}>
              SUBCATEGORY
            </Text>
          </View>

          <View
            style={{
              width: '15%',
              height: 65,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assests/Dashboard/Vectorwhite.png')}
            />
          </View>
          <View style={{width: '15%', height: 65, justifyContent: 'center'}}>
            <Image source={require('../../assests/Dashboard/Group396.png')} />
          </View>
        </View>

        <View style={{height: 65, width: '100%', alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
              height: 45,
              backgroundColor: '#fff',
              borderRadius: 12,
              elevation: 2,
            }}></View>
        </View>
      </ImageBackground>

      <ImageBackground
        style={{flex: 1, paddingVertical: 30, paddingHorizontal: 30}}
        source={require('../../assests/Dashboard/background2.png')}>
        <View style={{flex: 1}}>
          <FlatList
            data={GettheFlatlist}
            // keyExtractor={item => item.id.toString()}

            renderItem={({item}) => (
              <View
                style={{
                  width: '100%',
                  height: 37,
                  backgroundColor: '#ffffff',
                  marginTop: 5,
                  flexDirection: 'row',
                  elevation: 5,
                }}>
                <View
                  style={{
                    width: '20%',
                    height: 32,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ImageBackground
                    style={{
                      height: 30,
                      width: '85%',
                      justifyContent: 'center',
                      marginTop: 2,
                    }}
                    source={require('../../assests/Dashboard/backgroundframe.png')}>
                    <Image
                      style={{marginLeft: 13}}
                      source={require('../../assests/Dashboard/t9.png')}
                    />
                  </ImageBackground>
                </View>

                <View
                  style={{width: '60%', height: 32, justifyContent: 'center'}}>
                  <Text
                    style={{color: '#747070', fontSize: 14, fontWeight: '400'}}>
                    {item.name}
                  </Text>
                </View>

                <View
                  style={{
                    width: '20%',
                    height: 32,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../assests/Dashboard/smallarrow.png')}
                  />
                </View>
              </View>
            )}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Productsubcategory;
